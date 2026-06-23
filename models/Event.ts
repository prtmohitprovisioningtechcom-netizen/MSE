import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Event title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Event description is required'],
    },
    date: {
      type: Date,
      required: [true, 'Event date and time is required'],
    },
    location: {
      type: String,
      required: [true, 'Event location is required'],
    },
    category: {
      type: String,
      enum: ['Workshop', 'Vendor Meet', 'Trade Fair', 'Exhibition'],
      required: [true, 'Event category is required'],
    },
    capacity: {
      type: Number,
      default: 100,
    },
    image: {
      type: String, // Cloudinary Image URL or standard fallback
      default: '',
    },
    registrationDeadline: {
      type: Date,
    },
    registrations: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        registeredAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
