import mongoose from 'mongoose';

const GallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: ['Photo', 'Video'],
      required: [true, 'Type (Photo/Video) is required'],
    },
    url: {
      type: String,
      required: [true, 'Media URL is required'],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema);
