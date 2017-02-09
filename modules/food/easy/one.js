import '../../../app.js'

import '../../styles/food/easy/one.scss'
import React from 'react'
import { render } from 'react-dom'

import CommonMixin from '../../common'
let App = React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {
        //todo how to sync the draggable evt? Canvas?
        $('#food img').draggable({
            stop: function (event, ui) {
                let word = /\w+(?=\.png$)/.exec($(this).attr('src'))[0];
                alert(word)
                $(this).animateCss('flash')
                $('.step').remove()

            }
        })
        this.bindExplainPageEvt('p', function () {
            $(this).css('font-size', '3.4rem')
        }, function () {
            $(this).animateCss('pulse')
        });
    },
    componentDidUpdate(){
    },
    reset(){
        location.reload()
    },
    render() {
        return (
            <div id='easy-one' className='container'>
                <div id='food'><img id='tree' src='../images/food/easy/1/cake.png'/>
                    <img id='cat' src='../images/food/easy/1/soda.png'/>
                    <img id='dog' src='../images/food/easy/1/tea.png'/>
                    <img id='ball' src='../images/food/easy/1/coffee.png'/>
                    <img id='music' src='../images/food/easy/1/apple.png'/>
                    <img id='title' src='../images/food/easy/1/banana.png'/>
                    <img id='sentence' src='../images/food/easy/1/orange.png'/>
                    <img id='sentence' src='../images/food/easy/1/water.png'/></div>
                <div className='check' onClick={this.reset}>Reset</div>
                {
                    this.getPublicControl(false, {
                        ordinal: 2,
                        left: '68%',
                        top: '39%',
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