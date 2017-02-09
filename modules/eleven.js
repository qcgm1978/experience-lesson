import '../app.js'

import './styles/eleven.scss'
import React from 'react'
import { render } from 'react-dom'
import CommonMixin2 from './base'

let App= React.createClass({
    mixins: [CommonMixin2],
    generateNodesFromJson(){
        $.getJSON('../data/11.json').done((data)=> {
            let eles = [], animateEles = []
            eles = this.getEles(data.scenes[0].SceneStaticNodes, false, true);
            animateEles = this.getEles(data.scenes[0].SceneAnimateNodes, false, true);
            this.setState({
                eles: eles,
                animateEles: [...Array(10)].map(()=> {
                    animateEles[0]
                    return animateEles
                })
            })
        });
    },
    getInitialState(){
        return {
            i: 0,
            frameId: 0,
            eles: [],
            animateEles: [],
            notScalable:true
        }
    },
    animate: function (frameId, isMouseEvt) {
        if (isMouseEvt) {
            this.state.i = 0;
        }
        this.state.frameId = requestAnimationFrame(()=> {
            let $ele = $('.animated').eq(this.state.i);
            if ($ele.length) {
                $ele.removeClass('bounce')
                setTimeout(()=> {
                    $ele.addClass('bounce')
                    this.setState({
                        i: ++this.state.i
                    })
                }, 10);
            } else {
                cancelAnimationFrame(frameId)
            }
        })
    },
    componentDidMount () {
        //console.log('You have already looked up %d route page.', Redux.getState())
        this.generateNodesFromJson()
        let that = this, num = -1
        $('#right').on('click', (evt)=> {
            num = this.setPageState.call(that, num);
        })
        $('#left').on('click', (i, n)=> {
            num = this.leftClickEvt(num, that);
        })
        $('#balloons div').one('click', function () {
            $(this)
                .clone()
                .addClass('big-balloon')
                .wrap('<div/>')
                .parent()
                .appendTo('#eleven')
                .addClass('div-fly fly' + $(this).index())
                .addClass('animated pulse')
            $(this).addClass('opacity')
            if ($('.opacity').length == 10) {
                that.animateCat();
                that.animateBalloon();
            }
        })
        $('#help-btn').click(()=> {
            $('#help-container').removeClass('none').addClass('bounceInDown')
        })
        $('.help').click((evt)=> {
            if (evt.pageX > 545 && evt.pageX < 564 && evt.pageY < 138 && evt.pageY > 118) {
                $('#help-container').removeClass('bounceInDown').addClass('bounceOutUp')
                setTimeout(()=> {
                    $('#help-container').removeClass('bounceOutUp').addClass('none')
                }, 1000)
            }
        })
    },
    componentDidUpdate(){

    },
    animateCat(){
        $('[src$="cat.png"]').animate({
            top: 214
        }, 1000, "linear", function () {
            $(this).attr('src', "../images/11/cat.gif")
        });
    },
    animateBalloon(){
        $('.div-fly,[src$="balloons.png"],[src$="mouse.gif"]')
            .wrapAll('<div>')
            .parent()
            .css({
                position: 'relative'
            })
            .animate({
                top: -400
            }, 1000, 'linear', function () {
            })
    },
    render() {
        let classVar = "animated", balloon = [],
            words = ['bus stop', 'phrase book', 'hand', 'pocket', 'slowly', 'smile', 'speak', 'greet', 'thirsty', 'understand'];
        for (let i = 0; i < 10; i++) {
            balloon.push(
                <div className='div' key={i}>
                    <span className='span'>{words[i]}</span>
                </div>
            )
        }
        return (
            <div id='eleven' className='container'>
                {this.state.eles.map(function (item, i) {
                    return item
                })}
                <div id='balloons'>
                    {balloon}
                </div>
                <div id='help-container' className='animated none'><img src='../images/11/help_detail.png'
                                                                        className='help'/></div>
                <div id='left'></div>

                {
                    <div id='right'></div>
                }
                <div id='help-btn'>Help</div>
            </div>
        )
    }
})

render((
    <App/>
), document.getElementById('app'))