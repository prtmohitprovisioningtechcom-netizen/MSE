import mongoose from 'mongoose';

// Delete any previously cached model to avoid stale schema conflicts
if (mongoose.models.Event) {
  delete mongoose.models.Event;
}

const EventSchema = new mongoose.Schema(
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

export default mongoose.model('Event', EventSchema);
