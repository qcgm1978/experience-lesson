import '../../../app.js'
import '../../styles/food/easy/three.scss'
import React from 'react'
import { render } from 'react-dom'

import CommonMixin from '../../common'
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
        this.bindPracticePageEvt('#left-food img,#right-food img', function () {
            $('.step').remove()

        }, function () {
            //$(this)
            //    .animateCss('pulse')
        });
    },
    componentDidUpdate(){

    },


    render() {
        return (
            <div id='easy-three' className='container'>

                <div id='left-food'>
                    <img id='title' src='../images/food/easy/3/soda.png'/>
                    <img id='title' src='../images/food/easy/3/coffee.png'/>
                    <img id='title' src='../images/food/easy/3/milk.png'/>
                    <img id='title' src='../images/food/easy/3/tea.png'/>
                    <img id='title' src='../images/food/easy/3/pizza.png'/>
                </div>

                <div id='right-food'>
                    <img id='title' src='../images/food/easy/3/milk1.png'/>
                    <img id='title' src='../images/food/easy/3/milk2.png'/>
                    <img id='title' src='../images/food/easy/3/pizza1.png'/>
                    <img id='title' src='../images/food/easy/3/pizza2.png'/>
                    <img id='title' src='../images/food/easy/3/tea1.png'/>
                    <img id='title' src='../images/food/easy/3/tea2.png'/>
                </div>


                {
                    this.getPublicControl(false, {
                        left: '34%',
                        top: '36%',
                    }, [
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