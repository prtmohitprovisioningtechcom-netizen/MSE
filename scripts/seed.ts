import dbConnect from '@/lib/db';
import User from '@/models/User';
import Membership from '@/models/Membership';
import Event from '@/models/Event';
import News from '@/models/News';
import Gallery from '@/models/Gallery';
import GovernmentScheme from '@/models/GovernmentScheme';
import Vendor from '@/models/Vendor';
import Partner from '@/models/Partner';
import Contact from '@/models/Contact';
import Complaint from '@/models/Complaint';

interface SeedOptions {
  clear?: boolean;
}

async function seed(options: SeedOptions = { clear: false }) {
  await dbConnect();

  if (options.clear) {
    await Promise.all([
      User.deleteMany({}),
      Membership.deleteMany({}),
      Event.deleteMany({}),
      News.deleteMany({}),
      Gallery.deleteMany({}),
      GovernmentScheme.deleteMany({}),
      Vendor.deleteMany({}),
      Partner.deleteMany({}),
      Contact.deleteMany({}),
      Complaint.deleteMany({}),
    ]);
    console.log('✅ Cleared existing collections');
  }

  // Users for each role (password is plain text for demo – real app hashes on registration)
  const users = await User.insertMany([
    { name: 'Super Admin', email: 'superadmin@example.com', password: 'Password123!', role: 'Super Admin' },
    { name: 'Admin User', email: 'admin@example.com', password: 'Password123!', role: 'Admin' },
    { name: 'Member User', email: 'member@example.com', password: 'Password123!', role: 'Member' },
    { name: 'Vendor User', email: 'vendor@example.com', password: 'Password123!', role: 'Vendor' },
    { name: 'Entrepreneur User', email: 'entrepreneur@example.com', password: 'Password123!', role: 'Entrepreneur' },
  ]);

  const [superAdmin, admin, member, vendor, entrepreneur] = users;

  // Sample Membership for member
  await Membership.create({
    user: member._id,
    companyName: 'Acme Industries Ltd.',
    type: 'MSME',
    status: 'Approved',
    documents: [],
    applicationDate: new Date(),
  });

  // Sample Events
  await Event.insertMany([
    {
      title: 'National MSME Trade Fair',
      description: 'Showcase of MSME products and services.',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      location: 'Mumbai, India',
      category: 'Trade Fair',
      registrations: 0,
    },
    {
      title: 'Vendor Procurement Webinar',
      description: 'Learn how to win government contracts.',
      date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      location: 'Online',
      category: 'Workshop',
      registrations: 0,
    },
  ]);

  // Sample News
  await News.insertMany([
    {
      title: 'MSE Launches New Credit Scheme',
      content: 'The Chamber announces a new low‑interest credit scheme for emerging MSMEs.',
      type: 'Press Release',
      mediaUrl: '',
      publishedAt: new Date(),
    },
    {
      title: 'Annual Report 2025 Released',
      content: 'Key performance metrics and growth statistics of the chamber.',
      type: 'News Article',
      mediaUrl: '',
      publishedAt: new Date(),
    },
  ]);

  // Sample Gallery
  await Gallery.insertMany([
    { title: 'Trade Fair 2025', type: 'Photo', url: '/gallery/trade-fair-2025.jpg', createdAt: new Date() },
    { title: 'Vendor Meet Highlights', type: 'Video', url: '/gallery/vendor-meet.mp4', createdAt: new Date() },
  ]);

  // Sample Government Schemes
  await GovernmentScheme.insertMany([
    {
      title: 'Udyam Registration Support',
      description: 'Assistance for MSMEs to obtain Udyam registration.',
      eligibility: 'All registered MSMEs',
      benefits: 'Access to government tenders and subsidies',
      link: 'https://udyamregistration.gov.in',
    },
    {
      title: 'Credit Guarantee Fund',
      description: 'Collateral‑free loans up to INR 5 crore.',
      eligibility: 'MSMEs with turnover < INR 250 crore',
      benefits: 'Easy financing',
      link: 'https://cgf.gov.in',
    },
  ]);

  // Sample Vendors
  await Vendor.create({
    user: vendor._id,
    companyName: 'SupplyCo Pvt Ltd.',
    products: ['Raw Materials', 'Machinery'],
    procurementInterest: true,
    vendorStatus: 'Active',
  });

  // Sample Partners
  await Partner.insertMany([
    { name: 'Bank of India', logoUrl: '/partners/boi.png', websiteUrl: 'https://bankofindia.co.in' },
    { name: 'Tech Solutions Ltd.', logoUrl: '/partners/tech.png', websiteUrl: 'https://techsolutions.com' },
  ]);

  // Sample Contacts (inquiries)
  await Contact.insertMany([
    { name: 'Rohit Sharma', email: 'rohit@example.com', subject: 'Membership query', message: 'How to apply for MSME membership?', status: 'Unread' },
    { name: 'Anita Patel', email: 'anita@example.com', subject: 'Event sponsorship', message: 'Interested in sponsoring the trade fair.', status: 'Unread' },
  ]);

  // Sample Complaints
  await Complaint.create({
    user: member._id,
    title: 'Delayed payment from buyer',
    description: 'Payment for invoice #1234 is overdue by 30 days.',
    category: 'Payment Issue',
    status: 'Pending',
    trackingId: 'CMP-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
    updates: [],
  });

  console.log('✅ Seed data inserted successfully');
  process.exit(0);
}

seed({ clear: true }).catch((err) => {
  console.error('❌ Seed error:', err);
  process.exit(1);
});
