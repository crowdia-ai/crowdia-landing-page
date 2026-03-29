import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

const emailSchema = z.string().email('Please enter a valid email address').optional();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate email (optional)
    const email = body.email ? emailSchema.parse(body.email) : null;
    const name = typeof body.name === 'string' ? body.name : null;
    const source = typeof body.source === 'string' ? body.source : 'landing-page';
    const metadata = body.metadata && typeof body.metadata === 'object' ? body.metadata : null;
    
    // Insert into Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert([
        {
          email,
          name: name || null,
          source,
          metadata,
        },
      ]);

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist!' },
          { status: 400 }
        );
      }
      
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to join waitlist. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
