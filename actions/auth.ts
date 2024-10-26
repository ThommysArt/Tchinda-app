'use server'

import { signIn, signOut } from 'next-auth/react'
import { AuthError } from 'next-auth'

export async function authenticate(email: string) {
  try {
    await signIn('passkey', { email, redirect: false })
    return { success: true }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials.' }
        default:
          return { error: 'Something went wrong.' }
      }
    }
    throw error
  }
}

export async function signOutUser() {
  try {
    await signOut({ redirect: false })
    return { success: true }
  } catch (error) {
    return { error: 'Failed to sign out.' }
  }
}