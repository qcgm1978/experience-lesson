import '../../../app.js'
import '../../styles/food/easy/two.scss'
import React from 'react'
import { render } from 'react-dom'

import CommonMixin from '../../common'
let Two = React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
        return {
            dataOrder: 0,

        }
    },
    componentDidMount () {
        let that=this
        $('#food img').draggable({

            stop: function (event, ui) {
                if ($('[cur]').length) {
                    $('[cur]')
                        .css({
                            left: 0,
                            top: 0
                        })
                        .removeAttr('cur')
                }
                let word = /\w+(?=\.png$)/.exec($(this).attr('src'))[0];
                $('#txt').text('a bottle of ' + word)
                $(this)
                    .animateCss('flash')
                    .attr('cur', true)
                $('.step').remove()
            }
        })
    },
    componentDidUpdate(){

    },
    render() {
        return (
            <div id='two' className='container'>
                <div id='txt'></div>
                <div id='food'>
                    <img id='tree' src='../images/food/easy/2/cake.png'/>
                    <img id='cat' src='../images/food/easy/2/soda.png'/>
                    <img id='dog' src='../images/food/easy/2/tea.png'/>
                    <img id='ball' src='../images/food/easy/2/coffee.png'/>
                    <img id='music' src='../images/food/easy/2/cola.png'/>
                    <img id='title' src='../images/food/easy/2/pizza.png'/>
                    <img id='sentence' src='../images/food/easy/2/rice.png'/>
                    <img id='sentence' src='../images/food/easy/2/water.png'/>
                    <img id='sentence' src='../images/food/easy/2/milk.png'/>
                    <img id='sentence' src='../images/food/easy/2/soup.png'/>

                </div>

                {
                    this.getPublicControl(false, {
                        //ordinal: 2,
                        left: '54%',
                        top: '57%',
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
    <Two/>
), document.getElementById('app'))