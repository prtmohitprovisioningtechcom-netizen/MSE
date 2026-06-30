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

export async function adminLoginAction(formData: { email: string; password: string }) {
  const result = await loginAction(formData);
  if (result.error) return result;

  const role = result.user?.role;
  if (role !== 'Admin' && role !== 'Super Admin') {
    await removeSessionCookie();
    return { error: 'Admin access only. Invalid admin credentials.' };
  }

  return result;
}

export async function registerAction(formData: any) {
  try {
    await dbConnect();
    const { name, email, password } = formData;

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
      role: 'Member'
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

export async function updateProfileAction(formData: { name: string; email: string }) {
  try {
    const session = await getSession();
    if (!session) return { error: 'Not authenticated' };

    const { name, email } = formData;
    if (!name?.trim() || !email?.trim()) {
      return { error: 'Name and email are required' };
    }

    await dbConnect();

    const existing = await User.findOne({
      email: email.toLowerCase(),
      _id: { $ne: session.id },
    });
    if (existing) {
      return { error: 'This email is already in use by another account' };
    }

    const user = await User.findByIdAndUpdate(
      session.id,
      { name: name.trim(), email: email.toLowerCase().trim() },
      { new: true }
    );
    if (!user) return { error: 'User not found' };

    await setSessionCookie({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    });

    revalidatePath('/admin');
    revalidatePath('/admin/settings');

    return {
      success: true,
      message: 'Profile updated successfully',
      user: { id: user._id.toString(), name: user.name, email: user.email, role: user.role },
    };
  } catch (error: any) {
    return { error: error.message || 'Failed to update profile' };
  }
}

export async function changePasswordAction(formData: {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}) {
  try {
    const session = await getSession();
    if (!session) return { error: 'Not authenticated' };

    const { currentPassword, newPassword, confirmPassword } = formData;

    if (!currentPassword || !newPassword || !confirmPassword) {
      return { error: 'Please fill in all password fields' };
    }

    if (newPassword.length < 6) {
      return { error: 'New password must be at least 6 characters' };
    }

    if (newPassword !== confirmPassword) {
      return { error: 'New passwords do not match' };
    }

    await dbConnect();
    const user = await User.findById(session.id);
    if (!user) return { error: 'User not found' };

    const isMatch = await comparePassword(currentPassword, user.password);
    if (!isMatch) {
      return { error: 'Current password is incorrect' };
    }

    user.password = await hashPassword(newPassword);
    await user.save();

    return { success: true, message: 'Password changed successfully' };
  } catch (error: any) {
    return { error: error.message || 'Failed to change password' };
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
