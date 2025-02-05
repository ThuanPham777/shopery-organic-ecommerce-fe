// components/AccountForm.tsx
'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type FormData = {
  email: string;
  password: string;
  confirmPassword?: string;
  acceptTerms?: boolean;
  rememberMe?: boolean; // Trường rememberMe cho login
};

type AccountFormProps = {
  type: 'login' | 'signup';
};

export default function AccountForm({ type }: AccountFormProps) {
  const [loading, setLoading] = useState(false);
  // false: password hidden, true: password visible
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const endpoint = type === 'login' ? '/api/auth/login' : '/api/auth/signup';

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setLoading(false);

    if (response.ok) {
      alert(type === 'login' ? 'Login successful' : 'Signup successful');
      // Nếu đăng nhập thành công, chuyển hướng đến trang chủ hoặc dashboard
      router.push(type === 'login' ? '/' : '/login');
    } else {
      alert(result.message || 'An error occurred');
    }
  };

  // Hàm render icon: mặc định là open eye (password ẩn) và khi click chuyển thành close eye (password hiển thị)
  const renderEyeIcon = (isVisible: boolean, toggle: () => void) => {
    return (
      <button
        type='button'
        onClick={toggle}
        className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500'
      >
        {isVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
      </button>
    );
  };

  return (
    <div className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-12'>
      <h2 className='text-2xl font-bold text-center mb-4'>
        {type === 'login' ? 'Sign In' : 'Create Account'}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-4'
      >
        <input
          type='email'
          placeholder='Email'
          {...register('email', { required: 'Email is required' })}
          className='w-full p-2 border rounded'
        />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

        {/* Password Field */}
        <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            {...register('password', { required: 'Password is required' })}
            className='w-full p-2 border rounded pr-10'
          />
          {renderEyeIcon(showPassword, () => setShowPassword(!showPassword))}
        </div>
        {errors.password && (
          <p className='text-red-500'>{errors.password.message}</p>
        )}

        {type === 'login' && (
          <div className='flex items-center justify-between'>
            <label className='flex items-center space-x-2'>
              <input
                type='checkbox'
                {...register('rememberMe')}
              />
              <span>Remember me</span>
            </label>
            <a
              href='/forgot-password'
              className='text-blue-500 text-sm'
            >
              Forgot Password?
            </a>
          </div>
        )}

        {type === 'signup' && (
          <>
            {/* Confirm Password Field */}
            <div className='relative'>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: (value) =>
                    value === watch('password') || 'Passwords do not match',
                })}
                className='w-full p-2 border rounded pr-10'
              />
              {renderEyeIcon(showConfirmPassword, () =>
                setShowConfirmPassword(!showConfirmPassword)
              )}
            </div>
            {errors.confirmPassword && (
              <p className='text-red-500'>{errors.confirmPassword.message}</p>
            )}

            <label className='flex items-center space-x-2'>
              <input
                type='checkbox'
                {...register('acceptTerms', { required: true })}
              />
              <span>Accept all terms & Conditions</span>
            </label>
            {errors.acceptTerms && (
              <p className='text-red-500'>You must accept terms</p>
            )}
          </>
        )}

        <button
          type='submit'
          disabled={loading}
          className='w-full bg-customGreen text-white py-2 rounded-full hover:bg-hoverGreen transition'
        >
          {loading
            ? 'Processing...'
            : type === 'login'
            ? 'Login'
            : 'Create Account'}
        </button>
      </form>

      <p className='text-center mt-4'>
        {type === 'login'
          ? "Don't have an account?"
          : 'Already have an account?'}{' '}
        <a
          href={type === 'login' ? '/signup' : '/login'}
          className='font-bold'
        >
          {type === 'login' ? 'Register' : 'Login'}
        </a>
      </p>
    </div>
  );
}
