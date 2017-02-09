/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';

require("../../styles/weather/hard/three.scss");
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
                    <img className="pos-abs bg" src="../images/weather/hard/3/bg.png" alt=""/>
                    <img className="pos-abs title" src="../images/weather/hard/3/title.png" alt=""/>
                    <div className="pos-abs boy interact-wrap">
                        <img className="flower interact-img" src="../images/weather/hard/3/boy.png"/>
                        <div className="bubble-txt animated left-bottom-triggle">What's the weather like today?</div>
                    </div>
                    <div className="pos-abs girl interact-wrap">
                        <img className="flower interact-img" src="../images/weather/hard/3/girl.png"/>
                        <div className="bubble-txt animated right-bottom-triggle">It's a cloudy day.<br/>I can have a picnic <br/>on a cloudy day.</div>
                    </div>
                    <img className="pos-abs music" src="../images/weather/hard/3/picnic.png" alt=""/>
                    <img className="pos-abs grassearth" src="../images/weather/hard/3/grassearth.png" alt=""/>
                    <img className="pos-abs bush" src="../images/weather/hard/3/bush.gif" alt=""/>
                    <img className="pos-abs tree" src="../images/weather/hard/3/tree.gif" alt=""/>
                    <img className="pos-abs cloud" src="../images/weather/hard/3/cloud.gif" alt=""/>
                {
                    //是否存在播放 true
                    this.getPublicControl(false,
                        [
                            { ordinal: 2, left: '520px', bottom: '630px', big:true},
                            { ordinal: 2, left: '1450px',bottom: '500px', big:true}
                        ],
                        [
                            'Read.',
                            'Click the left boy and say the sentence. "What\'s the weather like today?"',
                            'Ask "What can you do on a cloudy day?"',
                            'Click and say "I can have a picnic on a cloudy day."',
                            'Say "Very good! Let\'s help Timmy to move forward." (Move Timmy to the cloudy part.)'
                        ])
                }
            </div>


        )
    }
})
render(<App/>,document.getElementById('app'))