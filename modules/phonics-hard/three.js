import '../../app.js'
import '../../bower_components/jquery.line/jquery.line.js'
import '../styles/phonics-hard/three.scss'
import React from 'react'
import { render } from 'react-dom'

import CommonMixin from '../common'
let Three = React.createClass({
    mixins: [CommonMixin],
    data: {
        index: [{x: 312}, {x: 692}, {x: 1127}, {x: 1545}],
        answer: [[0, 0], [1, 3], [2, 2], [3, 1]]
    },
    yourLine: [],
    answerLine: [],
    getInitialState(){
    },
    componentDidMount () {
        let that = this
        this.bindPracticePageEvt('#words img,#pics img', function () {
            $(this)
                .siblings()
                .not('[hasLine]')
                .removeClass('scale-ele')
            $(this).addClass('scale-ele')
            var $scale = $('.scale-ele').not('[hasLine]');
            if ($scale.length == 2) {
                let word = that.data.index[$scale.eq(0).index()],
                    pic = that.data.index[$scale.eq(1).index()]
                $('.container').line(word.x, 465, pic.x, 627, {
                    color: "#fcd100", stroke: 5, zindex: 1001
                }, function () {
                    $('.container').children('div:last').attr('line', true)
                    $scale.attr('hasLine', true)
                });
                that.yourLine.push($('.container').children('div:last'))
            }
        }, function () {
            $(this)
                .animateCss('pulse')
        });
    },
    componentDidUpdate(){
        for (let i = 0; i < this.sentences.length; i++) {
            this.num = this.setPageState(this.num);
            this.setArrowsUi(this.num);
        }
    },
    checkClick(){
        this.yourLine.map((item)=> {
            item.hide()
        });
        this.data.answer.map((item)=> {
            $('.container').line(this.data.index[item[0]].x, 465, this.data.index[item[1]].x, 627, {
                color: "#7dd839", stroke: 5, zindex: 1001
            }, function () {
                //alert('Hello new line!')
            });
            this.answerLine.push($('.container').children('div:last'))
        })
        $('.middle').hide();
        $('.double-btn').show();
    },
    showYours(){
        this.answerLine.map((item)=> {
            item.hide();
        });
        this.yourLine.map((item)=> {
            item.show();
        })
    },
    render() {
        return (
            <div id='hard-three' className='container'>

                <img id='title' src='../images/phonics/hard/3/title.png'/>

                <div id='words'>
                    <img id='a' src='../images/phonics/hard/3/a.png'/>
                    <img id='b' src='../images/phonics/hard/3/b.png'/>
                    <img id='c' src='../images/phonics/hard/3/c.png'/>
                    <img id='d' src='../images/phonics/hard/3/d.png'/>

                </div>
                <div id='pics'>
                    <img id='title' src='../images/phonics/hard/3/apple.png'/>
                    <img id='title' src='../images/phonics/hard/3/desk.png'/>
                    <img id='title' src='../images/phonics/hard/3/car.png'/>
                    <img id='title' src='../images/phonics/hard/3/ball.png'/>
                </div>
                <div className='check middle' onClick={this.checkClick}>
                    Enter
                </div>
                <div className='none double-btn'>
                    <div className='check showYours' onClick={this.showYours}>
                        Your answer
                    </div>
                    <div className='check left' onClick={this.checkClick}>
                        Right answer
                    </div>
                </div>

                {
                    this.getPublicControl(false, {}, [
                        'ask the stundent to connect',
                        'explain the answer'
                    ])
                }

            </div>
        )
    }
})
render((
    <Three/>
), document.getElementById('app'))