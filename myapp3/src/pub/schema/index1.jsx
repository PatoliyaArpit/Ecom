import * as Yup from "yup";

export const login = Yup.object({
    
    Email: Yup.string().email().required("Please Enter Your Email..."),
   
    Password: Yup.string().min(4).required("Enter Any Ask..."),
});
