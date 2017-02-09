

/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';

require("../../styles/weather/easy/three.scss");
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
        var that = this;
        this.bindExplainPageEvt('.list-item', function () {
            var $ths=$(this),curInteract=$ths.find(".animation"),index =  $ths.index();
            if(!$ths.hasClass("active")){
                $(that.refs.image).find(".item").eq(index).addClass("active").siblings().removeClass("active");
                $ths.addClass("active").siblings().removeClass("active");
            }
        });
    },
    componentDidUpdate(){
    },
    render() {
        return (
            <div className="scene container">
                <img src="../images/weather/easy/2/bg.png" alt=""/>
                <img className="pos-abs title" src="../images/weather/easy/2/title.png" alt=""/>
                <div className="pos-abs box-wrap">
                    <div className="pos-abs show-wrap">
                        <img className="pos-abs box-bg" src="../images/weather/easy/2/box.png" />
                        <ul className="big-show" ref="image" >
                            <li className="item sunny active">
                                <img className="pos-abs big-img center" src="../images/weather/easy/2/sunny.gif" alt=""/>
                                <div className="pos-abs box-txt">It's sunny.</div>
                            </li>
                            <li className="item rainy">
                                <img className="pos-abs big-img center" src="../images/weather/easy/2/rainy.gif" alt=""/>
                                <div className="pos-abs box-txt">It's rainy.</div>
                            </li>
                            <li className="item cloudy">
                                <img className="pos-abs big-img center" src="../images/weather/easy/2/cloudy.gif" alt=""/>
                                <div className="pos-abs box-txt">It's cloudy.</div>
                            </li>
                            <li className="item snowy">
                                <img className="pos-abs big-img center" src="../images/weather/easy/2/snowy.gif" alt=""/>
                                <div className="pos-abs box-txt">It's snowy.</div>
                            </li>
                        </ul>

                    </div>
                </div>

                <ul className="pos-abs list">
                    <li className="list-item">
                        <img className="pos-abs mini-bg" src="../images/weather/easy/2/mini-box.png" alt=""/>
                        <img className="pos-abs center animation" src="../images/weather/easy/2/sunny.png" alt=""/>
                    </li>
                    <li className="list-item">
                        <img className="pos-abs mini-bg" src="../images/weather/easy/2/mini-box.png" alt=""/>
                        <img className="pos-abs center animation" src="../images/weather/easy/2/rainy.png" alt=""/>
                    </li>
                    <li className="list-item">
                        <img className="pos-abs mini-bg" src="../images/weather/easy/2/mini-box.png" alt=""/>
                        <img className="pos-abs center animation" src="../images/weather/easy/2/cloudy.png" alt=""/>
                    </li>
                    <li className="list-item">
                        <img className="pos-abs mini-bg" src="../images/weather/easy/2/mini-box.png" alt=""/>
                        <img className="pos-abs center animation" src="../images/weather/easy/2/snowy.png" alt=""/>
                    </li>

                </ul>
                {
                    //是否存在播放 true
                    this.getPublicControl(false,
                        [
                            { ordinal: 2, left: '550px', bottom: '300px', big:true},
                            { ordinal: 2, left: '900px',bottom: '300px', big:true},
                            { ordinal: 2, left: '1250px', bottom: '300px', big:true },
                            { ordinal: 2, left: '1600px', bottom: '300px', big:true }
                        ],

                        [
                            'Read out the sentences and ask the student to click the correct picture.',
                            'Say "Very good! Let\'s help Timmy to move forward." (Move Timmy to the cloudy part.) And then ask "What\'s the weather like today?" (It\'s a cloudy day.)'
                    ])
                }
            </div>

        )
    }
})
render(<App/>,document.getElementById('app'))