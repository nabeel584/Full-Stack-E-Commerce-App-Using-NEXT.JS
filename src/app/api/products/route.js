import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import { MONGODB_URL } from '@/lib/db';

export async function GET() {
  await mongoose.connect(MONGODB_URL);

  return NextResponse.json({ result: true });
}
