import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/api/auth';
import { useGetDetailUser } from '../../hooks/api/user';

type RegisterInputs = {
  name: string;
  email: string;
  password: string;
};

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const [token, setToken] = React.useState({
    accessToken: '',
    tokenType: '',
  });

  const navigate = useNavigate();
  const { mutate, isLoading: isLoadingRegister } = useRegister();
  const { data: userData, isLoading: isLoadingGetUser } = useGetDetailUser({
    accessToken: token.accessToken,
    tokenType: token.tokenType,
  });

  React.useEffect(() => {
    if (!isLoadingGetUser && userData) {
      console.log(userData, 'userData');
      navigate('/home');
    }
  }, [userData, isLoadingGetUser, navigate]);

  const onSubmit = (data: RegisterInputs): void => {
    mutate(
      {
        data,
      },
      {
        onSuccess: (resp) => {
          const { access_token, token_type } = resp;
          setToken({ accessToken: access_token, tokenType: token_type });
        },
        onError: (err) => {
          console.error(err);
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='block mb-1'>Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            id='inptRegisterName'
            placeholder='Type your fullname'
            type='text'
            className='block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100'
          />
          {errors.name && (
            <p className='mt-1 text-red-600'>{errors.name.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='block mb-1'>Email</label>
          <input
            {...register('email', { required: 'Email address is required' })}
            id='inptRegisterEmail'
            placeholder='Type your email'
            type='email'
            className='block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100'
          />
          {errors.email && (
            <p className='mt-1 text-red-600'>{errors.email.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='block mb-1'>Password</label>
          <input
            {...register('password', { required: 'Password is required' })}
            id='inptRegisterPassword'
            placeholder='Type your password'
            type='password'
            className='block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100'
          />
          {errors.password && (
            <p className='mt-1 text-red-600'>{errors.password.message}</p>
          )}
        </div>
        <div className='mt-6'>
          <button
            type='submit'
            className='inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow'
            disabled={isLoadingRegister}
          >
            Continue Sign Up
          </button>
          <Link
            to={'/login'}
            className='inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow'
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
