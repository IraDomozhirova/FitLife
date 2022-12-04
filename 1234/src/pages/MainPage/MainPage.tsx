import './MainPage.scss'
import Button from 'react-bootstrap/Button';
import { FC } from "react"
import { Link, Navigate } from 'react-router-dom';

const MainPage = (props: { currentUser: any }) => {
    
    if(!props.currentUser){
        return <Navigate to='/signIn' replace/>
    }

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
                    <Button><Link to='ration'>Рацион</Link></Button>
                    <Button><Link to='workout'>Тренирвоки</Link></Button>
                </div>
            </div>
            <Button className='profile'><Link to="/profile">Профиль</Link></Button>
        </>
    )
}

export default MainPage