import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';

const roadmapPage3 = () => {
    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-max'>
                        <p>여신과 마신 아이커는 현 시점의 종결급 고정 아이커로, 굉장히 강력한 효과들을 지니고 있습니다.</p>
                        <p>마신 아이커도 체감이 상당하지만, 여신 아이커를 쓰는 직업의 경우 이 아이커를 맞출때부터 제대로 된 성능이 나온다고 볼 수 있어요.</p>
                        <p>일반적인 직업은 대부분 마신 아이커중 지부리나스 - 오버로드 레이드를 사용하지만 일부 직업은 여신 아이커를 사용합니다.</p>
                        <p>여마신 아이커 간단 정리!</p>
                        <p>오버로드 레이드(지부리나스) - 펜서, 양창(랜서), 파엘도, 테음룬, 아쳐 모든직업, 불릿, 로그</p>
                        <p>하시 임페라토르(카르타스) - 소환사</p>
                        <p>인피니티 블레싱(달리아) - 양검, 양창(캐터), 사음룬, 섀페보</p>
                        <p>세인트 오아스(제미나) - 슈바르츠라이터를 비롯한 평타 직군</p>
                        <p>미드나이트 뱁티즘(바카리네) - 방패 직군</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default roadmapPage3;