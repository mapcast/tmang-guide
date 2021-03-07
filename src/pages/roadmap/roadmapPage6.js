import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';
import image1 from '../../img/roadmap7-2.jpg';
import image2 from '../../img/roadmap7-1.jpg';
import image3 from '../../img/roadmap7-3.jpg';
import image4 from '../../img/roadmap7-4.jpg';
import image5 from '../../img/roadmap7-5.jpg';
import image6 from '../../img/roadmap7-6.jpg';


const roadmapPage6 = () => {
    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-max'>
                        <h1 className='orange'>특성과 아츠에 대하여</h1>
                        <img src={image1}/>
                        <img src={image2}/>
                        <p></p>
                        <p>이 게임의 스킬은 특성 포인트를 투자함으로서 100레벨(이하 100특)까지 강화가, 또한 신비한 서(축석5+낱장2)와 특포를 소모함으로서 상급 강화(이하 상특)가 30레벨까지 가능합니다.</p>
                        <img src={image5}/>
                        <p></p>
                        <p>신비한 서는 인벤토리에 축복석을 보유한 상태에서 신비한 서 낱장을 우클릭해서 만들 수 있고,</p>
                        <img src={image6} width="1000px"/>
                        <p></p>
                        <p>아츠는 신비한 서를 직업 마스터한테 교환하는 것으로 얻을 수 있습니다. 상특 또한 이 아츠의 일종이죠.</p>
                        <img src={image3}/>
                        <img src={image4}/>
                        <p></p>
                        <p>100특을 제외한 특성과 상급 강화를 제외한 아츠는 스킬에 추가효과를 만들거나 아예 다른 스킬로 바꿔버리는데, 이 아츠의 경우 필요한것만 투자하시면 됩니다.</p>
                        <p>필수급 아츠 목록은 직업 가이드를 참조해주세요.</p>
                        <p>눈에 보이지는 않지만, 굉장히 큰 스펙업 요소로 상특을 30까지 찍으면 해당 스킬은 특성포인트를 전혀 투자하지 않은 상태보다 두배가량 강해지죠.</p>
                        <p>거의 모든 스킬은 100특이 있지만, 상특이 있는 스킬은 딜스킬 뿐입니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default roadmapPage6;