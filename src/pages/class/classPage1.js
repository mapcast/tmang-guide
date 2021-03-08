import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';
import C3Chart from 'react-c3js';
import '../../css/c3.css';
import image1 from '../../img/class-swordman1.gif';
 

const classPage1 = () => {

    const data = {
        x: 'x',
        columns: [
            ['x', '단일', '광역', '기동', '시너지', '범용'],
            ['data1', 8, 4, 5, 1, 4]
        ],
        colors: {
            'data1': function(d) {
                if(d.value>7){
                    return '#FF4646'
                }else if(d.value>3){
                    return '#FFCC29'
                }else{
                    return '#1A508B'
                }
            }
        },
        type:'bar'
    };

    const bar = {
        width:{
            ratio:0.4
        }
    }

    const size = {
        width:700,
        height:300
    };

    const legend = {
        show:false
    };

    const tooltip = {
        show:false
    };

    const axis =  {
        x:{
            type: 'category'
        },
        y: {
            max: 10,
            min: 0,
            padding: 0
        }
    }

    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-max'>
                        <div className='guide-class'>
                            <div className='guide-class-flex'>
                                <div className='guide-class-title'>
                                    <img src={image1}/>
                                    <h1>매하도</h1>
                                </div>
                                <div classname='guide-class-graph'>
                                    <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data} size={size} bar={bar}/>
                                </div>
                            </div>
                            <div className='guide-class-desc'>
                                <p>매하도는 양손검 트리의 정석이라고 할 수 있습니다. 다른 양검트리인 매바도와 비교하면, 광역을 조금 희생하고 단일딜을 강력하게 가져갔다고 볼 수 있죠. </p>
                                <h1 class='deepblue'>스킬 트리</h1>
                                <h1 class='deepblue'>필수 아츠</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default classPage1;