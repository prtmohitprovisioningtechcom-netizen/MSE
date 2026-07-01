import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Membership from '@/models/Membership';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      ownerName,
      email,
      companyName,
      type,
      phone,
      address,
      industryType,
      panNumber,
      gstNumber,
      udyamNumber,
      website,
      message,
    } = data;

    if (!ownerName || !email || !companyName || !type || !phone || !address || !industryType || !panNumber) {
      return NextResponse.json({ error: 'Please fill in all required fields' }, { status: 400 });
    }

    await dbConnect();

    const membership = await Membership.create({
      ownerName,
      email,
      companyName,
      type,
      phone,
      address,
      industryType,
      panNumber,
      gstNumber: gstNumber || '',
      udyamNumber: udyamNumber || '',
      applicationNotes: message || '',
      website: website || '',
      documents: [],
      status: 'Pending',
    });

    return NextResponse.json({
      success: true,
      message: 'Your membership application has been submitted.',
      data: { id: membership._id.toString() },
    });
  } catch (error: unknown) {
    console.error('Public membership application error:', error);
    const message = error instanceof Error ? error.message : 'Failed to submit application';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
