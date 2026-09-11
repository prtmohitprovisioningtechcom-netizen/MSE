import mongoose from 'mongoose';

// Delete any previously cached model to avoid stale schema conflicts
if (mongoose.models.News) {
  delete mongoose.models.News;
}

const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      default: '',
    },
    content: {
      type: String,
      trim: true,
      default: '',
    },
    images: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model('News', NewsSchema);
