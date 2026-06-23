import mongoose from 'mongoose';

const GovernmentSchemeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Scheme title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Scheme description is required'],
    },
    eligibility: {
      type: String,
      required: [true, 'Eligibility details are required'],
    },
    benefits: {
      type: String,
      required: [true, 'Benefits details are required'],
    },
    category: {
      type: String,
      enum: [
        'Credit & Financial Assistance',
        'Skill Development & Training',
        'Infrastructure Support',
        'Technology Upgradation',
        'SC/ST Entrepreneurship',
        'Other'
      ],
      required: [true, 'Category is required'],
    },
    link: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export default mongoose.models.GovernmentScheme || mongoose.model('GovernmentScheme', GovernmentSchemeSchema);
