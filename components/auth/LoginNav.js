import React from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';

import { Formik } from 'formik';
import AlertP from '../Alert';

import {
  Box,
  Button,
  FormHelperText,
  TextField,
  makeStyles,
  Dialog
} from '@material-ui/core';
import useAuth from '../../hooks/useAuth';
import useIsMountedRef from '../../hooks/useIsMountedRef';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Login = ({setOpen, open, className, ...rest }) => {
  const classes = useStyles();
  const { login, error, success } = useAuth();
  const isMountedRef = useIsMountedRef();
  
  const t = (translate)=>{
    let res = translate.split('.');
    return res[1];
  };

  React.useEffect(()=>{
    if(success){
      setOpen(false);
    }
  },[success])
  
  return (
    <Dialog
      style={{zIndex: 5}}
      onClose={()=>setOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email(t("Yup.Email")).max(255).required(t("Yup.EmailReq")),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, {
          setErrors,
          setStatus,
          setSubmitting
        }) => {
          try {
            await login(values);
            
            if (isMountedRef.current) {
              if(!error){
                setStatus({ success: true });
                setSubmitting(false);
              }
            }
            
          } catch (err) {
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.error });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form
            style={{padding: 20}}
            noValidate
            onSubmit={handleSubmit}
            className={clsx(classes.root, className)}
            {...rest}
          >
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              autoFocus
              helperText={touched.email && errors.email}
              label={t("Forms.Email")}
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              label={t("Forms.Password")}
              margin="normal"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            />

            {error && <AlertP severity="error" msg={error.error}/>}

              
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>
                  {errors.submit}
                </FormHelperText>
              </Box>
            )}
            <Box mt={2}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Ingresar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};

export default Login;