import { useFormik } from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import { validationSchema } from "../Schema/Validation";
import '../styles/Form.css'

function Login() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
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
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="sample@gmail.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && <div className="form-text text-danger">{formik.errors.email}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
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

                        <div className="d-flex justify-content-center pb-2 mb-3">
                            <button className="btn btn-primary px-5" type="submit">LOGIN</button>
                        </div>

                        <p className="forgot-password text-right"> Not Register With Us!!!
                            <a href="/">SignUp</a>
                        </p>

                        <p className="forgot-password text-right"> Forget Password? Click Here!!!
                            <a href="/forget">Recover</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
