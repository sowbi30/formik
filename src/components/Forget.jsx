import { useFormik } from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import { validationSchema } from "../Schema/Validation";
import '../styles/Form.css'

function Forget() {
    const formik = useFormik({
        initialValues: {
            email: "",
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
                                Recovery Link will sent to the Registered Mail Address!!!<br /> Do you want to recover the Account?
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


                        <div className="d-flex justify-content-center pb-2 mb-3">
                            <button className="btn btn-primary px-5" type="submit">Recover</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Forget;
