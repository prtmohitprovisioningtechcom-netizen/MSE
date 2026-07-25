import mongoose from 'mongoose';

const AchievementSchema = new mongoose.Schema(
  {
    images: {
      type: [String],
      required: [true, 'At least one image is required'],
    }
  },
  { timestamps: true }
);

export default mongoose.models.Achievement || mongoose.model('Achievement', AchievementSchema);
