import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';
import image1 from '../../img/roadmap2-1.png';
import image2 from '../../img/roadmap2-2.jpg';
import image3 from '../../img/roadmap2-3.jpg';
import image4 from '../../img/roadmap2-4.jpg';

const roadmapPage2 = () => {
    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-max'>
                        <h1 className='orange'>무기와 악세, 카드를 맞춰보자</h1>
                        <img src={image1}/>
                        <p></p>
                        <p>일단 우선도가 가장 높은것은 악세사리를 상위단계로 올리는 겁니다. 시세는 변동이 있기에 적기 힘들지만, 무기보다는 훨씬 저렴해요.</p>
                        <p>물리딜러 - 모링포니아 피크티스 or 드라코나스 파시테우스</p>
                        <p>마법딜러 - 모링포니아 트리우카스 or 드라코나스 리느키 시트</p>
                        <p>힐러 - 모링포니아 주오다 or 카르나스 자이스티(용병단 주화)</p>
                        <p>위 악세를 3세트로 맞추시면 됩니다.</p>
                        <img src={image2}/>
                        <p></p>
                        <p>다음으로는 무기를 올려봅시다. 마켓에서 사거나 직작을 하거나인데, 직작을 할 시 11강에 포텐셜이 꽉 차 있는 무기를 사는걸 권장해요.</p>
                        <p>개인적으론 직작보다 마켓에서 16강 10초 이상의 레겐다 무기를 사는것을 추천합니다. 보통 그쪽이 싸요.</p>
                        <img src={image3}/>
                        <p></p>
                        <p>이벤트/패키지 세비노스 무기에는 바이보라 아이커 인챈트권을 발랐겠지만, 이제는 바이보라 아이커를 직접 사서 박아야합니다.</p>
                        <p>insert키를 눌러서 앉은 뒤 L을 누르면 아이커 탈착 UI가 나와요.</p>
                        <img src={image4}/>
                        <p></p>
                        <p>카드는 다른 사람에게는 보이지 않겠지만, 꽤 체감 효과가 큰 장비입니다.</p>
                        <p>일단 가장 우선이 되어야 할 것은 블루 카드의 자우라*3 누아엘레*3으로, 물리방어력, 마법방어력을 10%나 증가시켜주는 카드들입니다.</p>
                        <p>레이드를 갈때쯤에는 위 카드들을 모두 갖추는걸 추천해요. 예외로 힐러는 블루카드에 보통 보러블을 낍니다.</p>
                        <p>레드 카드는 증뎀 옵션으로, 방어 타입 별 증뎀카드를 모두 세장씩 갖추는 것을 추천합니다.</p>
                        <p>가격이 부담된다면 퍼플 카드에 라자펄을, 레드카드에 프리즌커터를 넣는것으로 충당 할 수도 있습니다. </p>
                        <p>혹은 펜서같이 자체적으로 상태이상을 계속 거는 직업은 해당 상태이상 관련 카드를 착용하면 됩니다.</p>
                        <p>퍼플 카드 역시 용도에 따라 빌리우스, 노어 파세레우스, 키올 루아라와, 메이, 카미야등을 바꿔 끼지만 기본적으로는 게이징골렘*1, 석화고래*1을 껴두는것을 추천합니다.</p>
                        <p>그린 카드는 물딜 - 라슈아 마딜 - 루치아 힐러 - 로잘리야를 세장 쓰시면 됩니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default roadmapPage2;