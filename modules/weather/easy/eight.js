/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';

require("../../styles/weather/easy/eight.scss");
require("../../styles/weather/easy/feature-carousel.scss");
import React from 'react';
import { render } from 'react-dom';

import CommonMixin from '../../common';

import cloudy from '../../images/weather/easy/7/shame.png';
import  rainy from '../../images/weather/easy/7/shame.png';
import  snowy from '../../images/weather/easy/7/shame.png';
import  sunny from '../../images/weather/easy/7/shame.png';

import  "./jquery-1.7.min.js";
import "./jquery.featureCarousel.js";
var $jq17 =jQuery;//暂存jQuery17版jQuery变量
$.noConflict();//将$的控制权交回系统jQuery


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
        window.carousel = $jq17("#carousel").featureCarousel({
            // include options like this:
            // (use quotes only for string values, and no trailing comma after last option)
            // option: value,
            // option: value


            // If zero, take original width and height of image
            // If between 0 and 1, multiply by original width and height (acts as a percentage)
            // If greater than one, use as a forced width/height for all of the images
            largeFeatureWidth :   0,
            largeFeatureHeight:		0,
            smallFeatureWidth:    0,
            smallFeatureHeight:		0,
            // how much to pad the top of the carousel
            topPadding:           20,
            // spacing between the sides of the container
            sidePadding:          50,
            // the additional offset to pad the side features from the top of the carousel
            smallFeatureOffset:		50,
            // indicates which feature to start the carousel at
            startingFeature:      1,
            // speed in milliseconds it takes to rotate the carousel
            carouselSpeed:        1000,
            // time in milliseconds to set interval to autorotate the carousel
            // set to zero to disable it, negative to go left
            autoPlay:             0,
            // with autoplay enabled, set this option to true to have the carousel pause rotating
            // when a user hovers over any feature
            pauseOnHover:         true,
            // with autoplay enabled, set this option to completely stop the autorotate functionality
            // when a user hovers over any feature
            stopOnHover:          false,
            // numbered blips can appear and be used to track the currently centered feature, as well as
            // allow the user to click a number to move to that feature. Set to false to not process these at all
            // and true to process and display them
            trackerIndividual:    false,
            // a summation of the features can also be used to display an "x Of y" style of tracking
            // this can be combined with the above option as well
            trackerSummation:     false,
            // true to preload all images in the carousel before displaying anything. If this is set to false,
            // you will probably need to set a fixed width/height to prevent strangeness
            preload:              true,
            // Will only display this many features in the carousel
            // set to zero to disable
            displayCutoff:        0,
            // an easing can be specified for the animation of the carousel
            animationEasing:      'swing',
            // selector for the left arrow of the carousel
            // display captions below the image instead of on top
            captionBelow:         true
            // callback function for when a feature has animated to the center
        });


        var data={
            weathery:["cloudy","sunny","snowy","rainy"]
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

        $(".carousel-feature").click(function(){//选择左侧图片场景
            $(".carousel-feature").removeClass("active");
            $(this).addClass("active");
            $(".weathery").html(listItem(data.weathery));
        });
        this.bindExplainPageEvt(".carousel-feature .text",function(e){//点击下划线
            e.stopPropagation();
            var $ths = $(this).find(".empty"),target = $ths.data("cmd")||$ths.attr("data-cmd");
                if($ths.parents(".carousel-feature").hasClass("active")){
                    $(".weathery").addClass("active");
                }
        },function () {

        },false);
        this.bindExplainPageEvt(".answer li",function(e){//点击问题选项
            e.stopPropagation();
            var $ths = $(this);
            var txt = $ths.text();
            var answer = $(".carousel-feature.active").attr("data-answer");
            if(txt == answer){
                $(".carousel-feature.active").find(".empty").addClass("right");
            }else{
                $(".carousel-feature.active").find(".empty").addClass("wrong");
            }
            $ths.parent().removeClass("active");
        },function () {

        },false);
        $("body").on("click",function(){
            $(".carousel-feature").removeClass("active");
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

                <div className="pos-abs widget-wrap">
                    <div id="carousel">
                        <div className="carousel-feature">
                            <a href="#"><img className="carousel-image" alt="Image Caption" src={snowy}/></a>
                            <div className="carousel-caption">
                                <p>snowy</p>
                            </div>
                            <div className="carousel-content">
                                <img className="content-img" src="../images/weather/easy/8/snowy.png" alt=""/>
                                <p className="text" data-answer="snowy">It's <span className="empty"> </span>.</p>
                            </div>
                        </div>
                        <div className="carousel-feature">
                            <a href="#"><img className="carousel-image" alt="Image Caption" src={cloudy}/></a>
                            <div className="carousel-caption">
                                <p>cloudy</p>
                            </div>
                            <div className="carousel-content">
                                <img className="content-img" src="../images/weather/easy/8/cloudy.png" alt=""/>
                                <p className="text" data-answer="cloudy">It's <span className="empty"> </span>.</p>
                            </div>
                        </div>
                        <div className="carousel-feature">
                            <a href="#"><img className="carousel-image" alt="Image Caption" src={rainy}/></a>
                            <div className="carousel-caption">
                                <p>rainy</p>
                            </div>
                            <div className="carousel-content">
                                <img className="content-img" src="../images/weather/easy/8/rainy.png" alt=""/>
                                <p className="text" data-answer="rainy">It's <span className="empty"> </span>.</p>
                            </div>
                        </div>
                        <div className="carousel-feature">
                            <a href="#"><img className="carousel-image" alt="Image Caption" src={sunny}/></a>
                            <div className="carousel-caption">
                                <p>sunny</p>
                            </div>
                            <div className="carousel-content">
                                <img className="content-img" src="../images/weather/easy/8/sunny.png" alt=""/>
                                <p className="text" data-answer="sunny">It's <span className="empty"> </span>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="pos-abs answer weathery" data-cmd="weathery">
                    <li>cloudy</li><li>
                    sunny</li><li>
                    snowy</li><li>
                    rainy</li>
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