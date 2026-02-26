import { NextResponse } from 'next/server'
import { blogs } from '@/data/blogs'

export async function GET() {
  return NextResponse.json({ 
    success: true,
    count: blogs.length,
    data: blogs
  })
}
