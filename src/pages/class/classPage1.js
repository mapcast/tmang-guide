import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';
import C3Chart from 'react-c3js';
import '../../css/c3.css';
import image1 from '../../img/class-swordman1.gif';
import image2 from '../../img/class-swordman2.gif';
import image3 from '../../img/class-swordman3.gif';
import image4 from '../../img/class-swordman4.gif';
import image5 from '../../img/class-swordman5.gif';

import babarian from '../../img/babarian.png';
import fencer from '../../img/fencer.png';
import matador from '../../img/matador.png';
 

const classPage1 = () => {

    const data1 = {
        x: 'x',
        columns: [
            ['x', '단일', '광역', '기동', '시너지', '범용', '난이도'],
            ['data1', 10, 5, 5, 3, 4, 5]
        ],
        colors: {
            'data1': function(d) {
                if(d.value>7){
                    return '#FF4646'
                }else if(d.value>3){
                    return '#FFCC29'
                }else{
                    return '#1A508B'
                }
            }
        },
        type:'bar'
    };

    const data2 = {
        x: 'x',
        columns: [
            ['x', '단일', '광역', '기동', '시너지', '범용', '난이도'],
            ['data1', 9, 2, 3, 3, 5, 6]
        ],
        colors: {
            'data1': function(d) {
                if(d.value>7){
                    return '#FF4646'
                }else if(d.value>3){
                    return '#FFCC29'
                }else{
                    return '#1A508B'
                }
            }
        },
        type:'bar'
    };

    const data3 = {
        x: 'x',
        columns: [
            ['x', '단일', '광역', '기동', '시너지', '범용', '난이도'],
            ['data1', 8, 8, 10, 2, 8, 2]
        ],
        colors: {
            'data1': function(d) {
                if(d.value>7){
                    return '#FF4646'
                }else if(d.value>3){
                    return '#FFCC29'
                }else{
                    return '#1A508B'
                }
            }
        },
        type:'bar'
    };

    const data4 = {
        x: 'x',
        columns: [
            ['x', '단일', '광역', '기동', '시너지', '범용', '난이도'],
            ['data1', 5, 2, 4, 4, 4, 3]
        ],
        colors: {
            'data1': function(d) {
                if(d.value>7){
                    return '#FF4646'
                }else if(d.value>3){
                    return '#FFCC29'
                }else{
                    return '#1A508B'
                }
            }
        },
        type:'bar'
    };
    
    const data5 = {
        x: 'x',
        columns: [
            ['x', '단일', '광역', '기동', '시너지', '범용', '난이도'],
            ['data1', 7, 3, 3, 5, 6, 4]
        ],
        colors: {
            'data1': function(d) {
                if(d.value>7){
                    return '#FF4646'
                }else if(d.value>3){
                    return '#FFCC29'
                }else{
                    return '#1A508B'
                }
            }
        },
        type:'bar'
    };

    const bar = {
        width:{
            ratio:0.4
        }
    }

    const size = {
        width:700,
        height:300
    };

    const legend = {
        show:false
    };

    const tooltip = {
        show:false
    };

    const axis =  {
        x:{
            type: 'category'
        },
        y: {
            max: 10,
            min: 0,
            padding: 0
        }
    }

    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-max'>
                        <div className='guide-class'>
                            <div className='guide-class-flex'>
                                <div className='guide-class-title'>
                                    <img src={image1}/>
                                    <h1>양검</h1>
                                </div>
                                <div classname='guide-class-graph'>
                                    <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data1} size={size} bar={bar}/>
                                </div>
                            </div>
                            <div className='guide-class-desc'>
                                <p>매화검수+도펠죌트너를 기본 베이스로 하이랜더를 섞은 매하도가 양손검 트리의 정석입니다. 크로스 가드로 적의 공격을 막고</p> 
                                <p>사이클론과 매화베기 등의 강력한 공격기를 사용하는게 기본적인 사용법이에요.</p> 
                                <p>하이랜더 대신 바바리안을 넣어서 단일딜을 희생하고 광역쪽을 보충하는것도 가능한데,</p>
                                <p>광역보다 단일이 중요한 게임이기에 거의 하이랜더를 채용하죠.</p>
                                <p>아직 단일딜이 필요한 컨텐츠를 하고 있지 않은 트린이라면 광역 성능이 더 좋은 매바도를 하는게 좋습니다.</p>
                                <h1 class='deepblue'>스킬 트리</h1>

                                <h1 class='deepblue'>추천 아츠</h1>
                            </div>
                        </div>
                        <div className='guide-class'>
                            <div className='guide-class-flex'>
                                <div className='guide-class-title'>
                                    <img src={image2}/>
                                    <h1>펜마</h1>
                                </div>
                                <div classname='guide-class-graph'>
                                    <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data2} size={size} bar={bar}/>
                                </div>
                            </div>
                            <div className='guide-class-desc'>
                                <p>펜마는 강력한 공격을 빠르게 퍼붓는 단일딜 특화 캐릭터입니다. 나머지 직업 하나는 바바리안밖에 선택권이 없어요.</p> 
                                <p>예전만큼의 위상은 아니지만 여전히 단일딜 만큼은 굉장히 강력하고, 생존력도 좋기에 꽤 사랑받는 트리입니다.</p>
                                <p>하지만 답이 없는 수준의 광역과 이동기가 없다는 단점이 꽤 갑갑하게 느껴지는 면은 있어요.</p>
                                <h1 class='deepblue'>스킬 트리</h1>
                                <img src={babarian}/>
                                <img src={fencer}/>
                                <img src={matador}/>
                                <p></p>
                                <span className='whitegray'>스킬 물약은 페인배리어+2 팡트+3. 4렙 레벤타도르 보유 시 팡트 마스터하고 세떼+5</span>
                                <p></p>
                                <h1 class='deepblue'>추천 아츠</h1>
                                <span className='red'>가죽마스터리:야수성 lv10</span>
                                <br/>
                                <span className='whitegray'>파운싱:무아지경</span>
                                <br/>
                                <span className='whitegray'>펜서:패링대거</span>
                                <br/>
                                <span className='whitegray'>코리다 피날레:불소</span>
                            </div>
                        </div>
                        <div className='guide-class'>
                            <div className='guide-class-flex'>
                                <div className='guide-class-title'>
                                    <img src={image3}/>
                                    <h1>양창</h1>
                                </div>
                                <div classname='guide-class-graph'>
                                    <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data3} size={size} bar={bar}/>
                                </div>
                            </div>
                            <div className='guide-class-desc'>
                                <p>양창은 캐터프랙트의 다른 직업과는 비교를 불허하는 속도가 가장 큰 장점인 트리입니다.</p> 
                                <p>캐터프랙트와 하플라이트를 기본으로 가져가고, 남는 자리에 바바리안과 랜서 중에 택 1을 하는 느낌으로 가면 좋아요.</p>
                                <p>소드맨 트리 중 가장 범용성이 좋은 트리로, 창으로 pve와 pvp를 다 할 수 있고 광역 처리도 좋아요.</p>
                                <p>하지만 단일 딜은 다른 소드맨 클래스들에 비해 약간 떨어집니다.</p>
                                <h1 class='deepblue'>스킬 트리</h1>
                                <h1 class='deepblue'>추천 아츠</h1>
                                
                            </div>
                        </div>
                        <div className='guide-class'>
                            <div className='guide-class-flex'>
                                <div className='guide-class-title'>
                                    <img src={image4}/>
                                    <h1>낙무</h1>
                                </div>
                                <div classname='guide-class-graph'>
                                    <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data4} size={size} bar={bar}/>
                                </div>
                            </div>
                            <div className='guide-class-desc'>
                                <p>방패 트리는 일단 낙무를 기본으로 가져가고, 펠타스타, 로델레로, 무르밀로중 택 2를 합니다.</p> 
                                <p>낙무아이의 공격기를 주력딜로 삼고, 바이보라 스왑이 가능 한 로델레로를 챙긴 뒤</p>
                                <p>떡방어를 얻을 수 있는 펠타와 약간이라도 딜이 더 세고 빠른 무르밀로중에 선택하는게 보통이죠.</p>
                                <p>매우 단단하긴 하지만 솔직히 이 게임에서 튼튼한게 큰 메리트가 되지는 않아요. 솔로컨텐츠가 좀 편한정도?</p>
                                <p>버프를 받은게 이거라서 개인적으로는 추천하지 않지만, 애정을 쏟는다면 충분히 할만은 한 트리입니다. 나름 재미도 있고요.</p>
                                <h1 class='deepblue'>스킬 트리</h1>
                                <h1 class='deepblue'>추천 아츠</h1>
                            </div>
                        </div>
                        <div className='guide-class'>
                            <div className='guide-class-flex'>
                                <div className='guide-class-title'>
                                    <img src={image5}/>
                                    <h1>한창</h1>
                                </div>
                                <div classname='guide-class-graph'>
                                    <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data5} size={size} bar={bar}/>
                                </div>
                            </div>
                            <div className='guide-class-desc'>
                                <p>한창 트리는 레티아리이와 하플라이트를 기본으로 가져가고, 바바리안과 드라군 중 선택을 합니다.</p> 
                                <p>아직은 연구가 더 필요한 트리입니다.</p>
                                <h1 class='deepblue'>스킬 트리</h1>
                                
                                <h1 class='deepblue'>추천 아츠</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default classPage1;