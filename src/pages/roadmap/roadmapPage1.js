import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';
import image1 from '../../img/roadmap1-1.jpg';
import image2 from '../../img/roadmap1-2.jpg';
import image3 from '../../img/roadmap1-3.jpg';
import image4 from '../../img/roadmap1-4.jpg';
import image5 from '../../img/roadmap1-5.jpg';

const roadmapPage1 = () => {
    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                   <div className='guide-content-max'>
                       <h1 className='orange'>챌린지 3구역으로</h1>
                       <p></p>
                       <p>에피소드를 막 깬 뉴비들에게는 챌린지 2구역이라는 시련이 닥칩니다.</p>
                       <p>아직 3챌에 갈 조건이 갖춰지지 않은 뉴비들에게는 유일한 파밍장소인데, 사람도 없고 모이더라도 스펙 부족으로 클리어가 하루종일 걸리죠.</p>
                       <img src={image1}/>
                       <p></p>
                       <p>정상적인 파밍을 하기 위해서는 챌린지 3구역을 가야하는데, 에피소드를 막 깬 뉴비는 입장컷에 막혀서 들어갈 수가 없습니다.</p>
                       <p>이 페이지에서는 이 챌린지 3구역, 통칭 3챌을 최대한 빨리 들어가기 위해 어떻게 해야 할지를 알아보겠습니다.</p>
                       <img src={image2}/>
                       <p></p>
                       <p>일단 주무기, 보조무기, 방어구, 아이커의 경우는 에피소드 12-1 보상으로 지급되는 아이템을 이벤트를 통해 강화하는 것을 권장합니다.</p>
                       <p>또한, 종종 판매되는 육성 패키지를 구매하면 이벤트를 하지 않고 위 조건을 맞출 수 있습니다.</p>
                       <p>이벤트에 초월, 강화권 등이 없을때도 있는데, 이때는 현질 없이는 게임 진입이 많이 어려워요...</p>
                       <img src={image3}/>
                       <p></p>
                       <p>악세사리의 경우 이레디안 악세사리를 구매해서 잠깐 착용하시는걸 권장합니다.</p>
                       <p>실질적으로 체감될만한 성능을 지닌 악세사리는 아니기 때문에, 빠르게 다음 단계인 모링/드라코로 넘어가는걸 추천해요.</p>
                       <img src={image4}/>
                       <p></p>
                       <p>다음은 아크인데, INSERT 키를 눌러서 앉은 상태에서 J를 누르면 아크 합성 창이 나옵니다.</p>
                       <p>에피소드 12-1 도중 퀘스트 보상으로 받은 아크를 3레벨까지 강화하시면 되는데, 1000만실버 내외의 부담없는 가격이니 꼭 레벨업을 시켜주세요.</p>
                       <img src={image5}/>
                       <p></p>
                       <p>마지막 조건인 카제 인장은 위 퀘스트를 클리어 하면 얻을 수 있습니다.</p>
                       <p>위 조건들을 모두 맞추셨으면, 이제 3챌 진입이 가능해요. 축하합니다!</p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default roadmapPage1;