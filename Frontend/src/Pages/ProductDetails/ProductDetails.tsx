import './ProductDetails.css';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  Grid,
  Box,
  FormControl,
  TextField,
  Paper,
  InputLabel,
} from '@mui/material';

export const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({
    ProductName: '',
    ProductPrice: '',
    ProductDescription: '',
    ProductImage: '',
  });
  const { register, handleSubmit, formState, errors } = useForm({
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const onFieldSubmit = async (data: any) => {
    try {
      console.log('data:', data);
    } catch (error) {
      throw error;
    }
  };
  const handleFieldChange = (target: any) => {
    setProductDetails({ ...productDetails, [target.name]: target.value });
    console.log('setProductDetails:', setProductDetails);
  };
  const handleFieldSubmit = (data: any) => {
    console.log('data:', data);
    navigate('/');
  };
  return (
    <div className='container'>
      <Box className='leftBoxForm'>
        <form
          onSubmit={handleSubmit(onFieldSubmit)}
          className='flexBox'
          autoComplete='off'
        >
          <Paper variant='outlined'>
            <h1>Product Details</h1>
            <Grid
              container
              spacing={2}
              alignItems='flex-end'
              className='positionRelative'
            >
              <Grid item xs={12}>
                <FormControl className='flexBox'>
                  <TextField
                    name='ProductName'
                    label='Product Name'
                    variant='standard'
                    onChange={handleFieldChange}
                    inputRef={register({ required: true })}
                    error={errors.ProductName ? true : false}
                    helperText={
                      errors.ProductName ? 'Product Name is required' : ''
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className='flexBox'>
                  <TextField
                    name='ProductName'
                    label='Product Name'
                    variant='standard'
                    onChange={handleFieldChange}
                    inputRef={register({ required: true })}
                    error={errors.ProductName ? true : false}
                    helperText={
                      errors.ProductName ? 'Product Name is required' : ''
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className='flexBox'>
                  <TextField
                    name='ProductName'
                    label='Product Name'
                    variant='standard'
                    onChange={handleFieldChange}
                    inputRef={register({ required: true })}
                    error={errors.ProductName ? true : false}
                    helperText={
                      errors.ProductName ? 'Product Name is required' : ''
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className='flexBox'>
                  <TextField
                    name='ProductName'
                    label='Product Name'
                    variant='standard'
                    onChange={handleFieldChange}
                    inputRef={register({ required: true })}
                    error={errors.ProductName ? true : false}
                    helperText={
                      errors.ProductName ? 'Product Name is required' : ''
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Box>
    </div>
  );
};
