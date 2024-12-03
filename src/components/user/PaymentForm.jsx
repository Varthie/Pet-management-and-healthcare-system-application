import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import InputMask from 'react-input-mask';

const PaymentForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Payment Successful');
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <Typography color='white' variant="h5" align="left" style={{backgroundColor:'blue',paddingTop:15,paddingBottom:15,color:'white'}} gutterBottom>
              Payment Details
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Cardholder Name"
                  variant="outlined"
                  {...register('cardholderName', { required: 'Cardholder name is required' })}
                  error={Boolean(errors.cardholderName)}
                  helperText={errors.cardholderName?.message}
                />
              </Box>

              <Box mb={2}>
                <InputMask
                  mask="9999 9999 9999 9999"
                  {...register('cardNumber', { required: 'Card number is required' })}
                >
                  {(inputProps) => (
                    <TextField
                      {...inputProps}
                      fullWidth
                      label="Card Number"
                      variant="outlined"
                      error={Boolean(errors.cardNumber)}
                      helperText={errors.cardNumber?.message}
                    />
                  )}
                </InputMask>
              </Box>

              <Box mb={2}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <InputMask mask="99/99" {...register('expiryDate', { required: 'Expiry date is required' })}>
                      {(inputProps) => (
                        <TextField
                          {...inputProps}
                          fullWidth
                          label="Expiry Date (MM/YY)"
                          variant="outlined"
                          error={Boolean(errors.expiryDate)}
                          helperText={errors.expiryDate?.message}
                        />
                      )}
                    </InputMask>
                  </Grid>
                  <Grid item xs={6}>
                    <InputMask 
                    type="password"
                    mask="999" {...register('cvv', { required: 'CVV is required' })}>
                      {(inputProps) => (
                        <TextField
                          {...inputProps}
                          fullWidth
                          label="CVV"
                          variant="outlined"
                          error={Boolean(errors.cvv)}
                          helperText={errors.cvv?.message}
                        />
                      )}
                    </InputMask>
                  </Grid>
                </Grid>
              </Box>

              <Box mt={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ padding: '10px 0', fontSize: '16px' }}
                >
                  Pay Now
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PaymentForm;
