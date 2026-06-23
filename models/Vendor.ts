import mongoose from 'mongoose';

const VendorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    companyName: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    businessType: {
      type: String,
      required: [true, 'Business category (e.g. Manufacturing, Services) is required'],
    },
    products: {
      type: [String],
      required: [true, 'Please specify products or services provided'],
    },
    scale: {
      type: String,
      enum: ['Micro', 'Small', 'Medium'],
      required: [true, 'Enterprise scale is required'],
    },
    address: {
      type: String,
      required: [true, 'Company address is required'],
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
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
    procurementInterest: {
      type: String,
      default: '',
    }
  },
  { timestamps: true }
);

export default mongoose.models.Vendor || mongoose.model('Vendor', VendorSchema);
