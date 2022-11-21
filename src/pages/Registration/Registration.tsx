import { FC } from "react"
import './Registration.scss'
import "react-datepicker/dist/react-datepicker.css";

import {Form, Button, InputGroup } from 'react-bootstrap/';
import DatePicker from "react-datepicker";

const Registration:FC = () => {
    return(
        <div className="form_wrapper">
            <h1 className="product_header">FitLife</h1>
            <p className="bold_text">Create an account</p>
            <p className="opacity_text">Начните управлять своей жизнью</p>
            <div className="registration_flex_wrapper">
                <div className="registration_flex_left">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Фамилия Имя Отчество *</Form.Label>
                        <Form.Control type="email" placeholder="Введите ФИО" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль *</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" />
                    </Form.Group>
                    <div className="registration_sex_pick">
                        <span>Укажите Ваш пол</span>
                        <Form.Check
                            inline
                            label="Мужской"
                            name="group1"
                            type='radio'
                            id='1'
                        />
                        <Form.Check
                            inline
                            label="Женский"
                            name="group1"
                            type='radio'
                            id='2'
                        />
                    </div>
                    <div className="registration_params">
                        <div className="param_wrapper">
                            <InputGroup >
                                <Form.Control placeholder="Ваш рост" id="basic-url" aria-describedby="basic-addon3" />
                                <InputGroup.Text id="basic-addon3">
                                См
                                </InputGroup.Text>
                            </InputGroup>
                        </div>
                        <div className="param_wrapper">
                            <InputGroup >
                                <Form.Control placeholder="Ваш вес" id="basic-url" aria-describedby="basic-addon3" />
                                <InputGroup.Text id="basic-addon3">
                                Кг
                                </InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                    <Form.Label className="select_label">Уровень активности</Form.Label>
                    <Form.Select>
                        <option value="1">Высокая</option>
                        <option value="2">Умеренная</option>
                        <option value="3">Низкая</option>
                    </Form.Select>
                </div>
                <div className="registration_flex_right">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control type="email" placeholder="Введите свой Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Повторите пароль *</Form.Label>
                        <Form.Control type="password" placeholder="Повторите пароль" />
                    </Form.Group>
                    <Form.Label>Дата рождения</Form.Label>
                    <DatePicker className="form-control" onChange={() => console.log(123)} />
                    <Form.Label className="select_label">Цель</Form.Label>
                    <Form.Select>
                        <option value="1">Похудение</option>
                        <option value="2">Поддержание веса</option>
                        <option value="3">Набор веса</option>
                    </Form.Select>
                </div>
            </div>
            <Button style={{marginTop:'20px'}} variant="primary" type="submit">
                Зарегистрироваться
            </Button>
        </div>
    )
}

export default Registration