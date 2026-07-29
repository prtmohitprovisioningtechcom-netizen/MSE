import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import Membership from '@/models/Membership';
import Event from '@/models/Event';
import News from '@/models/News';
import GovernmentScheme from '@/models/GovernmentScheme';
import Testimonial from '@/models/Testimonial';
import Partner from '@/models/Partner';
import Complaint from '@/models/Complaint';
import Contact from '@/models/Contact';
import { hashPassword } from '@/lib/auth';

export async function GET() {
  try {
    await dbConnect();
    
    // Clear existing data (optional, let's reset to ensure clean seed)
    await User.deleteMany({});
    await Membership.deleteMany({});
    await Event.deleteMany({});
    await News.deleteMany({});
    await GovernmentScheme.deleteMany({});
    await Testimonial.deleteMany({});
    await Partner.deleteMany({});
    await Complaint.deleteMany({});
    await Contact.deleteMany({});
    
    console.log('Database cleared. Seeding initial data...');

    // 1. Create Users
    const hashedAdminPassword = await hashPassword('admin123');
    const hashedMemberPassword = await hashPassword('member123');
    const hashedVendorPassword = await hashPassword('vendor123');
    const hashedEntrepreneurPassword = await hashPassword('entrepreneur123');

    const admin = await User.create({
      name: 'Dr. Ramesh Kumar (IAS Retd.)',
      email: 'admin@mse.org.in',
      password: hashedAdminPassword,
      role: 'Admin'
    });

    const memberUser = await User.create({
      name: 'Rajesh Shah',
      email: 'member@mse.org.in',
      password: hashedMemberPassword,
      role: 'Member'
    });

    const vendorUser = await User.create({
      name: 'Sunita Sharma',
      email: 'vendor@mse.org.in',
      password: hashedVendorPassword,
      role: 'Vendor'
    });

    const entrepreneurUser = await User.create({
      name: 'Amit Patel',
      email: 'entrepreneur@mse.org.in',
      password: hashedEntrepreneurPassword,
      role: 'Entrepreneur'
    });

    // 2. Create Membership Application for Member
    await Membership.create({
      user: memberUser._id,
      companyName: 'Apex Industries Ltd.',
      type: 'MSME',
      phone: '+91 98765 43210',
      address: 'Plot No. 42, GIDC Industrial Estate, Sector 2, Gandhinagar, Gujarat',
      website: 'https://apexindustries.co.in',
      industryType: 'Manufacturing & Engineering',
      panNumber: 'AAACA1234F',
      gstNumber: '24AAACA1234F1Z0',
      status: 'Approved',
      approvedAt: new Date()
    });

    // 3. Create Events (image-only gallery)
    const events = [
      {
        images: [
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
        ]
      }
    ];
    await Event.create(events);

    // 4. Create News (image-only gallery)
    const news = [
      {
        images: [
          'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
        ]
      }
    ];
    await News.create(news);

    // 5. Create Government Schemes
    const schemes = [
      {
        title: 'CGTMSE - Credit Guarantee Fund Trust for Micro and Small Enterprises',
        description: 'Collateral-free credit facility up to ₹5 Crores for new and existing micro and small enterprises.',
        eligibility: 'New and existing Micro and Small Enterprises (Manufacturing and Services sectors). Retail trade is also eligible.',
        benefits: 'Collateral-free loans, trust guarantee cover ranging from 75% to 85% of credit amount, encouraging easy banking access.',
        category: 'Credit & Financial Assistance',
        link: 'https://www.cgtmse.in/'
      },
      {
        title: 'PMEGP - Prime Minister’s Employment Generation Programme',
        description: 'Credit-linked subsidy scheme for setting up new micro-enterprises in manufacturing and service sectors.',
        eligibility: 'Any individual above 18 years of age. Minimum VIII standard pass for projects costing above ₹10 Lakhs in manufacturing.',
        benefits: 'Subsidies up to 35% of project cost in rural areas, bank loans for the remaining project balance (project cost limits up to ₹50 Lakhs).',
        category: 'SC/ST Entrepreneurship',
        link: 'https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp'
      },
      {
        title: 'ZED Certification Scheme - Zero Defect Zero Effect',
        description: 'Financial assistance and support for MSMEs to adopt world-class quality standards and green manufacturing processes.',
        eligibility: 'All MSMEs registered with Udyam registration portal.',
        benefits: 'Subsidies up to 80% on certification cost, handholding support, and preference in public procurement tenders.',
        category: 'Technology Upgradation',
        link: 'https://zed.msme.gov.in/'
      }
    ];
    await GovernmentScheme.create(schemes);

    // 6. Create Testimonials
    const testimonials = [
      {
        name: 'Vikas Mandlewala',
        role: 'Founder & CEO',
        company: 'Vikas Tech-Forgings',
        content: 'MSE is a fantastic partner. Through their Buyer-Seller meets, we secured our first procurement contract with Indian Railways, boosting our company turnover by 40% in a single year.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
        isFeatured: true
      },
      {
        name: 'Priyanka Sen',
        role: 'Managing Director',
        company: 'Eco-Fab Textiles Pvt Ltd',
        content: 'Their training programs on government scheme awareness helped us identify and qualify for the ZED Green Certification. The liaison support from the chamber resolved our power subsidy grievance within 3 weeks!',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop',
        isFeatured: true
      }
    ];
    await Testimonial.create(testimonials);

    // 7. Create Partners
    const partners = [
      { name: 'Ministry of MSME, Govt of India', logoUrl: '/partners/msme.png', websiteUrl: 'https://msme.gov.in', type: 'Government' },
      { name: 'National Small Industries Corporation (NSIC)', logoUrl: '/partners/nsic.png', websiteUrl: 'https://nsic.co.in', type: 'Government' },
      { name: 'SIDBI', logoUrl: '/partners/sidbi.png', websiteUrl: 'https://sidbi.in', type: 'Government' }
    ];
    await Partner.create(partners);

    // 8. Create a dummy Grievance Complaint for Member
    await Complaint.create({
      user: memberUser._id,
      trackingId: 'MSE-260623-H3K9',
      name: 'Rajesh Shah',
      email: 'member@mse.org.in',
      phone: '+91 98765 43210',
      title: 'Delayed payment from Public Sector Corporation',
      description: 'Our enterprise supplied engineering components worth ₹14.5 Lakhs. The invoice is overdue by 120 days. Under MSMED Act, payment must be released within 45 days. Requesting chamber mediation.',
      category: 'Vendor Dispute',
      status: 'In Progress',
      updates: [
        { status: 'Pending', comment: 'Grievance registered. Tracking ID: MSE-260623-H3K9.' },
        { status: 'In Progress', comment: 'Notice has been dispatched to the respondent PSU under MSE arbitration guidelines.' }
      ]
    });

    console.log('Database successfully seeded!');
    return NextResponse.json({ 
      success: true, 
      message: 'Database seeded successfully. You can log in using admin@mse.org.in / admin123, member@mse.org.in / member123, vendor@mse.org.in / vendor123, or entrepreneur@mse.org.in / entrepreneur123' 
    });
  } catch (error: any) {
    console.error('Seed API error:', error);
    return NextResponse.json({ error: error.message || 'Seeding failed' }, { status: 500 });
  }
}
