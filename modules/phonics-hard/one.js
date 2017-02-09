import '../../app.js'

require('../styles/phonics-hard/one.scss')
import React from 'react'
import { render } from 'react-dom'

import CommonMixin from '../common'
let App= React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
        this.bindExplainPageEvt('p', function () {
            $(this).css('font-size', '3.4rem')
        }, function(){$(this).animateCss('pulse')});

    },
    componentDidUpdate(){

    },

    render() {
        return (
            <div id='hard-one' className='container'>
                <div>
                    <div id='a'>
                        <img className='apple ' src="../images/phonics/easy/9/a.png"/>

                        <p className='txt'>is for apple, a a apple</p></div>

                    <div id='b'>

                        <img className='ball ' src="../images/phonics/easy/9/b.png"/>

                        <p className='txt'>is for ball, b b ball</p></div>

                    <div id='c'>

                        <img className='cat ' src="../images/phonics/easy/9/c.png"/>

                        <p className='txt'>is for cat, c c cat</p></div>
                    <div id='d'>

                        <img className='dog' src="../images/phonics/hard/1/d.png"/>

                        <p className='txt'>is for dog, d d dog</p></div>

                </div>
                <img id='tree' src='../images/phonics/hard/1/tree.png'/>
                <img id='cat' src='../images/phonics/hard/1/cat.png'/>
                <img id='dog' src='../images/phonics/hard/1/dog.png'/>
                <img id='ball' src='../images/phonics/hard/1/ball.png'/>
                <img id='music' src='../images/phonics/hard/1/music.png'/>
                <img id='title' src='../images/phonics/hard/1/title.png'/>
                <img id='sentence' src='../images/phonics/hard/1/sentence.png'/>
                {
                    this.getPublicControl(false, {
                        ordinal: 2,
                        left: '24%',
                        top: '39%',
                        big:true
                    }, [
                        'say"let\'s sing the song',
                        '(pause after each sentence)sing the song and guide the student to repeat',
                        'sing the song with the studentnd guide the student to repeat',
                        'sing the song with the student'
                    ])
                }

            </div>
        )
    }
})
render((
    <App/>
), document.getElementById('app'))