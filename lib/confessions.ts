import fs from 'fs'
import path from 'path'

export interface Confession {
  id: number
  text: string
  createdAt: string
}

export const readConfessions = (): Confession[] => {
  try {
    const filePath = path.join(process.cwd(), 'confessions.json')
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading confessions:', error)
    return []
  }
}

export const getRandomConfession = (): Confession | null => {
  const confessions = readConfessions()
  if (confessions.length === 0) return null
  return confessions[Math.floor(Math.random() * confessions.length)]
}

export const countConfessions = (): number => {
  return readConfessions().length
}
