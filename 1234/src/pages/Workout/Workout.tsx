import { FC } from "react"
import "./Workout.scss"
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

const Workout = (props: { currentUser: any }) => {
    
    if(!props.currentUser){
        return <Navigate to='/signIn' replace/>
    }

    return (
        <div className="form_wrapper">
            <h1 className="product_header">FitLife</h1>
            <div className="workouts_block">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Упражнение</th>
                    <th>Повторения</th>
                    <th>Отдых</th>
                    <th>Подходы</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Становая тяга</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                    <tr>
                    <td>Румынская тяга</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                    <tr>
                    <td>Разгибание голени</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                    <tr>
                    <td>Сгибание голени</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Упражнение</th>
                    <th>Повторения</th>
                    <th>Отдых</th>
                    <th>Подходы</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Становая тяга</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                    <tr>
                    <td>Румынская тяга</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                    <tr>
                    <td>Разгибание голени</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                    <tr>
                    <td>Сгибание голени</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Упражнение</th>
                    <th>Повторения</th>
                    <th>Отдых</th>
                    <th>Подходы</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Становая тяга</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                    <tr>
                    <td>Румынская тяга</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                    <tr>
                    <td>Разгибание голени</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                    <tr>
                    <td>Сгибание голени</td>
                        <td>8-12</td>
                        <td>30-60 сек</td>
                        <td>3-5</td>
                    </tr>
                </tbody>
            </Table>
            </div>
            <ListGroup horizontal>
                <ListGroup.Item>
                    Понедельник
                    <Badge>Тренировка 1</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                    Вторник
                    <Badge bg="info">Отдых</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                    Среда
                    <Badge>Тренировка 2</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                    Четверг
                    <Badge bg="info">Отдых</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                    Пятница
                    <Badge>Тренировка 3</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                    Суббота
                    <Badge bg="info">Отдых</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                    Воскресенье
                    <Badge bg="info">Отдых</Badge>
                </ListGroup.Item>
            </ListGroup>
            <Button><Link to='/'>На главную</Link></Button>
        </div>
    )
}
export default Workout