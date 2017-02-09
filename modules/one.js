import '../app.js'

import './styles/one.scss'
import React from 'react'
import { render } from 'react-dom'

import CommonMixin from './common'
let One = React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
        this.bindExplainPageEvt('p', function () {
            $(this).css('font-size', '3.4rem')
            $('.step').remove()
            let word=$(this).text().split(' ').splice(-1)[0];
            $('[src$="' +
                word+'.png"]').animateCss()
        }, function () {
            $(this).animateCss('pulse')
        });
    },
    componentDidUpdate(){
    },
    generateNodesFromJson(){
        this.getJson('../data/1.json');
    },
    render() {
        return (
            <div id='one' className='container one'>
                {this.getElementsNodes()}
                <img id='apple' src='../images/phonics/easy/1/apple.png'/>
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

                </div>

                {this.getPublicControl(false, {
                    ordinal: 2,
                    left: '39%',
                    top: '32%'
                }, [
                    'say"let\'s sing the song',
                    '(pause after each sentence)sing the song and guide the student to repeat',
                    'Say “We are going to help the cat to run away from the shark. And then the cat will get the apple and the ball.”'
                ])}

            </div>
        )
    }
})
render((
    <One/>
), document.getElementById('app'))