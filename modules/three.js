import '../app.js'
require('./styles/eight.scss')
import React from 'react'
import { render } from 'react-dom'

import CommonMixin from './common'
import Popup from './popup.js'
let Three = React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
        return {
            popup: 'none',
            position: {
                left: 0,
                top: 0
            },
            src: '',
            order: 1,
            ini: true
        }
    },
    bindEvt(){
    },
    componentDidMount () {
    },
    componentDidUpdate(){
        if (this.state.ini) {
            let that = this;
            var arr = [
                '[src$="apple.png"]',
                '[src$="ball.png"]',
                '[src$="cat.png"]',
                '[src$="a-capital.png"]',
                '[src$="c-red.png"]',
                '[src$="b-capital.png"]',
                '[src$="b.png"]',
                '[src$="c-blue.png"]',
                '[src$="a.png"]'

            ];
            $.each(arr, function (i, n) {
                that.bindExplainPageEvt(this, function () {
                    $('.scale').removeClass('scale')
                    $(this).addClass('scale')
                    $('[ordinal=' + (i + 1) + ']').remove()
                    //that.setState({
                    //    popup: '',
                    //    position: 'popup-' + i,
                    //    src: $(this).attr('src')
                    //})
                });
            });
            this.state.ini = false;
        }
    },
    generateNodesFromJson(){
        this.getJson('../data/8.json', this.bindEvt);
    },
    render() {
        let exec = /([^/]+)\.png$/.exec(this.state.src), word = '', num = 1;
        if ($.isArray(exec)) {
            word = exec[1]
            if (word == 'apple') {
                num = 1;
            } else if (word == 'ball') {
                num = 2;
            } else {
                num = 3
            }
        }

        return (
            <div id='eight' className='container'>
                {



                    this.getElementsNodes(true)
                }
                <img src='../images/phonics/easy/8/a-capital.png'/>
                <img src='../images/phonics/easy/8/a.png'/>
                <img src='../images/phonics/easy/8/b-capital.png'/>
                <img src='../images/phonics/easy/8/b.png'/>
                <img src='../images/phonics/easy/8/c-blue.png'/>
                <img src='../images/phonics/easy/8/c-red.png'/>
                <Popup className={this.state.popup} popup={this.state.position} face='none' options={''} word={word}
                       method={this.bindExplainPageEvt}
                       num={num}/>
                {this.getPublicControl(false, [
                        {
                            ordinal: 1,
                            left: '25%',
                            top: '45%'
                        },
                        {
                            ordinal: 2,
                            left: '56%',
                            top: '80%',
                            //down:true
                        },
                        {
                            ordinal: 3,
                            left: '70%',
                            top: '80%',
                            //down:true
                        }],
                    [
                        'Ask the student “What do you see?”',
                        'Guide the student to click the items and answer the questions and then say “I see a, A, apple, etc.',
                        'Say “Very good! Let’s help the cat move to the next step. (Move the cat to the next step.)'
                    ]

                    //this.state.order
                )

                }
            </div>
        )
    }
})
render((
    <Three/>
), document.getElementById('app'))