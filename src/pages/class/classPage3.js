import classNames from 'classnames/bind';
import Menu from '../../components/mainPage/Menu';

import image1 from '../../img/archer-class-1.gif';
import image2 from '../../img/archer-class-2.gif';
import image3 from '../../img/archer-class-3.gif';
import image4 from '../../img/archer-class-4.gif';
import image5 from '../../img/archer-class-5.gif';
import image6 from '../../img/archer-class-6.gif';
import image7 from '../../img/archer-class-7.gif';
import image8 from '../../img/archer-class-8.gif';
import C3Chart from 'react-c3js';
import '../../css/c3.css';


const classPage3 = () => {

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
            ['data1', 9, 7, 6, 0, 10, 4]
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
            ['data1', 10, 5, 7, 0, 8, 5]
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
            ['data1', 6, 8, 5, 0, 8, 7]
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
            ['data1', 6, 8, 5, 0, 8, 6]
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
            ['data1', 5, 4, 0, 2, 5, 3]
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

    const data6 = {
        x: 'x',
        columns: [
            ['x', '단일', '광역', '기동', '시너지', '범용', '난이도'],
            ['data1', 5, 9, 0, 0, 10, 6]
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

    const data7 = {
        x: 'x',
        columns: [
            ['x', '단일', '광역', '기동', '시너지', '범용', '난이도'],
            ['data1', 2, 0, 0, 10, 8, 1]
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

    const data8 = {
        x: 'x',
        columns: [
            ['x', '단일', '광역', '기동', '시너지', '범용', '난이도'],
            ['data1', 6, 4, 0, 0, 3, 2]
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
                            <div className={classNames('guide-class-desc', 'deepblue')}>
                                현 시점에서 아쳐 클래스는 무기에 따라 기본적으로 직업 두개를 가져가고, 나머지 하나를 선택하는 형식입니다.
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image1}/>
                                        <h1>레메</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data1} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>레인저+메르겐. 양활 트리입니다.</p> 
                                    <p>최근에 아발리스터가 단일이 최강이다보니 그쪽으로 많이 갈아타고 있어서 템 값도 싼데 단일, 광역 가리지 않고 강한데다 pvp까지 좋아요.</p>
                                    <p>스킬 자체도 시원시원하고, 뉴비나 고인물이나 가리지 않고 추천할 수 있는 좋은 직업입니다.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>
                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image2}/>
                                        <h1>레압</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data2} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>레인저+아발. 쇠뇌 트리입니다.</p> 
                                    <p>아처 트리에서 가장 강력한 단일 딜 능력을 가지고 있지만, 광역 처리와 pvp의 경우엔 양활에 비해 밀리죠.</p>
                                    <p>양활과 같이 스킬 자체도 매우 시원시원하고 좋습니다.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>
                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image3}/>
                                        <h1>머산</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data3} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>머스킷+산포. 머스킷 트리입니다.</p> 
                                    <p>삼보방포의 광역 처리가 매우 훌륭하고, 패치를 통해 조작이 답답한 면도 사라졌죠.</p>
                                    <p>하지만 단일 딜 포텐이 떨어지기 때문에 머스킷에 크게 매력을 느끼는 사람들이 하는 직업입니다.</p>
                                    <p>원체 pvp가 강한 직업이였고, 현재도 꽤 괜찮습니다. 대규모보단 소규모 교전에서 힘을 발휘하는 타입이지만,</p>
                                    <p>탱커한테도 꽤 유효한 타격을 줄 수 있죠.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>
                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image4}/>
                                        <h1>캐매</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data4} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>캐노니어+매트로스. 캐논 트리입니다.</p> 
                                    <p>넓은 범위에 시원시원하게 딜을 꽂아넣는게 특징이죠. 캐논답게요. 시즈모드도 있습니다.</p>
                                    <p>센터파이어 바이보라 무기를 통해 단일도 어느정도 보완이 가능하지만, 원체 단일이 부족한 직업이다 보니 아쉽죠.</p>
                                    <p>머스킷과 거의 같은 장단점을 공유하고 있는게 현 시점의 캐논입니다. pvp에선 머스킷과 달리 소규모보단 대규모 교전에서 강력하긴 해요.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>
                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image5}/>
                                        <h1>플레쳐</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data5} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>플레쳐는 양활과 쇠뇌 트리가 경우에 따라 선택하는 트리입니다.</p> 
                                    <p>양활은 단순히 단일을 챙길때 시위강화를 스왑하면서 쓸 수도 있지만, 투자 효율이 좋진 않아요. 그래도 아발한테 밀리니까 아발로 갈아타는거기도 하고..</p>
                                    <p>결국 현 시점에서는 적의 방어력이 높을때 브로드 헤드로 그걸 깎아내는 용도가 강하다고 보시는게 좋을 것 같네요.</p>
                                    <p>pvp에서도 신기전이 꽤 괜찮습니다.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>
                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image6}/>
                                        <h1>응사</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data6} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>응사는 딜을 챙기기 위한 또 하나의 선택으로, 플레쳐에 비해 훨씬 광범위하게 사랑받고 있습니다.</p> 
                                    <p>pve에서는 토마호크가, pvp에서는 멍텅구가 큰 역할을 하죠.</p>
                                    <p>또한 에이밍으로 광역 처리에 큰 도움을 줍니다. 애매할때는 그냥 응사타면 된다고 봐도 될 정도로 괜찮은 직업이에요.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>
                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image7}/>
                                        <h1>감정사</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data7} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>아처의 파티 시너지 그 자체라 할 수 있는 감정사입니다.</p>
                                    <p>과대평가, 평가절하, 약점공격, 모조품. 파티원들의 딜을 증폭시켜주는 스킬을 다수 보유하고 있기에</p>
                                    <p>파티플레이에서 아쳐의 자리를 반드시 한 자리 채우게 만드는 직업이에요.</p>
                                    <p>단, 감정사를 달 시에는 솔로플레이에서는 약해지기 때문에 상위권 아쳐들이 직변 포인트를 쓰게 만드는 원인이기도 하죠.</p>
                                    <h1 class='deepblue'>스킬 트리</h1>
                                    <h1 class='deepblue'>추천 아츠</h1>
                                </div>
                            </div>
                            <div className='guide-class'>
                                <div className='guide-class-flex'>
                                    <div className='guide-class-title'>
                                        <img src={image8}/>
                                        <h1>무고사</h1>
                                    </div>
                                    <div classname='guide-class-graph'>
                                        <C3Chart axis={axis} tooltip={tooltip} legend={legend} data={data8} size={size} bar={bar}/>
                                    </div>
                                </div>
                                <div className='guide-class-desc'>
                                    <p>무고사는 현재 응사의 자리를 위협하고 있는 딜러 포지션으로, 아발리스터에 한해서는 무고사가 응사 이상으로 선호 받고 있습니다.</p>
                                    <p>최종 데미지를 10% 늘려주고, 엄청난 타수를 통해 폭풍, 낙뢰의 화력을 높여주는 역할입니다.</p>
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

export default classPage3;