import type { HandlerEvent } from '@netlify/functions'
import { stream } from '@netlify/functions'
import { Readable } from 'node:stream'
import { SITE_TITLE, SITE_URL } from '../../src/constants/site'
import { KNOWLEDGE_JSON } from '../../src/generated/knowledge'

const SYSTEM_PROMPT = `You are the AI assistant on Nacho Campos Martí's personal portfolio website.

STRICT RULES — follow these without exception:
1. ONLY answer questions about Juan Ignacio "Nacho" Campos Martí and topics explicitly covered in the KNOWLEDGE BASE below (career, skills, projects, education, experience, languages, certifications, contact details such as email and phone).
2. If a question is NOT about Nacho or his profile — including general knowledge, sports, news, politics, other people, unrelated coding help, dates of external events, or anything not in the knowledge base — you MUST refuse. Do NOT answer using your general training knowledge, even if you know the answer.
3. If the question is about Nacho but the answer is not in the knowledge base, say honestly that you don't have that information. Never invent or guess.
4. When contact details (email, phone, social links) appear in the knowledge base, share them when asked. Do not claim they are unavailable if they are present.
5. Keep answers concise, friendly, and professional. Match the language the user writes in (English or Spanish).
6. Use plain text only. Do not use markdown, asterisks, or bullet symbols.

When refusing an off-topic question, reply ONLY with a short message like:
- Spanish: "Solo puedo ayudarte con preguntas sobre Nacho Campos y su perfil profesional. ¿Hay algo sobre su experiencia, proyectos o formación que te gustaría saber?"
- English: "I can only help with questions about Nacho Campos and his professional profile. Is there anything about his experience, projects, or background you'd like to know?"

KNOWLEDGE BASE:
`

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 20
const RATE_WINDOW_MS = 60_000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  entry.count++
  return entry.count > RATE_LIMIT
}

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

function getJsonStream(body: object) {
  return Readable.from(Buffer.from(JSON.stringify(body)))
}

export const handler = stream(async (event: HandlerEvent) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: corsHeaders(),
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      body: getJsonStream({ error: 'Method not allowed' }),
    }
  }

  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    return {
      statusCode: 503,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      body: getJsonStream({ error: 'Chat service not configured' }),
    }
  }

  const ip =
    event.headers['x-forwarded-for']?.split(',')[0]?.trim() ??
    event.headers['client-ip'] ??
    'unknown'

  if (isRateLimited(ip)) {
    return {
      statusCode: 429,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      body: getJsonStream({ error: 'Too many requests' }),
    }
  }

  try {
    const body = JSON.parse(event.body ?? '{}') as {
      messages?: ChatMessage[]
    }

    const userMessages = (body.messages ?? []).slice(-10)

    const model =
      process.env.OPENROUTER_MODEL ?? 'meta-llama/llama-3.3-70b-instruct:free'

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.URL ?? SITE_URL,
        'X-Title': SITE_TITLE,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT + KNOWLEDGE_JSON },
          ...userMessages,
        ],
        stream: true,
        max_tokens: 1024,
        temperature: 0.2,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('OpenRouter error:', errorText)
      return {
        statusCode: 502,
        headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
        body: getJsonStream({ error: 'Upstream error' }),
      }
    }

    if (!response.body) {
      return {
        statusCode: 502,
        headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
        body: getJsonStream({ error: 'No stream body' }),
      }
    }

    return {
      statusCode: 200,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
      body: response.body,
    }
  } catch (err) {
    console.error('Chat handler error:', err)
    return {
      statusCode: 500,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      body: getJsonStream({ error: 'Internal server error' }),
    }
  }
})

function corsHeaders(): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }
}
