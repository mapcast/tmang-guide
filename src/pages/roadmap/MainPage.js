import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';
import DagreGraph from 'dagre-d3-react';

const MainPage = () => {
    
    let node = [
        {
            id: 1,
            label: '에피소드를 밀자',
            class: 'nodes',
            labelType: 'text'
        },
        {
            id: 2,
            label: '<a href=\'/roadmap/1\'>챌린지 3구역 스펙을 맞추자</a>',
            class: 'nodes',
            labelType: 'html'
        },
        {
            id: 3,
            label: '<a href=\'/roadmap/2\'>무기와 악세사리, 카드를 맞추자</a>',
            class: 'nodes',
            labelType: 'html'
        },
        {
            id: 4,
            label: '<a href=\'/roadmap/3\'>여신, 마신 아이커를 맞추자</a>',
            class: 'nodes',
            labelType: 'html'
        },
        {
            id: 5,
            label: '<a href=\'/roadmap/4\'>파티에 필요한 직업을 알아보자</a>',
            class: 'nodes',
            labelType: 'html'
        },
        {
            id: 6,
            label: '<a href=\'/roadmap/6\'>제작아크</a>',
            class: 'nodes',
            labelType: 'html'
        },
        {
            id: 7,
            label: '<a href=\'/roadmap/7\'>4렙바보와 루시페리</a>',
            class: 'nodes',
            labelType: 'html'
        },
        {
            id: 8,
            label: '<a href=\'/roadmap/8\'>엔드스펙 그 이상</a>',
            class: 'nodes',
            labelType: 'html'
        },
        {
            id:9,
            label: '<a href=\'/roadmap/5\'>레겐다 장비를 맞추자</a>',
            class: 'nodes',
            labelType: 'html'
        },
        {
            id:10,
            label: '<a href=\'/roadmap/9\'>장비 옵션을 맞추자</a>',
            class: 'nodes',
            labelType: 'html'
        }
    ]

    let link = [
        {
            source: 1,
            target: 2,
            label: '주력기 특성을 찍기'
        },
        {
            source:10,
            target:3
        },
        {
            source:2,
            target:10
        },
        {
            source: 3,
            target: 4,
            label: '필수 아츠와 주력기 상특을 되는대로 찍기'
        },
        {
            source: 4,
            target: 5,
            label: '레이드'
        },
        {
            source: 4,
            target: 6,
            label: '스펙업'
        },
        {
            source: 6,
            target: 7
        },
        {
            source: 7,
            target: 8
        },
        {
            source: 5,
            target: 9
        }
    ]
    let option = {
        rankdir: 'LR',
        align: 'UL',
        ranker: 'tight-tree'
    }

    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-left'>
                        <p className={classNames('guide-bigdesc', 'orange')}>Newbie's ROADMAP</p>
                        <p className='guide-desc'>노드를 클릭 시 해당 페이지로 이동합니다.</p>
                    </div>
                    <div className='guide-content-right'>
                        <DagreGraph
                            nodes={node}
                            links={link}
                            options={option}
                            width='860'
                            height='760'
        //                   animate={1000}
                            shape='rect'
                            fitBoundaries
        //                    zoomable
                            onNodeClick={e => console.log(e)}
                            onRelationshipClick={e => console.log(e)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;