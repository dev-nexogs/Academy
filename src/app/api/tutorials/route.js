import { NextResponse } from 'next/server'
import { tutorials } from '@/data/tutorials'

export async function GET() {
  return NextResponse.json({ 
    success: true,
    count: tutorials.length,
    data: tutorials
  })
}
