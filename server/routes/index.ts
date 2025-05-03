import express from 'express'
import { auth } from '../middleware/auth'
import {
  register,
  login,
  getProfile,
  updateProfile
} from '../controllers/userController'
import {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseProgress
} from '../controllers/courseController'
import {
  getChapters,
  getChapter,
  createChapter,
  updateChapter,
  deleteChapter,
  updateChapterProgress
} from '../controllers/chapterController'

const router = express.Router()

// Auth routes
router.post('/auth/register', register)
router.post('/auth/login', login)

// User routes
router.get('/users/profile', auth, getProfile)
router.patch('/users/profile', auth, updateProfile)

// Course routes
router.get('/courses', getCourses)
router.get('/courses/:id', getCourse)
router.post('/courses', auth, createCourse)
router.patch('/courses/:id', auth, updateCourse)
router.delete('/courses/:id', auth, deleteCourse)
router.get('/courses/:id/progress', auth, getCourseProgress)

// Chapter routes
router.get('/courses/:courseId/chapters', getChapters)
router.get('/chapters/:id', getChapter)
router.post('/courses/:courseId/chapters', auth, createChapter)
router.patch('/chapters/:id', auth, updateChapter)
router.delete('/chapters/:id', auth, deleteChapter)
router.post('/chapters/:id/progress', auth, updateChapterProgress)

export default router 