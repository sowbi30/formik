import { useFormik } from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import { validationSchema } from "../Schema/Validation";
import '../styles/Form.css'

function Reset() {
    const formik = useFormik({
        initialValues: {
            password: "",
            Confirmpassword: ""
        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            console.log("Form logged in successfully!", values);
            alert('Login successful!')
        },
    });

    return (
        <div className="container-fluid">
            <div className="row main-box mt-5 mx-2">
                <div className="col-lg-6 px-4 py-5">
                    <form action="" onSubmit={formik.handleSubmit}>

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="password" className="form-label">
                                    Passowrd
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="**********"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && <div className="form-text text-danger">{formik.errors.password}</div>}
                            </div>
                            <div className="col">
                                <label htmlFor="Confirmpassword" className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Confirmpassword"
                                    name="Confirmpassword"
                                    placeholder="**********"
                                    value={formik.values.Confirmpassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.Confirmpassword && <div className="form-text text-danger">{formik.errors.Confirmpassword}</div>}
                            </div>
                        </div>


                        <div className="d-flex justify-content-center pb-2 mb-3">
                            <button className="btn btn-primary px-5" type="submit">Reset</button>
                        </div>

                        <p className="forgot-password text-right">Login here with New Password
                            <a href="/login">SignIn</a>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reset;
