import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';


const classPage2 = () => {
    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-max'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default classPage2;