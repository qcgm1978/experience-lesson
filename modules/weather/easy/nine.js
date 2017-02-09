/**
 * Created by rushui on 2016/9/8.
 */
/**
 * Created by rushui on 2016/9/1.
 */
import '../../../app.js';

require("../../styles/weather/easy/nine.scss");
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
        this.bindExplainPageEvt('.interact-text', function () {
            var $ths=$(this);
            var cmd = $ths.attr("data-nav");
            $("[data-nav='"+cmd+"']").addClass("active");
            setTimeout(function(){
                $("[data-nav='"+cmd+"']").removeClass("active");
            },2000);
        });
    },
    componentDidUpdate(){
    },
    render() {
        return (
            <div className="scene container">
                <img className="pos-abs bg" src="../images/weather/easy/9/bg.png" alt=""/>
                <img className="pos-abs title" src="../images/weather/easy/9/title.png" alt=""/>

                <img data-nav="sunny"  className="pos-abs interact-text sunny" src="../images/weather/easy/9/sunny.png" alt=""/>
                <img data-nav="rainy"  className="pos-abs interact-text rainy" src="../images/weather/easy/9/rainy.png" alt=""/>
                <img data-nav="cloudy" className="pos-abs interact-text cloudy" src="../images/weather/easy/9/cloudy.png" alt=""/>
                <img data-nav="snowy"  className="pos-abs interact-text snowman" src="../images/weather/easy/9/snowman.png" alt=""/>
                <img data-nav="sunny"  className="pos-abs interact-text sunny-boy" src="../images/weather/easy/9/sunny-boy.png" alt=""/>
                <img data-nav="rainy"  className="pos-abs interact-text rainy-girl" src="../images/weather/easy/9/rainy-girl.png" alt=""/>
                <img data-nav="snowy" className="pos-abs interact-text snowy-girl" src="../images/weather/easy/9/snowy-girl.png" alt=""/>
                <img data-nav="cloudy"  className="pos-abs interact-text cloudy-boy" src="../images/weather/easy/9/cloudy-boy.png" alt=""/>

                <div className="pos-abs wrap-content">
                    <h2>The Weather Song</h2>
                    <ul className="list">
                        <li className="list-item">What's the weather,</li>
                        <li className="list-item">What's the weather,</li>
                        <li className="list-item">What's the weather,</li>
                        <li className="list-item">What's the weather,</li>
                        <li className="list-item">What's the weather like today?</li>
                        <li className="list-item">What's the weather like today?</li>
                        <li data-nav="sunny" className="list-item interact-text color-sunny">Is it sunny?</li>
                        <li data-nav="snowy" className="list-item interact-text color-snowy">Is it snowy?</li>
                        <li data-nav="cloudy" className="list-item interact-text  color-cloudy">Is it cloudy?</li>
                        <li data-nav="rainy" className="list-item interact-text color-rainy">Is it rainy?</li>
                        <li className="list-item">What's the weather like today?</li>
                        <li className="list-item">What's the weather like today?</li>
                    </ul>
                </div>





                {
                    //是否存在播放 true
                    this.getPublicControl(false, [{
                            ordinal: 2,
                            left: '650px',
                            bottom: '600px',
                            big:true
                        },{
                            ordinal: 2,
                            left: '1450px',
                            bottom: '430px',
                            big:true
                        }],
                        [
                            'Read the question. "What\'s the weather like today?"',
                            'Click and say "It\'s a snowy  day."',
                            'Ask "What can you do on a snowy day?"',
                            'Click and say "I can make a snowman on snowy day."',
                            'Say "Wonderful! Let\'s help Timmy to move forward." (Move Timmy to the sing a song part.) And then ask "What can Timmy do on a rainy day?" (Timmy can sing a song on a rainy day.)'
                        ])
                }
            </div>


        )
    }
})
render(<App/>,document.getElementById('app'))