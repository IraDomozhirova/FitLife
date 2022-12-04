import { Button, Modal } from "react-bootstrap"
import { Formik, Field, Form as FormF, ErrorMessage } from 'formik';
import DatePickerField from "../../components/FormikDatePicker";
import { InitialValues, ValidationSchema } from "./data";
import { addParams } from "../../utils/auth";
import './style.scss'

const ProfileModal = (props: { show: boolean; handleClose: (() => void); currentUser: any }) => {

    return(
    <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
            addParams(props.currentUser, values)
            props.handleClose()
        }}
    >
    {formik => (
        <FormF>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Пероснальные данные</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div id='error-block-id'></div>
                <div className="registration_flex_wrapper">
                    <div className="registration_flex_left">
                        <div className="form-group">
                            <label htmlFor="name">ФИО</label>
                            <Field name="name" className="form-control" type="text" />
                            <ErrorMessage component="div" className="error" name="name"/>
                        </div>
                        <div className="form-group sex_picker">
                            <label>Укажите Ваш пол</label>
                            <div className="sex_radio_wrapper">
                                <div className="form-check">
                                        <Field className="form-check-input" type="radio" name="sex" id="gridRadios1" value="male" />
                                        <label className="form-check-label" htmlFor="gridRadios1">Мужчина</label>
                                </div>
                                <div className="form-check" style={{marginLeft:'10px'}}> 
                                        <Field className="form-check-input" type="radio" name="sex" id="gridRadios2" value="female" />
                                        <label className="form-check-label" htmlFor="gridRadios2">Женщина</label>
                                </div>
                            </div>
                        </div>
                        <div className="registration_params">
                            <div className="param_wrapper">
                                <div className="form-group">
                                    <label>Ваш рост</label>
                                    <div className="custom_input">
                                        <Field name="height" className="form-control" type="text" id="height"/>
                                        <label className="custom-file-label" htmlFor="height">См</label>
                                    </div>
                                </div>
                            </div>
                            <div className="param_wrapper">
                                <div className="form-group">
                                    <label>Ваш вес</label>
                                    <div className="custom_input">
                                        <Field name="weight" className="form-control" type="text" id="weight"/>
                                        <label className="custom-file-label" htmlFor="weight">Кг</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label>Уровень Вашей активности</label>
                        <Field name="activity" as="select" multiple={false} className="form-control">
                            <option value="high">Высокая</option>
                            <option value="medium">Умеренная</option>
                            <option value="low">Низкая</option>
                        </Field>
                        <ErrorMessage component="div" className="error" name="activity"/>
                    </div>
                    <div className="registration_flex_right">
                        <div className="form-group">
                            <label htmlFor="repeat">Дата рождения</label>
                            <DatePickerField className="birthDate" name="birthDate"/>
                            <ErrorMessage component="div" className="error" name="birthDate"/>
                        </div>
                        <label>Уровень Вашей активности</label>
                        <Field name="point" as="select" multiple={false} className="form-control">
                            <option value="loss">Похудение</option>
                            <option value="balance">Поддержание веса</option>
                            <option value="gain">Набор веса</option>
                        </Field>
                        <ErrorMessage component="div" className="error" name="point"/>
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={()=> formik.handleSubmit()}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </FormF>
    )}
    </Formik>
    )
}

export default ProfileModal