import { Request, Response } from 'express'
import { Course } from '../models/Course'
import { Chapter } from '../models/Chapter'

export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find().populate('chapters')
    res.json(courses)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' })
  }
}

export const getCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id).populate('chapters')
    if (!course) {
      return res.status(404).json({ error: 'Course not found' })
    }
    res.json(course)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course' })
  }
}

export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = new Course(req.body)
    await course.save()
    res.status(201).json(course)
  } catch (error) {
    res.status(400).json({ error: 'Failed to create course' })
  }
}

export const updateCourse = async (req: Request, res: Response) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['title', 'description', 'level', 'imageUrl']
  const isValidOperation = updates.every(update => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).json({ error: 'Invalid updates' })
  }

  try {
    const course = await Course.findById(req.params.id)
    if (!course) {
      return res.status(404).json({ error: 'Course not found' })
    }

    updates.forEach(update => (course as any)[update] = req.body[update])
    await course.save()
    res.json(course)
  } catch (error) {
    res.status(400).json({ error: 'Failed to update course' })
  }
}

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id)
    if (!course) {
      return res.status(404).json({ error: 'Course not found' })
    }

    // Delete associated chapters
    await Chapter.deleteMany({ courseId: course._id })
    await course.remove()
    res.json(course)
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete course' })
  }
}

export const getCourseProgress = async (req: Request, res: Response) => {
  try {
    const user = req.user
    const course = await Course.findById(req.params.id)
    if (!course) {
      return res.status(404).json({ error: 'Course not found' })
    }

    const progress = user.progress.filter(p => p.courseId.toString() === course._id.toString())
    res.json(progress)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course progress' })
  }
} 