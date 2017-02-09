/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';

require("../../styles/weather/easy/four.scss");
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
                curInteract.attr("src",curInteract.attr("src").split(/\.[a-zA-Z]+/)[0]+".gif");
            }else{
                $ths.removeClass("animation-gif");
                curInteract.attr("src",curInteract.attr("src").split(/\.[a-zA-Z]+/)[0]+".png");
                $ths.find(".bubble-txt").addClass("zoomOut").removeClass("zoomIn");
            }
        });
    },
    componentDidUpdate(){
    },
    render() {
        return (
            <div className="scene container">
                <img className="pos-abs bg" src="../images/weather/easy/4/bg.png" alt=""/>
                <img className="pos-abs bg" src="../images/weather/easy/4/bg.gif" alt=""/>
                <img className="pos-abs title" src="../images/weather/easy/4/title.png" alt=""/>
                <div className="pos-abs boy interact-wrap">
                    <img className="flower interact-img" src="../images/weather/easy/4/boy.png"/>
                    <div className="bubble-txt animated right-bottom-triggle">What's the weather like today?</div>
                </div>
                <div className="pos-abs girl interact-wrap">
                    <img className="flower interact-img" src="../images/weather/easy/4/girl.png"/>
                    <div className="bubble-txt animated left-bottom-triggle">It's cloudy.</div>
                </div>

                <img className="pos-abs music" src="../images/weather/easy/4/cloudy.gif" alt=""/>
                {
                    //是否存在播放 true
                    this.getPublicControl(false, [{
                        ordinal: 2,
                        left: '820px',
                        bottom: '520px',
                        big:true
                    },{
                        ordinal: 2,
                        left: '1350px',
                        bottom: '530px',
                        big:true
                    }], [
                        'Click the left boy and say the sentence. “What’s the weather like today?”',
                        'Click the right boy and say the sentence. “It’s cloudy.”',
                        'Role paly and switch.',
                        'Say “You did a good job. Let’s help Timmy to move forward. “And then ask “What can Timmy do on a cloudy day?” (Timmy can have a picnic on a cloudy day.)'
                    ])



                }
            </div>

        )
    }
})
render(<App/>,document.getElementById('app'))