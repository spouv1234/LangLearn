import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../models/User'

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' })
    }

    // Create new user
    const user = new User({
      name,
      email,
      password
    })

    await user.save()

    // Generate token
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET || 'your_jwt_secret_here',
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    )

    res.status(201).json({ user, token })
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    // Find user by email
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Check password
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Generate token
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET || 'your_jwt_secret_here',
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    )

    res.json({ user, token })
  } catch (error) {
    res.status(400).json({ error: 'Login failed' })
  }
}

export const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user._id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: 'Failed to get profile' })
  }
}

export const updateProfile = async (req: Request, res: Response) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'level']
  const isValidOperation = updates.every(update => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).json({ error: 'Invalid updates' })
  }

  try {
    updates.forEach(update => (req.user as any)[update] = req.body[update])
    await req.user.save()
    res.json(req.user)
  } catch (error) {
    res.status(400).json({ error: 'Failed to update profile' })
  }
} 