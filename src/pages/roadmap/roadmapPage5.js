import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';

const roadmapPage5 = () => {
    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-max'>
                        <p>이 페이지에서는 위 로드맵 하단의 스펙업 요소를 뭉뚱그려서 설명하도록 하겠습니다.</p>
                        <p>에피소드 12 도중에 아크라는 아이템을 얻었고, 3챌 진입을 위해 레벨업도 시켜봤겠지만, 뉴비분들은 아직 아크의 효과가 체감이 잘 안갈거에요.</p>
                        <p>하지만 제작 아크를 만드는 순간 아크에 대한 인식이 완전히 바뀝니다. 직업에 따라 자기 딜의 2할 정도를 책임 질 수도 있는 중요한 장비죠.</p>
                        <p>제작아크를 만들려면 아키스톤이 두개가 필요합니다. 뉴비들에게는 커다란 벽이였지만, 최근에는 가격의 저하로 인해 그래도 맞출만은 한 장비가 되었죠.</p>
                        <p>현 시점에서 대부분의 딜러는 천벌을 사용합니다. 섀페보(폭풍), 무고사, 플닥(낙뢰)등 타수로 먹고사는 극히 일부의 직업과 평타직군(질풍) 정도가 예외죠.</p>
                        <p>힐러의 경우 치유의 물결과 분산이 주로 쓰이는데, 이 쪽은 취향 따라 갈리지만 분산쪽을 좀 더 많이 사용하는 것 같습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default roadmapPage5;