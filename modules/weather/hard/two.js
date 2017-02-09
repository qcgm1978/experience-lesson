

/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';

require("../../styles/weather/hard/two.scss");
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
        this.bindExplainPageEvt('.list-item', function () {
            var $ths=$(this),curInteract=$ths.find(".animation");
            if(!$ths.hasClass("active")){
                curInteract.attr("src",curInteract.attr("src").split(/\.[a-zA-Z]+/)[0]+".gif");
                $ths.addClass("active").removeClass("noactive").siblings().removeClass("active").addClass("noactive").each(function(){
                    $(this).find(".animation").attr("src",$(this).find(".animation").attr("src").split(/\.[a-zA-Z]+/)[0]+".png");
                });
            }
        });
    },
    componentDidUpdate(){
    },
    render() {
        return (
            <div className="scene container">
                <img className="pos-abs title" src="../images/weather/hard/2/title.png" alt=""/>
                <ul className="pos-abs list">
                    <li className="list-item ">
                        <img className="pos-abs mask-play" src="../images/weather/hard/2/play.png"/>
                        <img className="pos-abs bg" src="../images/weather/hard/2/sunny-bg.png" alt=""/>
                        <img className="pos-abs txt" src="../images/weather/hard/2/sunny-txt.png" alt=""/>
                        <img className="pos-abs animation" src="../images/weather/hard/2/sunny.png" alt=""/>
                        <div className="pos-abs-bottom"><img className="dosomething" src="../images/weather/hard/2/sunny-do.png" alt=""/></div>
                    </li>
                    <li className="list-item ">
                        <img className="pos-abs mask-play" src="../images/weather/hard/2/play.png"/>
                        <img className="pos-abs bg" src="../images/weather/hard/2/rainy-bg.png" alt=""/>
                        <img className="pos-abs txt" src="../images/weather/hard/2/rainy-txt.png" alt=""/>
                        <img className="pos-abs animation" src="../images/weather/hard/2/rainy.png" alt=""/>
                        <div className="pos-abs-bottom"><img className="dosomething" src="../images/weather/hard/2/rainy-do.png" alt=""/></div>
                    </li>
                    <li className="list-item ">
                        <img className="pos-abs mask-play" src="../images/weather/hard/2/play.png"/>
                        <img className="pos-abs bg" src="../images/weather/hard/2/cloudy-bg.png" alt=""/>
                        <img className="pos-abs txt" src="../images/weather/hard/2/cloudy-txt.png" alt=""/>
                        <img className="pos-abs animation" src="../images/weather/hard/2/cloudy.png" alt=""/>
                        <div className="pos-abs-bottom"><img className="dosomething" src="../images/weather/hard/2/cloudy-do.png" alt=""/></div>
                    </li>
                    <li className="list-item ">
                        <img className="pos-abs mask-play" src="../images/weather/hard/2/play.png"/>
                        <img className="pos-abs bg" src="../images/weather/hard/2/snowy-bg.png" alt=""/>
                        <img className="pos-abs txt" src="../images/weather/hard/2/snowy-txt.png" alt=""/>
                        <img className="pos-abs animation" src="../images/weather/hard/2/snowy.png" alt=""/>
                        <div className="pos-abs-bottom"><img className="dosomething" src="../images/weather/hard/2/snowy-do.png" alt=""/></div>
                    </li>
                </ul>
                {
                    //是否存在播放 true
                    this.getPublicControl(false,
                        [
                            { ordinal: 2, left: '550px', bottom: '750px', big:true},
                            { ordinal: 2, left: '950px',bottom: '750px', big:true},
                            { ordinal: 2, left: '1300px', bottom: '750px', big:true },
                            { ordinal: 2, left: '1700px', bottom: '750px', big:true }

                        ],
                        [
                            'Click the sun and ask "What’s the weather like?" (It’s sunny.)',
                            'Click and ask "What can you do on a sunny day?" (I can fly a kite.)',
                            'Repeat steps 1 & 2 with the rest of the pictures.',
                            'Say "Excellent! Let\'s help Timmy to move forward." (Move Timmy to the  fly a kite part.) And then ask "What can Timmy do on a sunny day?" (Timmy can  fly a kite on a sunny day.)'
                        ])
                }
            </div>

        )
    }
})
render(<App/>,document.getElementById('app'))