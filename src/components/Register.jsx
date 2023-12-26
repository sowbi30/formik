import { useFormik } from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import { validationSchema } from "../Schema/Validation";
import '../styles/Form.css';

function Register() {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            Confirmpassword: "",
            gender: "",
            dob: "",
            country: "",
        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            console.log("Form submitted successfully!", values);
            alert('Form submitted successfully!')
        },
    });

    return (
        <div className="container-fluid">
            <div className="row main-box mt-5 mx-2">
                <div className="col-lg-6 px-4 py-5">
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="firstname" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="firstname"
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.firstname && <div className="form-text text-danger">{formik.errors.firstname}</div>}
                            </div>
                            <div className="col">
                                <label htmlFor="lastname" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="lastname"
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.lastname && <div className="form-text text-danger">{formik.errors.lastname}</div>}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="**sample@gmail.com**"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && <div className="form-text text-danger">{formik.errors.email}</div>}
                        </div>

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

                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="country" className="form-label">
                                    Country
                                </label>
                                <select
                                    className="form-select"
                                    id="country"
                                    name="country"
                                    placeholder="select"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="" style={{ fontSize: 'small' }}>Select Country</option>
                                    <option value="India">India</option>
                                    <option value="Canada">Canada</option>
                                    <option value="France">France</option>
                                    <option value="Spain">Spain</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                    <option value="SOUTH KOREA">SOUTH KOREA</option>
                                </select>
                                {formik.touched.country && <div className="form-text text-danger">{formik.errors.country}</div>}
                            </div>
                            <div className="col">
                                <label htmlFor="dob" className="form-label">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="dob"
                                    id="dob"
                                    value={formik.values.dob}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.dob && <div className="form-text text-danger">{formik.errors.dob}</div>}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>Gender</label>
                            <div className="d-flex justify-content-evenly align-items-center">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="male"
                                        checked={formik.values.gender === "male"}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="female"
                                        checked={formik.values.gender === "female"}
                                        onChange={formik.handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="female">
                                        Female
                                    </label>
                                </div>
                            </div>
                            {formik.touched.gender && <div className="form-text text-danger">{formik.errors.gender}</div>}
                        </div>


                        <div className="d-flex justify-content-center pb-2 mb-3">
                            <button className="btn btn-primary px-5" type="submit">REGISTER</button>
                        </div>

                        <p className="forgot-password text-right">Already Register With us!!!
                            <a href="/login">SignIn</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
