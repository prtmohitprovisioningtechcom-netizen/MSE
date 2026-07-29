import mongoose from 'mongoose';

// Delete any previously cached model to avoid stale schema conflicts
if (mongoose.models.News) {
  delete mongoose.models.News;
}

const NewsSchema = new mongoose.Schema(
  {
    images: {
      type: [String],
      required: [true, 'At least one image is required'],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: 'At least one image is required',
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model('News', NewsSchema);
