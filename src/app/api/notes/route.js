import { NextResponse } from 'next/server'
import { notes } from '@/data/notes'

export async function GET() {
  return NextResponse.json({ 
    success: true,
    count: notes.length,
    data: notes
  })
}
