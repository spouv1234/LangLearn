import { Request, Response } from 'express'
import { Chapter } from '../models/Chapter'
import { Course } from '../models/Course'

export const getChapters = async (req: Request, res: Response) => {
  try {
    const chapters = await Chapter.find({ courseId: req.params.courseId })
      .sort('order')
    res.json(chapters)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chapters' })
  }
}

export const getChapter = async (req: Request, res: Response) => {
  try {
    const chapter = await Chapter.findById(req.params.id)
    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' })
    }
    res.json(chapter)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chapter' })
  }
}

export const createChapter = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.courseId)
    if (!course) {
      return res.status(404).json({ error: 'Course not found' })
    }

    const chapter = new Chapter({
      ...req.body,
      courseId: course._id
    })

    await chapter.save()
    course.chapters.push(chapter._id)
    await course.save()

    res.status(201).json(chapter)
  } catch (error) {
    res.status(400).json({ error: 'Failed to create chapter' })
  }
}

export const updateChapter = async (req: Request, res: Response) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['title', 'content', 'audioUrl', 'vocabulary', 'order']
  const isValidOperation = updates.every(update => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).json({ error: 'Invalid updates' })
  }

  try {
    const chapter = await Chapter.findById(req.params.id)
    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' })
    }

    updates.forEach(update => (chapter as any)[update] = req.body[update])
    await chapter.save()
    res.json(chapter)
  } catch (error) {
    res.status(400).json({ error: 'Failed to update chapter' })
  }
}

export const deleteChapter = async (req: Request, res: Response) => {
  try {
    const chapter = await Chapter.findById(req.params.id)
    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' })
    }

    // Remove chapter from course
    const course = await Course.findById(chapter.courseId)
    if (course) {
      course.chapters = course.chapters.filter(id => id.toString() !== chapter._id.toString())
      await course.save()
    }

    await chapter.remove()
    res.json(chapter)
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete chapter' })
  }
}

export const updateChapterProgress = async (req: Request, res: Response) => {
  try {
    const user = req.user
    const chapter = await Chapter.findById(req.params.id)
    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' })
    }

    const progressIndex = user.progress.findIndex(
      p => p.chapterId.toString() === chapter._id.toString()
    )

    if (progressIndex === -1) {
      user.progress.push({
        courseId: chapter.courseId,
        chapterId: chapter._id,
        completed: true
      })
    } else {
      user.progress[progressIndex].completed = true
    }

    await user.save()
    res.json(user.progress)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update chapter progress' })
  }
} 