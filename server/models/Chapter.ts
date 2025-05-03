import mongoose from 'mongoose'

export interface IVocabulary {
  chinese: string
  pinyin: string
  english: string
}

export interface IChapter extends mongoose.Document {
  title: string
  content: string
  audioUrl: string
  vocabulary: IVocabulary[]
  courseId: mongoose.Types.ObjectId
  order: number
  createdAt: Date
  updatedAt: Date
}

const chapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  audioUrl: {
    type: String,
    required: true
  },
  vocabulary: [{
    chinese: {
      type: String,
      required: true
    },
    pinyin: {
      type: String,
      required: true
    },
    english: {
      type: String,
      required: true
    }
  }],
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  order: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

export const Chapter = mongoose.model<IChapter>('Chapter', chapterSchema) 