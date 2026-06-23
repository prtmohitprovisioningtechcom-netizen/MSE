import mongoose from 'mongoose';

const DocumentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now }
});

const MembershipSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true, // A user can only have one membership application
    },
    companyName: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: ['Individual', 'MSME', 'Startup', 'Corporate', 'Institutional'],
      required: [true, 'Membership type is required'],
    },
    phone: {
      type: String,
      required: [true, 'Contact number is required'],
    },
    address: {
      type: String,
      required: [true, 'Company address is required'],
    },
    website: {
      type: String,
      trim: true,
    },
    industryType: {
      type: String,
      required: [true, 'Industry sector is required'],
    },
    panNumber: {
      type: String,
      required: [true, 'PAN is required'],
      uppercase: true,
      trim: true,
    },
    gstNumber: {
      type: String,
      uppercase: true,
      trim: true,
    },
    documents: [DocumentSchema],
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
    rejectionReason: {
      type: String,
    },
    approvedAt: {
      type: Date,
    }
  },
  { timestamps: true }
);

export default mongoose.models.Membership || mongoose.model('Membership', MembershipSchema);
