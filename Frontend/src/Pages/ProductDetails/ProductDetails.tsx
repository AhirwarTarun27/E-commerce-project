import './ProductDetails.css';

import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
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
  Card,
  CardActionArea,
  CardMedia,
} from '@mui/material';

interface PRODUCT_FORM_DATA {
  ProductName: string;
  Description: string;
  KeyFeatures: any[];
  ProductPrice: string;
  ProductImage: string;
  DiscountedPrice: string;
  Size: string;
  FileUpload: string;
}

export const ProductDetails = () => {
  // const [keyFeatures, setKeyFeatures] = useState<any[]>([]);
  // const [keyFeature, setKeyFeature] = useState<String>('');
  const [productFormData, setProductFormData] = useState<PRODUCT_FORM_DATA>({
    ProductName: '',
    Description: '',
    KeyFeatures: [],
    ProductPrice: '',
    ProductImage: '',
    DiscountedPrice: '',
    Size: '',
    FileUpload: '',
  });

  // setting up the form using use state
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [singleKeyFeature, setSingleKeyFeature] = useState('');
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);
  const [productPrice, setProductPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [size, setSize] = useState('');
  const [productImage, setProductImage] = useState<any[]>([]);
  const [previewImage, setPreviewImage] = useState<string[]>([]);

  const [active, setActive] = useState(false);
  const handleSizeChange = (event: any) => {
    setSize(event.target.value);
    console.log('size', size);
  };

  const handleFileUpload = (event: any) => {
    const files = Array.from(event.target.files);

    setPreviewImage([]);
    setProductImage([]);

    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setPreviewImage((prevState: any) => [...prevState, reader.result]);
          setProductImage((prevState: any) => [...prevState, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
    console.log('files', files);
  };

  // on submit form
  const onFieldSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData();

    formData.set('ProductName', productName);
    formData.set('Description', description);
    formData.set('KeyFeatures', JSON.stringify(keyFeatures));
    formData.set('ProductPrice', JSON.stringify(productPrice));
    formData.set('DiscountedPrice', JSON.stringify(discountedPrice));
    formData.set('Size', JSON.stringify(size));

    productImage.forEach((image: any) => {
      formData.append('ProductImage', image);
    });

    for (const [key, value] of formData) {
      console.log(`${key} = ${value}`);
    }
  };

  const keyFeatureSubmit = () => {
    setKeyFeatures([...keyFeatures, singleKeyFeature]);
    setSingleKeyFeature('');
  };

  const discountRate = (price: any, disPrice: any) => {
    const value = 100 - ((price - disPrice) / price) * 100;
    return value;
  };

  const previewChange = () => {
    setActive(true);
  };

  return (
    <div className='flexBox'>
      <Box className='leftProductBox'>
        {productImage.map((image: any, index: number) => {
          return (
            <Card
              style={active ? { display: 'block' } : { display: 'none' }}
              className='productImage'
              key={index}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image={image}
                  title='Contemplative Reptile'
                />
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
      <form onSubmit={onFieldSubmit} autoComplete='off'>
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
                  onChange={(e) => setProductName(String(e.target.value))}
                  name='ProductName'
                  value={productName || ''}
                  placeholder='Product Name...'
                  label='Product Name'
                  variant='standard'
                />
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-1'>
                <TextField
                  id='Description'
                  name='Description'
                  value={description || ''}
                  placeholder='Product Description...'
                  label='Product Description'
                  onChange={(e) => setDescription(e.target.value)}
                  autoComplete='on'
                  variant='standard'
                />
              </FormControl>
              <Grid item className='spaceBtw'>
                <FormControl variant='outlined' className='mb-1'>
                  <TextField
                    id='keyFeatures'
                    name='KeyFeatures'
                    value={singleKeyFeature || ''}
                    onChange={(e) => setSingleKeyFeature(e.target.value)}
                    placeholder='add product key features...'
                    label='Key Features'
                    autoComplete='on'
                    variant='standard'
                  />
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
                  value={productPrice || 0}
                  autoComplete='off'
                  type='number'
                  onChange={(e) => setProductPrice(Number(e.target.value))}
                  placeholder='Product Price...'
                  label='MRP'
                  variant='standard'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>₹</InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-1'>
                <TextField
                  id='discountedPrice'
                  name='DiscountedPrice'
                  value={discountedPrice}
                  autoComplete='off'
                  type={'number'}
                  onChange={(e) => {
                    setDiscountedPrice(Number(e.target.value));
                  }}
                  placeholder='Discounted Price...'
                  label='Discounted Price'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>₹</InputAdornment>
                    ),
                  }}
                  variant='standard'
                />
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-1'>
                <TextField
                  id='discount'
                  name='Discount'
                  autoComplete='off'
                  type={'number'}
                  value={discountRate(productPrice, discountedPrice)}
                  placeholder='Discount...'
                  label='Discount'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>%</InputAdornment>
                    ),
                  }}
                  variant='standard'
                />
              </FormControl>
              <FormControl variant='standard' className='formControl mb-1'>
                <InputLabel id='demo-simple-select-standard-label'>
                  Sizes
                </InputLabel>
                <Select
                  labelId='demo-simple-select-standard-label'
                  id='demo-simple-select-standard'
                  value={size}
                  label='Sizes'
                  name='Size'
                  onChange={handleSizeChange}
                >
                  <MenuItem value={'None'}>None</MenuItem>
                  <MenuItem value={'X-Small'}>X-Small</MenuItem>
                  <MenuItem value={'Small'}>Small</MenuItem>
                  <MenuItem value={'Medium'}>Medium</MenuItem>
                  <MenuItem value={'Large'}>Large</MenuItem>
                  <MenuItem value={'X-Large'}>X-Large</MenuItem>
                  <MenuItem value={'XX-Large'}>XX-Large</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant='outlined' className='formControl mb-1'>
                <TextField
                  id='fileUpload'
                  name='FileUpload'
                  type={'file'}
                  label='Upload Image'
                  variant='standard'
                  inputProps={{
                    multiple: true,
                  }}
                  onChange={handleFileUpload}
                />
              </FormControl>
            </Grid>
            <div className='registrationBtn'>
              <input
                type='submit'
                className='registrationFormBtn'
                value='Submit'
              />
              <button className='registrationFormBtn' onClick={previewChange}>
                Preview Images
              </button>
            </div>
          </Grid>
        </Box>
      </form>
    </div>
  );
};
