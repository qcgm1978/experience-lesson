/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';

require("../../styles/weather/hard/eight.scss");
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

        var data  = [];
        var data={
            weathery:["a cloudy","a sunny","a snowy","a rainy"],
            dosomething:["have a picnic","sing a song","fly a kite","make a snowman"],
            weatherly:["a cloudy","a sunny","a snowy","a rainy"]
        };
        function listItem(data){
            var str="";
            data.sort(function(){
                return Math.random()-0.5;
            }).forEach(function(elm,idx,arr){
                str+="<li>"+elm+"</li>";
            });
            return str;
        }

        $(".weathery").html(listItem(data.weathery));
        $(".dosomething").html(listItem(data.dosomething));
        $(".weatherly").html(listItem(data.weatherly));
        this.bindExplainPageEvt(".question-item",function(){//选择左侧图片场景
            $(this).addClass("active").siblings().removeClass("active");
            $(".question-wrap span").removeClass("active").text("");
            $(".weathery").html(listItem(data.weathery));
            $(".dosomething").html(listItem(data.dosomething));
            $(".weatherly").html(listItem(data.weatherly));
            $(".question").removeClass("active");
        });
        this.bindExplainPageEvt(".question-wrap span",function(e){//点击下划线
            e.stopPropagation();
            var $ths = $(this),target = $ths.data("cmd")||$ths.attr("data-cmd");
            if($ths.hasClass("active")){
                $ths.removeClass("active");
                $("."+target).removeClass("active").siblings(".answer").removeClass("active");
                // $("."+target).removeClass("active");
            }else{
                $ths.parents(".question-wrap").find("span").removeClass("active");
                $ths.addClass("active");
                $("."+target).addClass("active").siblings(".answer").removeClass("active");
            }
        },function () {

        },false);
        this.bindExplainPageEvt(".answer li",function(e){//点击问题选项
            e.stopPropagation();
            var $ths = $(this),target = $ths.parent().data("cmd")||$ths.parent().attr("data-cmd");
            var txt = $ths.text();
            $(".answer-"+target).removeClass("active").text(txt);
            $ths.parent().removeClass("active");
        },function () {

        },false);
        $("body").on("click",function(){
            $(".answer").removeClass("active");
        });
    },
    componentDidUpdate(){
    },
    render() {
        return (
            <div className="scene container">
                <img className="pos-abs bg" src="../images/weather/hard/8/bg.png" alt=""/>
                <img className="pos-abs title" src="../images/weather/hard/8/title.png" alt=""/>
                <img className="pos-abs boy" src="../images/weather/hard/8/boy.png" alt=""/>
                <ul className="pos-abs question">
                    <li className="question-item cloudy active">
                        <img src="../images/weather/hard/8/cloudy.png" alt=""/>
                    </li>
                    <li className="question-item rainy">
                        <img src="../images/weather/hard/8/rainy.png" alt=""/>
                    </li>
                    <li className="question-item sunny">
                        <img src="../images/weather/hard/8/sunny.png" alt=""/>
                    </li>
                    <li className="question-item snowy">
                        <img src="../images/weather/hard/8/snowy.png" alt=""/>
                    </li>
                </ul>
                <div className="pos-abs question-wrap">
                    <p><ins>It's </ins><span data-cmd="weathery" className="answer-weathery">①</span><ins> day.</ins></p>
                    <p><ins>I can </ins><span data-cmd="dosomething" className="answer-dosomething">②</span></p>
                    <p><ins>on a </ins><span data-cmd="weatherly" className="answer-weatherly">③</span><ins> day.</ins></p>
                </div>
                <ul className="pos-abs answer weathery" data-cmd="weathery">
                    <li>
                        a cloudy</li><li>
                    a sunny</li><li>
                    a snowy</li><li>
                    a rainy</li>
                </ul>
                <ul className="pos-abs answer dosomething" data-cmd="dosomething">
                    <li>have a picnic</li><li>
                    sing a song</li><li>
                    fly a kite</li><li>
                    make a snowman</li>
                </ul>
                <ul className="pos-abs answer weatherly" data-cmd="weatherly">
                    <li>
                        a cloudy</li><li>
                    a sunny</li><li>
                    a snowy</li><li>
                    a rainy</li>
                </ul>
                {
                    //是否存在播放 true
                    this.getPublicControl(false, [{
                            ordinal: 2,
                            left: '800px',
                            top: '200px',
                            big:true
                        },{
                            ordinal: 2,
                            left: '1450px',
                            top: '280px',
                            big:true
                        }],
                        [
                            ' Read "Help Timmy to finish the weather report."',
                            'Click the first picture, and then ask the student to complete the sentence. "It\'s a cloudy day. I can have a picnic on a cloudy day. "',
                            'Click other pictures and guide the student to complete all the sentences.',
                            'Say "Excellent! We almost come to the last stop." (Move Timmy to the snowman part.) And then ask "What can Timmy do on a snowy day?" (Timmy can make a snowman on a snowy day.) Finally, say "Thank you XXX. Timmy  nished his adventure. Thanks for your help."'
                        ])
                }
            </div>


        )
    }
})
render(<App/>,document.getElementById('app'))