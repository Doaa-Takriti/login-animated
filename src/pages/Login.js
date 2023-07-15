import React,{useEffect} from 'react';
import "./login.css";
import AOS from 'aos';

import 'aos/dist/aos.css';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useFormik} from "formik";
import { basicSchema } from "../schemas/index";

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const onSubmit = async (values, actions) => {
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
   
    
        actions.resetForm();
      
    
      
      
      
      }; 
      useEffect(() => {
        AOS.init({
          duration: 1000
        });
      },[])
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
          
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    
  return (
    <div className='login'>
              <form onSubmit={handleSubmit} autoComplete="off">

        <div class="square1"></div>
        <div class="square2"></div>

        <Grid container spacing={2}>
  <Grid item md={6}>
 <img src="https://img.freepik.com/vektoren-kostenlos/konzeptillustration-anmelden_114360-7885.jpg?w=740&t=st=1689429856~exp=1689430456~hmac=60bb237fd8cfdf1d88ca50d7813a436abda3850f03fa3d2c065631650e0783a9" alt="" />
  </Grid>
  <Grid item md={6} className='sideright'>
   <div className="sideinputs">
    <img src="https://img.freepik.com/vektoren-kostenlos/geschaeftsmann-charakter-avatar-isoliert_24877-60111.jpg?w=740&t=st=1689430120~exp=1689430720~hmac=3e551eb7619a03ef210842dd9a0aaccec4fae9a89aa7e67f909c564833e93d55" alt="" />
    <h1>LOG IN</h1>
    <Grid container spacing={2} >
  <Grid item xs={12}  
     data-aos-duration="2000"
     data-aos="fade-left"
     data-aos-easing="ease-out-back"
     data-aos-delay='1500'>
    <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
         enter you email
        </InputLabel>
       
        <Input
       
       value={values.email}
       name='email'
       onChange={handleChange}
       id="email"
       type="email"
       placeholder="Enter your email"
       onBlur={handleBlur}
       className={errors.email && touched.email ? "input-error" : ""} 
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      {errors.email && touched.email && (<span className="error">{errors.email}</span>)}

      </Grid>

      <Grid item xs={12}
       
        data-aos="fade-left"
     data-aos-duration="2000"
   
     data-aos-delay='2000'
     data-aos-easing="ease-out-back"
     
     >

      <FormControl variant="standard" style={{marginTop: '30px'}}>
        <InputLabel  htmlFor="input-with-icon-adornment">
         enter your password
        </InputLabel>
        <Input
       
          type={showPassword ? 'text' : 'password'}
          value={values.password}
          name='password'
          onChange={handleChange}
          id="password"
          onBlur={handleBlur}
          placeholder='Enter Your Password'
          className={errors.password && touched.password ? "input-error" : ""}

          startAdornment={
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      {errors.password && touched.password && (<span className="error">{errors.password}</span>)}

      </Grid>
      <Grid item xs={12}>
      <p style={{fontWeight: "bold",textAlign: 'end'}}>
        forget password ?
      </p>

      </Grid>
      <Grid item xs={12}
       data-aos="zoom-in-up"
        
       data-aos-duration="2000"
     
       data-aos-delay='3000'
       data-aos-easing="ease-out-back"  >
        
   <button class="btn btn-submit hvr-wobble-bottom"
  disabled={isSubmitting} type="submit">
   log in
   </button>

      </Grid>
      </Grid>
     

 

    </div> 
  </Grid>
 
</Grid>
</form>
    </div>
  )
}

export default Login