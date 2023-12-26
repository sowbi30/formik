import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    firstname: Yup.string()
        .required("* Firstname is required")
        .min(3, "Firstname should be at least 3 characters")
        .max(15, "Firstname should not exceed 15 characters"),
    lastname: Yup.string()
        .required("* Lastname is required")
        .min(3, "Lastname should be at least 3 characters")
        .max(15, "Lastname should not exceed 15 characters"),
    email: Yup.string()
        .email("* Invalid email address")
        .required("* Email is required"),
    password: Yup.string()
        .required("* Password is required")
        .min(8, "Password should be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
            "Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
    Confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("* Confirm Password is required"),
    gender: Yup.string().required("* Gender is required"),
    dob: Yup.date()
        .required("* Date of Birth is required")
        .max(new Date(), "Date of Birth cannot be in the future")
        .test(
            "is-over-18",
            "Age should be greater than or equal to 18",
            function (value) {
                const userDo = new Date(value);
                const currentDate = new Date();
                return currentDate.getFullYear() - userDo.getFullYear() >= 18;
            }
        ),
    country: Yup.string().required("* Country is required"),
});
