/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';

require("../../styles/weather/easy/six.scss");
import React from 'react';
import { render } from 'react-dom';

import CommonMixin from '../../common';


let App= React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
        //bindPracticePageEvt 练习页面
        //bindExplainPageEvt 老师授课页面
        this.bindExplainPageEvt('.interact-wrap', function () {
            var $ths=$(this), curInteract = $ths.find(".interact-img");
            if(!$ths.hasClass("animation-gif")){
                $ths.addClass("animation-gif");
                $ths.find(".bubble-txt").show().addClass("zoomIn").removeClass("zoomOut");
                //curInteract.attr("src",curInteract.attr("src").split(/\.[a-zA-Z]+/)[0]+".gif");
            }else{
                $ths.removeClass("animation-gif");
                //curInteract.attr("src",curInteract.attr("src").split(/\.[a-zA-Z]+/)[0]+".png");
                $ths.find(".bubble-txt").addClass("zoomOut").removeClass("zoomIn");
            }
        });
    },
    componentDidUpdate(){
    },
    render() {
        return (
            <div className="scene container">
                <img className="pos-abs bg" src="../images/weather/easy/6/bg.png" alt=""/>
                <img className="pos-abs" style={{ bottom:0,height: "732px",width: "1100px"}} src="../images/weather/easy/6/seawater.gif" alt=""/>

                <img className="pos-abs title" src="../images/weather/easy/6/title.png" alt=""/>
                <div className="pos-abs boy interact-wrap">
                    <img className="flower interact-img" src="../images/weather/easy/6/boy.png"/>
                    <div className="bubble-txt animated right-bottom-triggle">What's the weather like today?</div>
                </div>
                <div className="pos-abs girl interact-wrap">
                    <img className="flower interact-img" src="../images/weather/easy/6/girl.png"/>
                    <div className="bubble-txt animated left-bottom-triggle">It's sunny.</div>
                </div>

                <img className="pos-abs music" src="../images/weather/easy/6/sun.gif"/>
                {
                    //是否存在播放 true
                    this.getPublicControl(false, [{
                            ordinal: 2,
                            left: '650px',
                            bottom: '600px',
                            big:true
                        },{
                            ordinal: 2,
                            left: '1450px',
                            bottom: '430px',
                            big:true
                        }],
                        [
                            'Read the question. "What\'s the weather like today?"',
                            'Click and say "It\'s a snowy  day."',
                            'Ask "What can you do on a snowy day?"',
                            'Click and say "I can make a snowman on snowy day."',
                            'Say "Wonderful! Let\'s help Timmy to move forward." (Move Timmy to the sing a song part.) And then ask "What can Timmy do on a rainy day?" (Timmy can sing a song on a rainy day.)'
                        ])
                }
            </div>


        )
    }
})
render(<App/>,document.getElementById('app'))