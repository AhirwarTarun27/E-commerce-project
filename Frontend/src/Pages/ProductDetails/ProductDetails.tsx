import './ProductDetails.css';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  Grid,
  Box,
  FormControl,
  TextField,
  Button,
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';

interface PRODUCT_FORM_DATA {
  ProductName: string;
  ProductPrice: number;
  ProductDescription: string;
  KeyFeatures: string[];
  ProductImage: string;
  DiscountedPrice: number;
  Discount: number;
  FileUpload: string;
}

export const ProductDetails = () => {
  const [keyFeatures, setKeyFeatures] = useState<String[]>([]);
  const [keyFeature, setKeyFeature] = useState<String>('');
  const [productDetails, setProductDetails] = useState({
    ProductName: '',
    ProductPrice: '',
    ProductDescription: '',
    KeyFeatures: [],
    ProductImage: '',
    DiscountedPrice: '',
  });

  const { register, handleSubmit, formState, errors } =
    useForm<PRODUCT_FORM_DATA>({
      mode: 'onChange',
    });

  const onFieldSubmit = async (data: any) => {
    try {
    } catch (error) {
      throw error;
    }
  };
  const handleFieldChange = (target: any) => {
    // setProductDetails({ ...productDetails, [target.name]: keyFeatures });
    // console.log('setProductDetails:', setProductDetails);
  };

  // for Product key features
  const handleKeyFeatureChange = (target: any) => {
    setKeyFeature(target.value);
  };

  const keyFeatureSubmit = () => {
    console.log('keyFeatures:', keyFeatures);
    setKeyFeatures([...keyFeatures, keyFeature]);
    updatedValues([...keyFeatures, keyFeature]);
  };

  const updatedValues = (latestData: String[]) => {
    console.log('latestData:', latestData);
  };

  return (
    <div className='flexBox'>
      <Box className='leftProductBox' />
      <form onSubmit={handleSubmit(onFieldSubmit)} autoComplete='off'>
        <Box className='productFormBox'>
          <h1>Product Details</h1>
          <Grid
            container
            spacing={1}
            alignItems='flex-end'
            className='positionRelative productForm'
          >
            <Grid item>
              <FormControl variant='outlined' className='formControl mb-1'>
                <TextField
                  id='product-name'
                  onChange={(e) => handleFieldChange(e.target)}
                  name='ProductName'
                  placeholder='Product Name...'
                  label='Product Name'
                  variant='standard'
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.ProductName && (
                  <div className='errorMsg'>Enter product name</div>
                )}
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-1'>
                <TextField
                  id='Description'
                  name='Discription'
                  onChange={(e) => handleFieldChange(e.target)}
                  placeholder='Product Description...'
                  label='Product Description'
                  autoComplete='on'
                  variant='standard'
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.ProductDescription && (
                  <div className='errorMsg'>Enter product discription.</div>
                )}
              </FormControl>
              <Grid item className='spaceBtw'>
                <FormControl variant='outlined' className='mb-1'>
                  <TextField
                    id='keyFeatures'
                    name='KeyFeatures'
                    onChange={(e) => handleKeyFeatureChange(e.target)}
                    placeholder='add product key features...'
                    label='Key Features'
                    autoComplete='on'
                    variant='standard'
                    inputRef={register({
                      required: true,
                    })}
                  />
                  {errors.KeyFeatures && (
                    <div className='errorMsg'>Enter product key features.</div>
                  )}
                </FormControl>
                <div className='keyFeatureBtn'>
                  <Button
                    onClick={() => keyFeatureSubmit()}
                    variant='contained'
                    size='small'
                  >
                    Add
                  </Button>
                </div>
              </Grid>

              <FormControl variant='outlined' className='formControl mb-1'>
                <TextField
                  id='price'
                  name='ProductPrice'
                  autoComplete='off'
                  type={'number'}
                  // onChange={(e) => handleFieldChange(e.target)}
                  // onChange={(event) =>
                  //   event.target.value < 0
                  //     ? (event.target.value = 0)
                  //     : event.target.value
                  // }
                  placeholder='Product Price...'
                  label='MRP'
                  variant='standard'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>₹</InputAdornment>
                    ),
                  }}
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.ProductPrice && (
                  <div className='errorMsg'>Enter product price.</div>
                )}
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-1'>
                <TextField
                  id='discountedPrice'
                  name='DiscountedPrice'
                  autoComplete='off'
                  type={'number'}
                  // onChange={(e) => handleFieldChange(e.target)}
                  // onChange={(event) =>
                  //   event.target.value < 0
                  //     ? (event.target.value = 0)
                  //     : event.target.value
                  // }
                  placeholder='Discounted Price...'
                  label='Discounted Price'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>₹</InputAdornment>
                    ),
                  }}
                  variant='standard'
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.DiscountedPrice && (
                  <div className='errorMsg'>Enter discounted price.</div>
                )}
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-1'>
                <TextField
                  id='discount'
                  name='Discount'
                  autoComplete='off'
                  type={'number'}
                  // onChange={(e) => handleFieldChange(e.target)}
                  // onChange={(event) =>
                  //   event.target.value < 0
                  //     ? (event.target.value = 0)
                  //     : event.target.value
                  // }
                  placeholder='Discount...'
                  label='Discount'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>%</InputAdornment>
                    ),
                  }}
                  variant='standard'
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.DiscountedPrice && (
                  <div className='errorMsg'>Enter discount.</div>
                )}
              </FormControl>
              <FormControl variant='standard' className='formControl mb-1'>
                <InputLabel id='demo-simple-select-standard-label'>
                  Age
                </InputLabel>
                <Select
                  labelId='demo-simple-select-standard-label'
                  id='demo-simple-select-standard'
                  // value={age}
                  // onChange={handleChange}
                  label='Age'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-1'>
                <TextField
                  id='fileUpload'
                  name='FileUpload'
                  type={'file'}
                  label='Upload Image'
                  variant='standard'
                  inputRef={register({
                    required: true,
                  })}
                />
                {errors.FileUpload && (
                  <div className='errorMsg'>Image is required</div>
                )}
              </FormControl>

              {/* <FormControlLabel
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
              /> */}
            </Grid>
            <div className='registrationBtn'>
              <input
                type='submit'
                className='registrationFormBtn'
                value='Submit'
              />
              <button className='registrationFormBtn'>Preview Images</button>
            </div>
          </Grid>
        </Box>
      </form>
    </div>

    // <div className='container'>
    //   <Box className='leftBoxForm'>
    //     <Paper variant='outlined' className='formPaper'>
    //       <form
    //         onSubmit={handleSubmit(onFieldSubmit)}
    //         className='formBox'
    //         autoComplete='off'
    //       >
    //         <h1>Product Details</h1>
    //         <Grid item xs={12}>
    //           <FormControl className='formControl'>
    //             <TextField
    //               name='ProductName'
    //               label='Product Name'
    //               className='inputField'
    //               variant='standard'
    //               onChange={handleFieldChange}
    //               inputRef={register({ required: true })}
    //               error={errors.ProductName ? true : false}
    //               helperText={
    //                 errors.ProductName ? 'Product Name is required' : ''
    //               }
    //             />
    //           </FormControl>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <FormControl className='flexBox'>
    //             <TextField
    //               name='ProductName'
    //               label='Product Name'
    //               variant='standard'
    //               className='inputField'
    //               onChange={handleFieldChange}
    //               inputRef={register({ required: true })}
    //               error={errors.ProductName ? true : false}
    //               helperText={
    //                 errors.ProductName ? 'Product Name is required' : ''
    //               }
    //             />
    //           </FormControl>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <FormControl className='flexBox'>
    //             <TextField
    //               name='ProductName'
    //               label='Product Name'
    //               variant='standard'
    //               className='inputField'
    //               onChange={handleFieldChange}
    //               inputRef={register({ required: true })}
    //               error={errors.ProductName ? true : false}
    //               helperText={
    //                 errors.ProductName ? 'Product Name is required' : ''
    //               }
    //             />
    //           </FormControl>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <FormControl className='flexBox'>
    //             <TextField
    //               name='ProductName'
    //               label='Product Name'
    //               variant='standard'
    //               className='inputField'
    //               onChange={handleFieldChange}
    //               inputRef={register({ required: true })}
    //               error={errors.ProductName ? true : false}
    //               helperText={
    //                 errors.ProductName ? 'Product Name is required' : ''
    //               }
    //             />
    //           </FormControl>
    //         </Grid>
    //       </form>
    //     </Paper>
    //   </Box>
    // </div>
  );
};
