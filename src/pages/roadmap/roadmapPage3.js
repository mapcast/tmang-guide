import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';
import image1 from '../../img/roadmap4-1.jpg';
import image2 from '../../img/roadmap4-2.jpg';
const roadmapPage3 = () => {
    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-max'>
                        <h1 className='orange'>여신과 마신(사실 마왕임)</h1>
                        <img src={image1}/>
                        <p></p>
                        <p>여신과 마신 아이커는 현 시점의 종결급 고정 아이커로, 굉장히 강력한 효과들을 지니고 있습니다.</p>
                        <p>마신 아이커도 체감이 상당하지만, 여신 아이커를 쓰는 직업의 경우 이 아이커를 맞출때부터 제대로 된 성능이 나온다고 볼 수 있어요.</p>
                        <p>일반적인 직업은 대부분 마신 아이커중 지부리나스 - 오버로드 레이드를 사용하지만 일부 직업은 여신 아이커를 사용합니다.</p>
                        <img src={image2}/>
                        <p></p>
                        <p>여마신 장비 제작에는 클라페다의 알케미스트 아벨루에게서 만들수 있는 아케늄이라는 아이템이 필요합니다.</p>
                        <p>추가로 모든 지역의 신력의 석편을 두개씩 모아서 만들 수 있는 온전한 신력의 조각 두개로 여신 장비 레시피를,</p>
                        <p>검붉은 영혼석 파편 20개를 모아서 제작 가능한 검붉은 영혼석 조각 두개로 마신 장비 레시피를 제작 가능하죠.</p>
                        <span className={classNames('guide-highlight', 'orange', 'mt50')}>여마신 아이커 착용 직업 간단 정리</span>
                        <p></p>
                        <p>오버로드 레이드(지부리나스) - 펜서, 양창(랜서), 파엘도, 테음룬, 아쳐 모든직업, 불릿, 로그</p>
                        <p>하시 임페라토르(카르타스) - 소환사</p>
                        <p>인피니티 블레싱(달리아) - 양검, 양창(캐터), 사음룬, 섀페보</p>
                        <p>세인트 오아스(제미나) - 슈바르츠라이터를 비롯한 평타 직군</p>
                        <p>미드나이트 뱁티즘(바카리네) - 방패 직군</p>
                        <p>디바인 스티그마(아우스테야) - 힐러</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default roadmapPage3;