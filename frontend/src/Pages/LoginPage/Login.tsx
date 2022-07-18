import './Login.css';
import '../../index.css';
import {
  Grid,
  Box,
  FormControl,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface LOGIN_FORM_DATA {
  Email: string;
  Password: string;
}

export const Login = () => {
  const [loginData, setIsLoginData] = useState({
    Email: '',
    Password: '',
  });
  const { register, handleSubmit, formState, errors } =
    useForm<LOGIN_FORM_DATA>({
      mode: 'onChange',
    });

  const handleFieldChange = (target: any) => {
    console.log('target:', target);
  };

  const onFieldSubmit = (data: LOGIN_FORM_DATA) => {};

  return (
    <div className='flexBox'>
      <Box className='leftBox' />
      <form onSubmit={handleSubmit(onFieldSubmit)} autoComplete='off'>
        <Box className='loginBox'>
          <h1>Sign In</h1>
          <Grid
            container
            spacing={1}
            alignItems='flex-end'
            className='positionRelative'
          >
            <Grid item>
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
                  type={loginData.Password ? 'text' : 'password'}
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
            </Grid>
            <div className='loginButtonSection'>
              <div className='loginBtn'>
                <input
                  type='submit'
                  className='loginFormBtn'
                  value='CONTINUE'
                />
              </div>
              <div className='loginTexts'>
                <p>or Connect with Social Media</p>
              </div>
              <button className='twitterBtn'>Sign In With Twitter</button>
              <button className='fbBtn'>Sign In With Facebook</button>
            </div>
          </Grid>
        </Box>
      </form>
    </div>
  );
};
