import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';
import image1 from '../../img/roadmap5-1.gif';
import image2 from '../../img/roadmap5-2.gif';
import image3 from '../../img/roadmap5-1.jpg';
const roadmapPage4 = () => {
    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-max'>
                        <h1 className='orange'>레이드를 가보자</h1>
                        <img src={image3}/>
                        <p></p>
                        <p>여마신까지 맞춘 뉴비들은 슬슬 레이드를 손 대보는게 좋아요. 수입도 짭짤하고, 챌이랑은 비교도 안되게 재미있으니까요.</p>
                        <p>하지만 파티를 짜는 것이 가장 고역일텐데, 어떤 파티 구성을 짜야 쉽게 클리어가 가능한지 알아보도록 하겠습니다.</p>
                        <p>현 시점에서 고정팟이 활발히 돌아가는 레이드는 나비목 접선지 하드(통칭 하나비)와 하얀 마녀의 숲이 있습니다.</p>
                        <p>길티네도 있긴 한데 그거 도는사람이 이걸 왜 읽음?</p>
                        <img src={image1}/>
                        <p></p>
                        <p>1.나비목 접선지 HARD</p>
                        <p>추천 스펙 : 레겐다 방어구 소지, 위 로드맵의 분기점 전까지의 스펙업 완료</p>
                        <p>나비목 접선지는 패턴 난이도는 높지만 스펙 컷은 그다지 높지 않아서 게임을 시작한지 오래 되지 않은 유저들도 즐길 수 있는 컨텐츠입니다.</p>
                        <p>주로 소드맨을 한명, 힐러를 한명, 암법을 한명 고정적으로 데려가고 나머지 두자리는 적당한 딜러를 채워넣는것을 추천하는데요,</p>
                        <p>소드맨은 경우에 따라 패릿 머로더 카드 등으로 어그로를 가장 강한 사람이 빨아들이는 식으로 대체하셔도 상관 없습니다.</p>
                        <p>하지만 힐러와 암법은 필수죠. 암법이 본캐릭이 아니라도 투자 안한 부캐로라도 하나 데리고 있는게 좋습니다.</p>
                        <p>암법이 있으면 저주라는 성가신 패턴을 거의 무효화시키고 진행 할 수 있으니까요.</p>
                        <p>이 레이드의 보상은 기본적으로는 모스 탈크 파우더 하나, 운이 좋으면 아키스톤이나 카랄같은 초호화 아이템을 얻을 수도 있습니다.</p>
                        <p>상세한 공략은 <a href='https://gall.dcinside.com/board/view/?id=tos&no=1026499'>이 페이지</a> 참조</p>
                        <img src={image2}/>
                        <p></p>
                        <p>2.하얀 마녀의 숲</p>
                        <p>추천 스펙 - NORMAL : 나비목 접선지 HARD와 동일</p>
                        <p>추천 스펙 - HARD : 제작 아크 보유</p>
                        <p>하얀 마녀의 숲은 스펙 컷 느낌의 레이드입니다. 워낙 샌드백 느낌이라 때리는 맛은 있지만, 레이드로서의 재미는 크지 않죠.</p>
                        <p>딜러들은 그냥 말뚝딜 하다가 장판 지우러 내려가고, 탱커는 발판 밟기 미니게임을 하듯이 하면서 계속 때리는게 다입니다. 힐러는 머리 비우고 해빙힐을 눌러야 하죠.</p>
                        <p>마녀의 공격이 상당히 아프고, 어그로를 제대로 못잡았을때 레이드의 난이도가 크게 올라가기에 이 레이드에는 나비보다도 소드맨의 중요도가 높습니다.</p>
                        <p>딜타임도 딜러들에 비해 탱커가 상대적으로 길게 나오기에 탱커의 화력이 높으면 클리어가 편해요.</p>
                        <p>힐러의 경우 반드시 해빙 아이커가 필요합니다.</p>
                        <p>이 레이드의 보상은 기본적으로는 노말은 글레이시어 심장*3에 글레이시어 무기 완제, 글레이시어 심장*4에 득템은 11강 레겐다 무기(풀포텐). 양쪽 다 아키스톤도 드랍됩니다..</p>
                        <p>완제 무기의 경우 그리 드물게 나오는 아이템이 아니니 나비보다 저렴하긴 해도 득템률은 훨씬 높아요.</p>
                        <p>패턴을 보고 싶으면 <a href='http://www.inven.co.kr/board/tos/4185/14089'>이 페이지</a> 참조</p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default roadmapPage4;