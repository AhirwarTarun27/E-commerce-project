import './RegistrationStyle.css';
import '../index.css';
import React, { useState } from 'react';
import {
  Grid,
  Box,
  FormControl,
  TextField,
  InputLabel,
  Input,
  FormHelperText,
  OutlinedInput,
  InputAdornment,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface REGISTER_FORM_DATA {
  FullName: string;
  Email: string;
  UserName: string;
  Password: string;
  ConfirmPassword: string;
  Tnc: boolean;
  IsActive: number;
  required: boolean | undefined;
}

export const Registrations = () => {
  const [registrationData, setRegistrationData] = useState({
    FullName: '',
    Email: '',
    UserName: '',
    Password: '',
    ConfirmPassword: '',
    Tnc: false,
    ShowPassword: false,
    IsActive: 0,
  });

  const { register, handleSubmit, formState, errors, control } =
    useForm<REGISTER_FORM_DATA>({
      mode: 'onChange',
    });

  const [loginData, setIsLoginData] = React.useState({
    Email: '',
    Password: '',
  });

  const handleFieldChange = (target: any) => {
    if (target.name == 'TnC') {
      setRegistrationData({
        ...registrationData,
        [target.name]: target.checked,
      });
    }
    setRegistrationData({ ...registrationData, [target.name]: target.value });

    setIsLoginData({ ...loginData, [target.name]: target.value });
    // console.log('registrationData:', registrationData);
    // console.log('loginData:', loginData);
  };

  const onFieldSubmit = (data: REGISTER_FORM_DATA) => {
    try {
      console.log('registrationnnnnn..........', data);
    } catch (error) {
      console.log('error:', error);
    }
  };

  const [errorMsg, setErrorMsg] = useState('');
  const [submitMsg, serSubmitMsg] = useState(false);

  return (
    <div className='flexBox'>
      <Box className='leftBox' />
      <form onSubmit={handleSubmit(onFieldSubmit)} autoComplete='off'>
        <Box className='registration-form'>
          <h1>Sign Up</h1>
          <Grid
            container
            spacing={1}
            alignItems='flex-end'
            className='positionRelative'
          >
            <Grid item>
              <FormControl variant='outlined' className='formControl mb-25'>
                <TextField
                  id='full-name'
                  onChange={(e) => handleFieldChange(e.target)}
                  name='FullName'
                  placeholder='Name...'
                  label='Full Name'
                  variant='standard'
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.FullName && (
                  <div className='errorMsg'>Enter Full Name</div>
                )}
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-25'>
                <TextField
                  id='email'
                  name='Email'
                  onChange={(e) => handleFieldChange(e.target)}
                  placeholder='Email address...'
                  label='Email'
                  autoComplete='on'
                  variant='standard'
                  inputRef={register({
                    required: true,
                    pattern: /[a-zA-z_.+0-9-]+@[a-zA-Z0-9-]+([.][a-zA-Z0-9]+)+/,
                  })}
                />
                {errors.Email && (
                  <div className='errorMsg'>Enter valid Email address.</div>
                )}
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-25'>
                <TextField
                  id='user-name'
                  name='UserName'
                  autoComplete='off'
                  onChange={(e) => handleFieldChange(e.target)}
                  placeholder='UserName...'
                  label='Username'
                  variant='standard'
                  inputRef={register({
                    required: true,
                    pattern: /^\S*$/,
                  })}
                />
                {errors.FullName && (
                  <div className='errorMsg'>
                    Enter valid Username without spaces.
                  </div>
                )}
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-25'>
                <TextField
                  id='password'
                  name='Password'
                  onChange={(e) => handleFieldChange(e.target)}
                  label='Password'
                  autoComplete='off'
                  variant='standard'
                  inputRef={register({
                    required: true,
                    maxLength: 16,
                    minLength: 8,
                    pattern: /^\S*$/,
                  })}
                  type={registrationData.ShowPassword ? 'text' : 'password'}
                />
                {((formState.touched.Password &&
                  loginData.Password.length === 0) ||
                  errors.Password) && (
                  <div className='errorMsg'>
                    length must be between 8 and 16 characters and without
                    spaces.
                  </div>
                )}
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-25'>
                <TextField
                  id='repeatPassword'
                  name='ConfirmPassword'
                  onChange={(e) => handleFieldChange(e.target)}
                  label='Repeat Password'
                  autoComplete='off'
                  variant='standard'
                  inputRef={register({
                    required: true,
                    maxLength: 16,
                    minLength: 8,
                    pattern: /^\S*$/,
                  })}
                  type={registrationData.ShowPassword ? 'text' : 'password'}
                />
                {((formState.touched.Password &&
                  loginData.Password.length === 0) ||
                  errors.Password) && (
                  <div className='errorMsg'>
                    length must be between 8 and 16 characters and without
                    spaces.
                  </div>
                )}
              </FormControl>
              <FormControlLabel
                className='d-block text-left m-0'
                control={
                  <Checkbox
                    onChange={(e) => handleFieldChange(e.target)}
                    name='TnC'
                    color='primary'
                    className='p-5 m-0'
                    inputRef={register({ required: true })}
                  />
                }
                label={
                  <span className='tncText p-5'>
                    I agree to the
                    <a href='/eula'>
                      <Typography variant='caption' color='primary'>
                        <a className='TnC'>Terms of User</a>
                      </Typography>
                    </a>
                  </span>
                }
              />
            </Grid>
            <div className='registrationLoginBtn'>
              <input type='submit' className='formLoginBtn' value='Sign Up' />
            </div>
          </Grid>
        </Box>
      </form>
    </div>
  );
};
