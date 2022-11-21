import { FC } from "react"
import {Form, Button } from 'react-bootstrap/';
import './Login.scss'

const Login:FC = () => {
    return (
        <div className="form_wrapper">
            <h1 className="product_header">FitLife</h1>
            <p className="bold_text">Log in to your account</p>
            <p className="opacity_text">С возвращением! Заполните данные для входа</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Введите свой Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите свой пароль" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Войти
            </Button>
            <p style={{marginTop:'10px', textAlign:'center'}} className="opacity_text"> Нет учетной записи? зарегистрироваться</p>
        </div>
    )
}

export default Login