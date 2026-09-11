import mongoose from 'mongoose';

// Delete any previously cached model to avoid stale schema conflicts in development
if (mongoose.models.MseCciaAward) {
  delete mongoose.models.MseCciaAward;
}

const MseCciaAwardSchema = new mongoose.Schema(
  {
    images: {
      type: [String],
      required: [true, 'At least one image is required'],
      validate: {
        validator: (v: string[]) => Array.isArray(v) && v.length > 0,
        message: 'At least one image is required',
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model('MseCciaAward', MseCciaAwardSchema);
