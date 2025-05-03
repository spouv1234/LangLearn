import mongoose from 'mongoose'

export interface ICourse extends mongoose.Document {
  title: string
  description: string
  level: string
  chapters: mongoose.Types.ObjectId[]
  imageUrl: string
  createdAt: Date
  updatedAt: Date
}

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: true
  },
  chapters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  }],
  imageUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export const Course = mongoose.model<ICourse>('Course', courseSchema) 