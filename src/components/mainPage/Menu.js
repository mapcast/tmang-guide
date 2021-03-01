import classNames from 'classnames/bind';
import jQuery from 'jquery';
import { useState } from 'react';
window.$ = window.jQuery = jQuery;


const Menu = () => {

    const [dispmenu1,setDispmenu1] = useState(false);
    const [dispmenu2,setDispmenu2] = useState(false);
    const [dispmenu3,setDispmenu3] = useState(false);

    const displayRoadmapMenu = () => {
        if(dispmenu1){
            setDispmenu1(false);
        }else{
            setDispmenu1(true);
        }
    }

    const displayClassMenu = () => {
        if(dispmenu2){
            setDispmenu2(false);
        }else{
            setDispmenu2(true);
        }
    }

    const displayContentMenu = () => {
        if(dispmenu3){
            setDispmenu3(false);
        }else{
            setDispmenu3(true);
        }
    }

    return(
        <div className='guide-menu'>
            <div onClick={displayRoadmapMenu} className={classNames('guide-menu-element')}>
                <p className='guide-menu-element-title'>로드맵</p>
            </div>
            <div className={ (dispmenu1 ? '':'hide') }>
                <a href="/tmang-guide">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>메인 로드맵</p>
                    </div>
                </a>
                <a href="/tmang-guide/roadmap/1">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>챌린지 3구역</p>
                    </div>
                </a>
                <a href="/tmang-guide/roadmap/9">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>장비 옵션</p>
                    </div>
                </a>
                <a href="/tmang-guide/roadmap/10">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>특성과 아츠</p>
                    </div>
                </a>
                <a href="/tmang-guide/roadmap/2">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>무기와 악세, 카드</p>
                    </div>
                </a>
                <a href="/tmang-guide/roadmap/3">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>여마신 아이커</p>
                    </div>
                </a>
                <a href="/tmang-guide/roadmap/4">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>레이드에 필요한 직업</p>
                    </div>
                </a>
                <a href="/tmang-guide/roadmap/5">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>레겐다 방어구</p>
                    </div>
                </a>
                <a href="/tmang-guide/roadmap/6">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>아크</p>
                    </div>
                </a>
                <a href="/tmang-guide/roadmap/7">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>4렙바보, 루시페리</p>
                    </div>
                </a>
                <a href="/tmang-guide/roadmap/8">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>최종 스펙업</p>
                    </div>
                </a>
            </div>
            <div onClick={displayClassMenu} className={classNames('guide-menu-element')}>
                <p className='guide-menu-element-title'>직업 가이드</p>
            </div>
            <div className={ (dispmenu2 ? '':'hide') }>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>소드맨</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>위자드</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>아쳐</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>클레릭</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>스카우트</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>부캐로 추천하는 직업</p>
                    </div>
                </a>
            </div>
            <div onClick={displayContentMenu} className={classNames('guide-menu-element')}>
                <p className='guide-menu-element-title'>컨텐츠 가이드</p>
            </div>
            <div className={ (dispmenu3 ? '':'hide') }>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>주간 숙제</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>챌린지 모드</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>분열 특이점</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>어시스터 던전</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>베르니케 파편 던전</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>업힐 디펜스</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>차원 붕괴 지점</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>주간 보스 레이드</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>보스 협동전</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>대지의 탑 솔미키 4구간</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>벨코퍼의 둥지</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>흰 까마귀의 영면지</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>나비목 접선지</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>하얀 마녀의 숲</p>
                    </div>
                </a>
                <a href="#">
                    <div className={classNames('guide-menu-element-sub')}>
                        <p className='guide-menu-element-sub-title'>성물 레이드</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Menu;