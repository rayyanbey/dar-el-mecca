import { NextResponse } from 'next/server';
import { getReviews } from '../../../controllers/review.controller';
import { cors } from '../../../utils/cors';

export async function GET(request) {
  try {
    //await cors(request);
    const reviews = await getReviews();
    return NextResponse.json({
      status: 200,
      message: 'Success',
      data: reviews,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: 'Error retrieving reviews',
      error: error.message,
    }, { status: 500 });
  }
} 