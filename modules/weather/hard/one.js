/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';

require("../../styles/weather/hard/one.scss");
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
            <img className="pos-abs title" src="../images/weather/hard/1/title.png" alt=""/>
            <ul className="pos-abs list">
                <li className="list-item ">
                    <div className="pos-abs rainy interact-wrap">
                        <img className="rainy interact-img" src="../images/weather/hard/1/rainy.png"/>
                        <div className="bubble-txt animated">rainy</div>
                    </div>
                    <div className="pos-abs yellow-flower interact-wrap">
                        <img className="flower interact-img" src="../images/weather/hard/1/yellow-flower.png"/>
                        <div className="bubble-txt animated left-top-triggle yellow-color">yellow</div>
                    </div>
                    <img className ="pos-abs green-grass" src="../images/weather/hard/1/green-grass.png" alt=""/>
                </li><li className="list-item" style={{marginLeft: '300px'}}>
                    <div className="pos-abs sunny interact-wrap">
                        <img className="sunny interact-img" src="../images/weather/hard/1/sun.png"/>
                        <div className="bubble-txt animated">sunny</div>
                    </div>
                    <div className="pos-abs red-flower interact-wrap">
                        <img className="flower interact-img" src="../images/weather/hard/1/red-flower.png"/>
                        <div className="bubble-txt animated  left-top-triggle red-color">red</div>
                    </div>
                    <img className="pos-abs green-grass" src="../images/weather/hard/1/green-grass.png" alt=""/>
                </li>
            </ul>
            {
                //是否存在播放 true
                this.getPublicControl(false, [
                    { ordinal: 2,left: '800px',bottom: '850px',big:true},
                    { ordinal: 2,left: '1600px',bottom: '850px',big:true},
                    { ordinal: 2,left: '700px',bottom: '500px',big:true},
                    { ordinal: 2,left: '1500px',bottom: '500px',big:true}
                    ], [
                    'Ask "How many pictures are there?"',
                    'Click the flowers and say "These flowers are yellow, but those flowers are red."',
                    'Ask the student to circle the other difference and say it out loud. (rainy/ sunny)',
                    'Say "Wonderful! Let\'s help Timmy to have the adventure." (Move Timmy to the sunny part.) And then ask "What\'s the weather like today?" (It\'s a sunny day.)'

                ])
            }
        </div>
        )
    }
});
render(<App/>,document.getElementById('app'))