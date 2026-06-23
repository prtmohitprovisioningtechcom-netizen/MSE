import mongoose from 'mongoose';

const PartnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Partner name is required'],
      trim: true,
    },
    logoUrl: {
      type: String,
      required: [true, 'Logo URL is required'],
    },
    websiteUrl: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      enum: ['Government', 'Industry', 'Academic'],
      required: [true, 'Partner type is required'],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Partner || mongoose.model('Partner', PartnerSchema);
