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

  const { register, handleSubmit, formState, control } =
    useForm<REGISTER_FORM_DATA>({
      mode: 'onChange',
    });

  const onFieldSubmit = () => {
    console.log('Form Submitted');
  };

  const handleFieldChange = (target: any) => {};

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
              <FormControl variant='outlined' className='formControl'>
                <TextField
                  id='full-name'
                  onChange={(e) => handleFieldChange(e.target)}
                  placeholder='Name...'
                  label='Full Name'
                  variant='standard'
                />
                {/* {errors.FullName && (
                  <div className='regMsg'>
                    Enter valid First name without spaces.
                  </div>
                )} */}
              </FormControl>
              <FormControl></FormControl>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
};
{
  /* <Grid container spacing={2} alignItems='flex-end'>
          <Grid item className='w100'>
          <FormControl className='bFullName' variant='outlined'>
            <InputLabel htmlFor="business-email" className='inputBoxes'>
              FullName
           </InputLabel>
          </FormControl>
          </Grid>
        </Grid> */
}
// export default Registration;
