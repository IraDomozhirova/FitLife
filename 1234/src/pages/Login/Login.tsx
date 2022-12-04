import { FC } from "react"
import {Button } from 'react-bootstrap/';
import { Link, Navigate } from "react-router-dom";
import { Formik, Field, Form as FormF, ErrorMessage } from 'formik';
import { InitialValues, ValidationSchema } from "./data";
import { login } from "../../utils/auth";
import './Login.scss'

const Login = (props: { currentUser: any }) => {
    
    if(props.currentUser){
        return <Navigate to='/' replace/>
    }
    return (
        <Formik
            initialValues={InitialValues}
            validationSchema={ValidationSchema}
            onSubmit={(values) => login(values.email, values.password)}
        >
        {formik => (
            <FormF>
                <div className="form_wrapper">
                    <h1 className="product_header">FitLife</h1>
                    <p className="bold_text">Log in to your account</p>
                    <p className="opacity_text">С возвращением! Заполните данные для входа</p>
                    <div id='error-block-id'></div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field name="email" className="form-control" type="text" />
                        <ErrorMessage component="div" className="error" name="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field name="password" className="form-control" type="password" />
                        <ErrorMessage component="div" className="error" name="password"/>
                    </div>
                    <div style={{marginTop:'10px'}}>Нет учетной записи? <span><Link to='/registration'>зарегистрироваться</Link></span></div>
                    <Button variant="primary" type="submit">
                        Войти
                    </Button>
                </div>
            </FormF>
            )}
        </Formik>
    )
}

export default Login