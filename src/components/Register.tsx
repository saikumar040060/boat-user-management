import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(2),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6).required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { register: registerUser, error, clearError } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      clearError();
      await registerUser(data.name, data.email, data.password);
      navigate('/login');
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name:</label>
          <input {...register('name')} />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input {...register('email')} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" {...register('password')} />
          <p className="error">{errors.password?.message}</p>
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" {...register('confirmPassword')} />
          <p className="error">{errors.confirmPassword?.message}</p>
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
