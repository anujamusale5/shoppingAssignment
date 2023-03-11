import './Signup.css';
import { Formik , Form , Field} from "formik";
import *  as Yup from "yup";
import React from 'react';
import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const signupschema=Yup.object().shape({
 firstname:Yup.string("Invalid").matches("^[a-zA-Z'-]+$","Enter valid firstname")
.required("Firstname should be required")
.min(3,"firstname should not less than 3 chars")
.max(30,"firstname is too long"),
lastname:Yup.string("Invalid type")
.required("lastname should be required")
.min(3,"lastname should not less than 3 chars")
.max(30,"lastname is too long"),
email:Yup.string()
.required("Email is reqired")
.email("Invalid entered email"),
password:Yup.string()
.required("Password is required..")
.min(6,"Password contains minimum 6 character")
.max(12,"password is too long.."),
cnfpassword:Yup.string().
oneOf([Yup.ref('password'), null], 'Password & confirm password should be same')
.required("confirm Password is required..")
.min(6,"Password contains minimum 6 character")
.max(12,"password is too long..")
})

function Signup()
{
    let navigate=useNavigate();
    let location=useLocation();
    const [initialFormValues]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    cnfpassword:""
   });
   const handleFormsubmit= async(values) =>{
    console.log(values);
    if(signupschema !== '')
    {
      console.log("hhhh");
      navigate("../login",true);
    }
    
   }
 

    return(
       
     
        <div class="signup-class">
            <h3>Sign Up</h3>
            <Formik  validationSchema={signupschema} initialValues={initialFormValues} onSubmit={handleFormsubmit}>
            {({errors,touched})=>( 
           <Form class="form-field">
                <div>
                    <Field type="text" placeholder='firstname' name="firstname"/>
                    {(errors.firstname && touched.firstname ?(<div>{errors.firstname}</div>):null)}
                </div>
                <div>
                    <Field type="text" placeholder='lasttname' name="lastname"/>
                    {(errors.lastname && touched.lastname ?(<div>{errors.lastname}</div>):null)}
                </div>
                <div>
                    <Field type="email" placeholder='mailid' name="email"/>
                    {(errors.email && touched.email ?(<div>{errors.email}</div>):null)}
                </div>
                <div>
                    <Field type="password" placeholder='password' name="password"/>
                    {(errors.password && touched.password ?(<div>{errors.password}</div>):null)}
                </div>
                <div>
                    <Field type="password" placeholder='confirm password' name="cnfpassword"/>
                    { (errors.cnfpassword&& touched.cnfpassword ?(<div>{errors.cnfpassword}</div>):null)}
                </div>
                <div>Already have an account?Login <a href="/login">here</a></div>
                <div> <button type="submit" class="signbtn">Sign Up</button></div>
                
                </Form>
               
               )}
           </Formik>
            </div>
    );
}
export default Signup;