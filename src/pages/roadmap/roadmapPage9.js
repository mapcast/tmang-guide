import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';
import image1 from '../../img/roadmap9-1.jpg';
import image2 from '../../img/roadmap9-2.jpg';
import image3 from '../../img/roadmap2-3.jpg';
import image4 from '../../img/roadmap9-3.jpg';
import image5 from '../../img/roadmap9-4.jpg';

const roadmapPage9 = () => {
    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-max'>
                        <h1>장비 옵션에 대해</h1>
                        <p>&nbsp;</p>
                        <img src={image1}/>
                        <p></p>
                        <p>이 게임의 무기와 방어구에는 옵션을 달아줘야 제대로된 장비가 됩니다.</p>
                        <p>이를 고정 아이커와 랜덤 아이커라고 합니다.</p>
                        <img src={image3}/>
                        <p></p>
                        <p>고정 옵션 아이커는 옵션이 고정되어있는 아이커로, 무기의 경우 바이보라 장비와 글레이시어, 머즈루스, 모링포니아, 웨이스트럴, 스키아클립스, 모링포니아 등이 있고,</p>
                        <p>방어구의 경우는 갈리미베부터 원더러스, 스키아클립스, 글레이시어, 모링포니아, 여마신 아이커 등이 있습니다.</p>
                        <p>기본적으론 딜러는 갈리미베, 힐러는 해빙(글레이시어)이 보급형으로 추천됩니다.</p>
                        <img src={image4}/> 
                        <p></p>
                        <p>랜덤 옵션은 세비노스 디스나이 장비에는 기본적으로 장착이 되어있고, 글레이시어 레겐다는 프리머스 디스나이 장비를 추출해서 고정처럼 탈착식으로 사용합니다.</p>
                        <p>물리딜러는 힘, 민첩, 체력, 치명타 발생, 마딜러는 지력, 정신, 체력, 치명타 발생, 힐러는 정신, 체력, 블럭, 중형or천 상쇄or치명타 저항을 맞추는걸 추천해요.</p>
                        <p>다만 세비노스 디스나이 장비의 옵션을 맞추는 뉴비의 경우 4옵션을 다 맞추려면 돈이 많이 깨지기때문에 4옵을 뽑아둔 후 그중 2~3개만 맞추고 만족하고 있다가 차후에 바꾸는걸 추천드립니다.</p>
                        <img src={image5}/>
                        <p></p>
                        <p>랜덤 옵션을 뽑는것은 요령이 있는데, 일단 신비한 돋보기를 사용해서 옵션이 4개(양손무기는 6개, 무기장식은 2개)가 나올때 까지 돌린 뒤</p>
                        <p>산드라의 감정 돋보기 아이템을 사용해서 옵션의 색을 맞춥니다(녹색=단순 스탯 파란색=데미지 상쇄 빨간색=데미지 증가 보라색=그 외 옵션)</p>
                        <p>딜러라면 3녹1보, 힐러라면 2녹1보1파 이런 식으로요.</p>
                        <p>그 후 대장장이 NPC에게 가서 옵션 재감정으로 원하는 옵션이 2~3개가 나올때까지 마구 돌려주세요.</p>
                        <p>남은 하나의 옵션을 파랑 돋보기로 맞추는데, 이 마지막 과정이 돈이 굉장히 크게 깨질 수 있기때문에 세비를 돌리는 뉴비에겐 권하지 않습니다.</p>
                        <p>레겐다를 위해 랜덤 아이커를 맞출때도 왠만하면 그냥 사서 쓰세요.</p>
                        <img src={image2}/>
                        <p></p>
                        <p>아이커를 만드는 방법에 대해 알아 봅시다.</p>
                        <p>페디미안 좌측 끝의 테리아베이스라는 npc한테서 아이커 추출을 할 수 있습니다. </p>
                        <p>유니크 장비를 올리면 포텐셜을 1 소모해서 아이커 추출 시도를 할 수 있고, 포텐셜 0에서 실패 할 시 장비가 파괴되어버립니다. 확률은 10%정도로 추정됩니다.</p>
                        <p>장비 파괴를 막기 위해서는 포텐셜0이 되면 황금 아이커 추출 키트를 사용해야 합니다.</p>
                        <p>아이커를 확실히 뽑으려면 아이커 연성이라는 옵션도 있지만, 이는 굉장히 저가의 아이커를 추출할때나 사용하는 것을 권장합니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default roadmapPage9;