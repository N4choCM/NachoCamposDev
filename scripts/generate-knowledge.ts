import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildKbFile, SYSTEM_PROMPT } from '../src/data/knowledge-builder.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const kbJson = buildKbFile()
const kbPath = path.join(root, 'netlify/functions/knowledge.json')
const generatedKbPath = path.join(root, 'src/generated/knowledge.ts')

fs.mkdirSync(path.dirname(kbPath), { recursive: true })
fs.mkdirSync(path.dirname(generatedKbPath), { recursive: true })

fs.writeFileSync(kbPath, kbJson)
fs.writeFileSync(
  generatedKbPath,
  `// Auto-generated — do not edit manually\nexport const KNOWLEDGE_JSON = ${JSON.stringify(kbJson)};\nexport const SYSTEM_PROMPT = ${JSON.stringify(SYSTEM_PROMPT)};\n`,
)

console.log('Knowledge base generated successfully.')
