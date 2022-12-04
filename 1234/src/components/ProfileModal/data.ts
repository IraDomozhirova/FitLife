import PersonalType from './types';
import * as Yup from 'yup';

export const InitialValues:PersonalType = {
    name: '',
    sex: 'male',
    height: 0,
    weight: 0,
    activity: '',
    birthDate: new Date(),
    point: ''
}

export const ValidationSchema = Yup.object({
    name: Yup.string().required('Обязательное поле'),
    activity: Yup.string().required('Обязательное поле'),
    birthDate: Yup.date().required('Обязательное поле'),
    point: Yup.string().required('Обязательное поле'),
})