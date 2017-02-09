import '../app.js'
require('./styles/nine.scss')
import React from 'react'
import { render } from 'react-dom'

import CommonMixin from './common'
let Four = React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
    },
    componentDidUpdate(){
        this.bindExplainPageEvt($('#a,#b,#c').find(':first'), function func() {
            $(this).nextAll().animateCss('flipInX', true)
        })
    },
    generateNodesFromJson(){
        this.getJson('../data/9.json');
    },
    render() {
        return (
            <div id='nine' className='container'>
                {this.getElementsNodes(true)}
                <div>
                    <div id='a'>
                        <img src="../images/phonics/easy/9/apple.png"/>
                        <img className='apple none' src="../images/phonics/easy/9/a.png"/>

                        <p className='none'>is for apple, a a apple</p></div>

                    <div id='b'>
                        <img src="../images/phonics/easy/9/ball.png"/>

                        <img className='ball none' src="../images/phonics/easy/9/b.png"/>

                        <p className='none'>is for ball, b b ball</p></div>

                    <div id='c'>
                        <img src="../images/phonics/easy/9/cat.png"/>

                        <img className='cat none' src="../images/phonics/easy/9/c.png"/>

                        <p className='none'>is for cat, c c cat</p></div>

                </div>
                {this.getPublicControl(false, {}, [
                    'Say “Let’s sing the song.”',
                    'Click the apple and guide the student to sing “A, is for apple, a a apple.”',
                    'Click other items and ask the student to sing the song.',
                    'Say “Excellent! You really did a good job.  Let’s help the cat move to the next step. (Move the cat to the next step.) Thank you, XXX. The cat runs away from the shark and gets the apple. Thank you for your help.'
                ])}

            </div>
        )
    }
})
render((
    <Four/>
), document.getElementById('app'))