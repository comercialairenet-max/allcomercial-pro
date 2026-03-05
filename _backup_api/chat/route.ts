import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { message, context } = await req.json()

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Eres un asistente virtual amigable y profesional de All Comercial, una empresa que ofrece: ${context.services.join(', ')}. 
          Responde preguntas sobre la empresa, sus servicios, y ayuda a los visitantes del sitio web. 
          Sé conciso pero amigable. Si no sabes algo, ofrece contactar directamente.`
        },
        {
          role: "user",
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    return NextResponse.json({ 
      message: completion.choices[0].message.content 
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Error procesando la solicitud' },
      { status: 500 }
    )
  }
}