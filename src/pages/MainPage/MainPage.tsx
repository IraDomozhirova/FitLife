import './MainPage.scss'
import Button from 'react-bootstrap/Button';
import { FC } from "react"

const MainPage:FC = () => {
    return(
        <>
            <div className="form_wrapper">
            <h1 className="product_header">FitLife</h1>
            <div className="big_circle">
                <p className='calories'>1900</p>
                <p>ккал/день</p>
            </div>
            <div className="bzu">
                <div className="circle">
                    <p className='gramms'>100г</p>
                    <p>Белки</p>
                </div>
                <div className="circle">
                    <p className='gramms'>52г</p>
                    <p>Жиры</p>
                </div>
                <div className="circle">
                    <p className='gramms'>82г</p>
                    <p>Угл-ды</p>
                </div>
                <div className="circle">
                    <p className='gramms'>21.5</p>
                    <p>ИМТ</p>
                </div>
            </div>
            <div className="buttons">
                <Button>Рацион</Button>
                <Button>Тренирвоки</Button>
            </div>
        </div>
        <Button className='profile'>Профиль</Button>
        </>
    )
}

export default MainPage