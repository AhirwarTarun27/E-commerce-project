import './RegistrationStyle.css';
import '../../index.css';
import React, { useState } from 'react';
import {
  Grid,
  Box,
  FormControl,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { userService } from '../../services';

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
    Tnc: false,
    ShowPassword: false,
  });
  console.log('registrationData:', registrationData);

  const { register, handleSubmit, formState, errors } =
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
    console.log('setRegistrationData:', setRegistrationData);

    setIsLoginData({ ...loginData, [target.name]: target.value });
  };

  const onFieldSubmit = async (data: REGISTER_FORM_DATA) => {
    try {
      console.log('data:', data);
      const result = await userService.register(data);
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <div className='flexBox'>
      <Box className='leftRegBox' />
      <form onSubmit={handleSubmit(onFieldSubmit)} autoComplete='off'>
        <Box className='registrationBox'>
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
                {errors.UserName && (
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
                  label='Repeat Password'
                  autoComplete='off'
                  variant='standard'
                  inputRef={register({
                    required: false,
                    maxLength: 16,
                    minLength: 8,
                    pattern: /^\S*$/,
                  })}
                  type={registrationData.ShowPassword ? 'text' : 'password'}
                />
                {errors.ConfirmPassword && (
                  <div className='errorMsg'>
                    length must be between 8 and 16 characters and without
                    spaces.
                  </div>
                )}
              </FormControl>
              <FormControlLabel
                className='formControlLabel'
                control={
                  <Checkbox
                    onChange={(e) => handleFieldChange(e.target)}
                    name='TnC'
                    color='primary'
                    inputRef={register({ required: true })}
                  />
                }
                label={
                  <span className='tncText'>
                    I agree to the
                    <a>
                      <Typography variant='caption' color='primary'>
                        <a className='TnC'>Terms of User</a>
                      </Typography>
                    </a>
                  </span>
                }
              />
            </Grid>
            <div className='registrationBtn'>
              <input
                type='submit'
                className='registrationFormBtn'
                value='Sign Up'
              />
              <Link to='/login'>
                <button className='loginBtn'>
                  Sign in <FontAwesomeIcon icon={faRightLong} />
                </button>
              </Link>
            </div>
          </Grid>
        </Box>
      </form>
    </div>
  );
};
