/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';

require("../../styles/weather/easy/zero.scss");
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
        this.bindExplainPageEvt('span', function () {
            $(this).css('font-size', '3.4rem')
        }, function(){$(this).animateCss('pulse')});
    },
    componentDidUpdate(){
    },
    render() {
        return (
            <div className="scene container">
                <img className="pos-abs animation" src="../images/weather/easy/0/animation.gif" alt=""/>
                <a className="pos-abs a-logo" href="http://www.51talk.com/">
                    <img className="logo" src="../images/weather/easy/0/logo.png" alt="load img error"/>
                </a>
                <img className="pos-abs sun" src="../images/weather/easy/0/sun.png" alt="load img error"/>
                <img className="pos-abs whats" src="../images/weather/easy/0/whats.png" alt="load img error"/>
                <img className="pos-abs the" src="../images/weather/easy/0/the.png" alt="load img error"/>
                <img className="pos-abs weather" src="../images/weather/easy/0/weather.png" alt="load img error"/>
                <img className="pos-abs like" src="../images/weather/easy/0/like.png" alt="load img error"/>
                <section className="pos-abs show-word-wrap">
                    <img className="title" src="../images/weather/easy/0/pageTitle.png"/>
                    <img className="label" src="../images/weather/easy/0/label.png" alt=""/>
                    <ul>
                        <li className="show-words">
                            <i className="radius"></i>
                            <span className="text interact-text">learn about weather.</span>
                        </li>
                        <li className="show-words">
                            <i className="radius"></i>
                            <span className="text interact-text">learn the "I can..." sentence pattern.</span>
                        </li>
                    </ul>
                </section>
                {
                    //是否存在播放 true
                    this.getPublicControl(false, {
                        ordinal: 2,
                        left: '620px',
                        bottom: '180px',
                        big:true
                    }, [


                        'Introduce yourself to the student.',
                        'Ask the student\'s name and greet the student.',
                        'Click and say.',
                        'Say "We are going to help Timmy to visit some cities. Here\'s the ticket for you." (Show the student the map and the ticket.)'
                    ])
                }
            </div>
        )
    }
})
render(<App/>,document.getElementById('app'))