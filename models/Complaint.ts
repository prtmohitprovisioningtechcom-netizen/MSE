import mongoose from 'mongoose';

const ComplaintUpdateSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Resolved', 'Closed'],
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

const ComplaintSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false, // Optional if guest submission
    },
    trackingId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    title: {
      type: String,
      required: [true, 'Grievance title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Detailed description is required'],
    },
    category: {
      type: String,
      enum: ['GST & Taxation', 'Infrastructure & Power', 'Credit & Finance', 'Policy & Liaison', 'Vendor Dispute', 'Other'],
      required: [true, 'Please select a grievance category'],
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Resolved', 'Closed'],
      default: 'Pending',
    },
    resolutionDetails: {
      type: String,
    },
    updates: [ComplaintUpdateSchema]
  },
  { timestamps: true }
);

export default mongoose.models.Complaint || mongoose.model('Complaint', ComplaintSchema);
