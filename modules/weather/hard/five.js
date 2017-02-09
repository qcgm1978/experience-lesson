/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';

require("../../styles/weather/hard/five.scss");
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
                <img className="pos-abs bg" src="../images/weather/hard/5/bg.png" alt=""/>
                <img className="pos-abs title" src="../images/weather/hard/5/title.png" alt=""/>
                <div className="pos-abs boy interact-wrap">
                    <img className="flower interact-img" src="../images/weather/hard/5/boy.png"/>
                    <div className="bubble-txt animated right-bottom-triggle">What's the weather like today?</div>
                </div>
                <div className="pos-abs girl interact-wrap">
                    <img className="flower interact-img" src="../images/weather/hard/5/girl.gif"/>
                    <div className="bubble-txt animated left-bottom-triggle">It's a sunny day.<br/>I can fly a kite on a sunny day.</div>
                </div>

                    {
                        //是否存在播放 true
                        this.getPublicControl(false, [
                            {
                                ordinal: 2,
                                left: '800px',
                                bottom: '580px',
                                big:true
                            },
                            {
                                ordinal: 2,
                                left: '1450px',
                                bottom: '400px',
                                big:true
                            }
                        ], [
                            'Read the question. "What\'s the weather like today?"',
                            'Click and say "It\'s a sunny day."',
                            'Ask "What can you do on a sunny day?"',
                            'click and say "I can fly a kite on a sunny day."',
                            'Say "Excellent! Let\'s help Timmy to have the adventure." (Move Timmy to the rainy part.) And then ask "What\'s the weather like today?" (It\'s a rainy day.)'
                        ])
                    }
            </div>
        )
    }
})
render(<App/>,document.getElementById('app'))