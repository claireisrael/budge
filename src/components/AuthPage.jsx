import React, { useState } from 'react';
import { TextInput, PasswordInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

  const loginForm = useForm({
    initialValues: { email: '', password: '' },

    // Validation rules for login
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 8 ? 'Password must have at least 8 characters' : null),
    },
  });

  const signupForm = useForm({
    initialValues: { name: '', email: '', password: '', confirmPassword: '' },

    // Validation rules for signup
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 8 ? 'Password must have at least 8 characters' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords do not match' : null,
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        {isLogin ? (
          <form onSubmit={loginForm.onSubmit(console.log)}>
            <TextInput
              label="Email"
              placeholder="Enter your email"
              classNames={{
                input: 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2',
                label: 'mb-1 text-gray-600',
              }}
              {...loginForm.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              classNames={{
                input: 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2',
                label: 'mb-1 text-gray-600',
              }}
              {...loginForm.getInputProps('password')}
            />
            <Group justify="center" mt="md">
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
              >
                Login
              </Button>
            </Group>
          </form>
        ) : (
          <form onSubmit={signupForm.onSubmit(console.log)}>
            <TextInput
              label="Name"
              placeholder="Enter your name"
              classNames={{
                input: 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2',
                label: 'mb-1 text-gray-600',
              }}
              {...signupForm.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="Enter your email"
              classNames={{
                input: 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2',
                label: 'mb-1 text-gray-600',
              }}
              {...signupForm.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              classNames={{
                input: 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2',
                label: 'mb-1 text-gray-600',
              }}
              {...signupForm.getInputProps('password')}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm your password"
              classNames={{
                input: 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2',
                label: 'mb-1 text-gray-600',
              }}
              {...signupForm.getInputProps('confirmPassword')}
            />
            <Group justify="center" mt="md">
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
              >
                Sign Up
              </Button>
            </Group>
          </form>
        )}

        <div className="mt-4 text-center text-gray-600">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
