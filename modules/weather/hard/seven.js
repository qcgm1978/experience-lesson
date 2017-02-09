/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';
import './jquery.line.js';
import './line.js';

require("../../styles/weather/hard/seven.scss");
import cr11 from '../../images/weather/hard/7/cr-1-1.png';
import cr12 from '../../images/weather/hard/7/cr-1-2.png';
import cr13 from '../../images/weather/hard/7/cr-1-3.png';
import cr14 from '../../images/weather/hard/7/cr-1-4.png';
import cr21 from '../../images/weather/hard/7/cr-2-1.png';
import cr22 from '../../images/weather/hard/7/cr-2-2.png';
import cr23 from '../../images/weather/hard/7/cr-2-3.png';
import cr24 from '../../images/weather/hard/7/cr-2-4.png';
import cr31 from '../../images/weather/hard/7/cr-3-1.png';
import cr32 from '../../images/weather/hard/7/cr-3-2.png';
import cr33 from '../../images/weather/hard/7/cr-3-3.png';
import cr34 from '../../images/weather/hard/7/cr-3-4.png';


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
        // this.bindExplainPageEvt('span', function () {
        //     $(this).css('font-size', '3.4rem')
        // }, function(){$(this).animateCss('pulse')});
        console.log(this.scale);

        $(".matching-wrap").Matching({scale:this.scale});

    },
    componentDidUpdate(){
    },
    render() {
        return (
            <div className="scene container">
                <img className="pos-abs title" src="../images/weather/hard/7/title.png" alt=""/>
                <div className="matching-wrap">
                    <div className="matching-box">
                        <div className="col col1 col-1"  data-matching="right" data-matching-rule="col2">
                            <div className="row">
                                <div className="cell" data-id="1">
                                    <img src={cr11} alt=""/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell" data-id="2">
                                    <img src={cr12} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell" data-id="3">
                                    <img src={cr13} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell" data-id="4">
                                    <img src={cr14} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="space">
                        </div>
                        <div className="col col2 col-2" data-matching="left right" data-matching-rule="col1 col3">
                            <div className="row">
                                <div className="cell" data-id="5">
                                    <img src={cr21} alt=""/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell" data-id="6">
                                    <img src={cr22} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell" data-id="7">
                                    <img src={cr23} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell" data-id="8">
                                    <img src={cr24} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="space">
                        </div>
                        <div className="col col3 col-3" data-matching="left" data-matching-rule="col2">
                            <div className="row">
                                <div className="cell" data-id="9">
                                    <img src={cr31} alt=""/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell" data-id="10">
                                    <img src={cr32} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell" data-id="11">
                                    <img src={cr33} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell" data-id="12">
                                    <img src={cr34} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    //是否存在播放 true
                    this.getPublicControl(false, [{
                        ordinal: 2,
                        left: '700px',
                        bottom: '400px',
                        big:true
                    },{
                        ordinal: 2,
                        left: '1500px',
                        bottom: '400px',
                        big:true
                    }], [
                        'Read "Match them up."',
                        'Read the sentence with the student and ask student to choose and click the right picture.',
                        'Guide the student to match up all the items. ',
                        'Say "You really did a good job! Let\'s help Timmy to move forward." (Move Timmy to the snowy part.) And then ask "What\'s the weather like today?" (It\'s a snowy day.)'
                    ])
                }
            </div>
        )
    }
})
render(<App/>,document.getElementById('app'))