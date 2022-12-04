import './Registration.scss'
import "react-datepicker/dist/react-datepicker.css";
import { Navigate } from "react-router-dom";
import { Button } from 'react-bootstrap/';
import { Formik, Field, Form as FormF, ErrorMessage } from 'formik';
import { InitialValues, ValidationSchema } from "./data";
import { register } from "../../utils/auth";

const Registration = (props: { currentUser: any }) => {
    
    if(props.currentUser){
        return <Navigate to='/' replace/>
    }

    return(
        <Formik
            initialValues={InitialValues}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
                register(values.email, values.password)
            }}
        >
        {formik => (
            <FormF>
            <div className="form_wrapper">
                <h1 className="product_header">FitLife</h1>
                <p className="bold_text">Create an account</p>
                <p className="opacity_text">Начните управлять своей жизнью</p>
                <div id='error-block-id'></div>
                <div className="registration_flex_wrapper">
                    <div className="registration_flex_left">
                        <div className="registration_flex_right">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" className="form-control" type="email" />
                                <ErrorMessage component="div" className="error" name="email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Пароль</label>
                                <Field name="password" className="form-control" type="password" />
                                <ErrorMessage component="div" className="error" name="password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="repeat">Повторите пароль</label>
                                <Field name="repeat" className="form-control" type="password" />
                                <ErrorMessage component="div" className="error" name="repeat"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Button style={{marginTop:'20px'}} variant="primary" onClick={() => formik.handleSubmit()}>
                    Зарегистрироваться
                </Button>
            </div>
            </FormF>
            )}
        </Formik>
    )
}

export default Registration