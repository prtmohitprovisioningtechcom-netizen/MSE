'use server';

import dbConnect from '@/lib/db';
import User from '@/models/User';
import { 
  hashPassword, 
  comparePassword, 
  setSessionCookie, 
  removeSessionCookie,
  getSession
} from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function getCurrentUser() {
  try {
    const session = await getSession();
    return session || null;
  } catch (error) {
    return null;
  }
}

export async function loginAction(formData: any) {
  try {
    await dbConnect();
    const { email, password } = formData;

    if (!email || !password) {
      return { error: 'Please enter all fields' };
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return { error: 'Invalid email or password' };
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return { error: 'Invalid email or password' };
    }

    // Set JWT token cookie
    await setSessionCookie({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role
    });

    return { 
      success: true, 
      message: 'Login successful', 
      user: { id: user._id.toString(), name: user.name, email: user.email, role: user.role } 
    };
  } catch (error: any) {
    console.error('Login action error:', error);
    return { error: error.message || 'An error occurred during login' };
  }
}

export async function registerAction(formData: any) {
  try {
    await dbConnect();
    const { name, email, password, role } = formData;

    if (!name || !email || !password) {
      return { error: 'Please fill in all fields' };
    }

    if (password.length < 6) {
      return { error: 'Password must be at least 6 characters' };
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return { error: 'An account with this email already exists' };
    }

    const hashedPassword = await hashPassword(password);
    
    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: role || 'Member'
    });

    // Automatically log user in after registration
    await setSessionCookie({
      id: newUser._id.toString(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    });

    return { 
      success: true, 
      message: 'Registration successful',
      user: { id: newUser._id.toString(), name: newUser.name, email: newUser.email, role: newUser.role }
    };
  } catch (error: any) {
    console.error('Registration action error:', error);
    return { error: error.message || 'An error occurred during registration' };
  }
}

export async function logoutAction() {
  await removeSessionCookie();
  return { success: true };
}

export async function forgotPasswordAction(formData: { email: string }) {
  try {
    await dbConnect();
    const { email } = formData;
    
    if (!email) {
      return { error: 'Please provide an email address' };
    }
    
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      // Return success anyway for security reasons (don't leak registered emails)
      return { success: true, message: 'If the email exists, a reset link will be sent.' };
    }
    
    // In production, we would send a real email using nodemailer.
    // For now, we simulate sending a password reset email.
    console.log(`[PASSWORD RESET] Simulation: Send reset link to ${email}`);
    
    return { 
      success: true, 
      message: 'If the email exists, a reset link will be sent. (Simulation: Check console logs for local verification)' 
    };
  } catch (error: any) {
    return { error: error.message || 'An error occurred.' };
  }
}

export async function resetPasswordAction(formData: any) {
  try {
    await dbConnect();
    const { email, newPassword } = formData;
    
    if (!email || !newPassword) {
      return { error: 'Email and new password are required' };
    }
    
    if (newPassword.length < 6) {
      return { error: 'Password must be at least 6 characters' };
    }
    
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return { error: 'User not found' };
    }
    
    user.password = await hashPassword(newPassword);
    await user.save();
    
    return { success: true, message: 'Password reset successful. You can now log in.' };
  } catch (error: any) {
    return { error: error.message || 'An error occurred.' };
  }
}
