import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';
import image1 from '../../img/wizard-class-1.gif';
import image2 from '../../img/wizard-class-2.gif';
import image3 from '../../img/wizard-class-3.gif';
import image4 from '../../img/wizard-class-4.gif';
import image5 from '../../img/wizard-class-5.gif';
import image6 from '../../img/wizard-class-6.gif';
import C3Chart from 'react-c3js';
import '../../css/c3.css';

const classPage2 = () => {

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

    const data1 = {
        x: 'x',
        columns: [
            ['x', '단일', '광역', '기동', '시너지', '범용', '난이도'],
            ['data1', 7, 9, 5, 3, 3, 1]
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
            ['data1', 6, 10, 5, 3, 6, 3]
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
            ['data1', 10, 1, 4, 3, 5, 6]
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
            ['data1', 8, 5, 6, 3, 4, 8]
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
            ['data1', 5, 5, 5, 3, 3, 3]
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

    return(
        <div className='guide-container'>
            <h1 className='guide-title'>TMANG  GUIDE</h1>
            <div className={classNames('guide-frame')}>
                <Menu/>
                <div className={classNames('guide-content')}>
                    <div className='guide-content-max'>
                        <div className='guide-content-max'>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image1}/>
                                        <h1>파엘도</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data1} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>파엘도는 가장 평범한 느낌의 마법사 트리입니다. 다양한 장판기가 특징으로, 준수한 화력과 넓은 범위를 가지고 있죠.</p> 
                                    <p>최근엔 엘리멘탈리스트를 빼고 보코르를 넣어서 단일 화력을 높이는 트리가 각광받고 있습니다. 단일이 암법이랑 비빌정도의 포텐이란 얘기도 있어요.</p>
                                    <p>자본 없이 쉽게 시작할 수 있는 트리지만, 재미가 없단 평이 많아요.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>

                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image2}/>
                                        <h1>사음룬</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data2} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>사음룬은 채널링 마법사 트리로, 여신셋이 나올때부터 제대로 된 화력이 나와요.</p> 
                                    <p>pvp쪽에서 음양사의 가치가 높기 때문에 한 트리로 pvp, pve를 다 챙길 수 있단 점은 좋지만, 단일딜이 약한것이 단점입니다.</p>
                                    <p>범위가 넓을 뿐만 아니라 한곳으로 모아주기까지 해서 광역공격만큼은 모든 트리 중 최고라고 할 수 있습니다.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>

                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image3}/>
                                        <h1>섀페보</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data3} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>흔히 암법이라 불리는 이 트리는 마딜 직업 중 최강의 dps를 가지고 있는 직업입니다.</p> 
                                    <p>일반적인 마법사와는 완전히 달리 적에게 비비면서 딜을 넣어줘야 하지만, 피흡이나 다양한 무적기 등으로 생존력을 꽤 갖추고 있습니다.</p>
                                    <p>단일은 강력하지만, 공격 범위는 위자드뿐만 아니라 모든 직업을 통틀어서 최악으로 답답해요.</p>
                                    <p>또한 채널링 트리이기에 여신셋을 갖출때부터 제 화력이 나오기 시작합니다.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>

                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image4}/>
                                        <h1>소네페</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data4} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>소네는 다양한 마물을 소환해서 싸우는 직업으로, 다른 마법사들과는 사용법에 큰 차이가 있습니다.</p> 
                                    <p>그리모어에 다양한 악마 카드를 등록해서 소환하고, 탑승도 하면서 싸우는 매력적인 직업이지만</p>
                                    <p>이 직업을 키우는것엔 한가지 난관이 존재하는데, 사용하는 장비들이 다른 직업들과 전혀 호환이 안되며, 심지어 제대로 다루기 위해서</p>
                                    <p>요구되는 아이템의 수준이 상당히 높단 것입니다.</p>
                                    <p>너프 이후 화력이 투자를 요구하는만큼 나오지 않기 때문에 현재로서는 애정이 있는 사람만 사용하는 직업입니다.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>
                                    
                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image5}/>
                                        <h1>테음룬</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data5} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>테음룬은 스톤샤워의 강력한 딜을 주 무기로 삼는 트리입니다.</p> 
                                    <p>테라맨서의 바이보라 무기 무릿매의 효과가 샌드블래스트가 치명타로 터질시 무릿매가 나가는건데,</p>
                                    <p>이 때문에 치저가 높은보스한테는 딜이 너무 안박힐 뿐더러 기본적으로 딜 넣는게 너무 운에 크게 좌우되어 있는게 단점입니다.</p>
                                    <p>샌드블래스트가 모두 치명타로 들어갈 수 있다면 꽤 강할 수도 있지만, 현실적으로 불가능한 얘기라 현재로서는 애정을 가진 사람만이 하고 있어요.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>
                                    
                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default classPage2;