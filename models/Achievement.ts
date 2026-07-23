import mongoose from 'mongoose';

const AchievementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    images: {
      type: [String],
      required: [true, 'At least one image is required'],
    }
  },
  { timestamps: true }
);

export default mongoose.models.Achievement || mongoose.model('Achievement', AchievementSchema);
