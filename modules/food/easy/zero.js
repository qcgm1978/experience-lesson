import '../../../app.js'

import '../../styles/food/easy/zero.scss'
import React from 'react'
import { render } from 'react-dom'

import CommonMixin2 from '../../base'
let Zero = React.createClass({
    mixins: [CommonMixin2],
    getEles1: function (data, isAnimate) {
        let eles = [], style = {}
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            var left = item.nodeProperties.left;
            var top = item.nodeProperties.top;
            var animate = data[i].animate;
            if (!isAnimate) {
                style = {
                    position: 'absolute', left: left + (left.endsWith('%') ? '' : 'px'),
                    top: top + (top.endsWith('%') ? '' : 'px')
                };
            }
            eles.push(
                <img src={'.'+item.imageSrc} key={i}
                     id={isAnimate?('word'+i):''}
                     className={(isAnimate?' animated ':'')+ (animate?animate:'')}
                     style={ style}/>
            )
        }
        return eles
    },
    generateNodesFromJson(){
        $.getJSON('../data/0.json').done((data)=> {
            let eles = [], animateEles = []
            eles = this.getEles1(data.scenes[0].SceneStaticNodes);
            animateEles = this.getEles1(data.scenes[0].SceneAnimateNodes, true);
            this.setState({
                eles: eles,
                animateEles: animateEles
            })
        });
    },
    getInitialState(){
        return {
            i: 0,
            frameId: 0,
            eles: [],
            animateEles: []
        }
    },
    animate: function (frameId, isMouseEvt) {
        if (isMouseEvt) {
            this.state.i = 0;
        }
        this.state.frameId = requestAnimationFrame(()=> {
            let $ele = $('#words .animated').eq(this.state.i);
            if ($ele.length) {
                $ele.removeClass('none bounce')
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
        //this.generateNodesFromJson()
        this.bindExplainPageEvt('p', function () {
            $(this)
                .siblings('p')
                .removeClass('p-click')
                .end()
                .addClass('p-click')
            $('.step').remove()
        }, function () {
            $(this)
                .animateCss('pulse')
        });
    },
    componentDidUpdate(){
        $('#words .animated').attr('id', function (i, n) {
            return 'word' + (i + 1)
        })
        this.animate(this.state.frameId);
        $('.animated').off().hover((i, n)=> {
            this.animate(this.state.frameId, true);
        })
    },
    render() {
        return ( <div id='zero' className='container'>
                {this.state.eles.map(function (item, i) {
                    return item
                })}


                <div id='words'>
                    {
                        this.state.animateEles.map(function (item, i) {
                            return item
                        })
                    }
                </div>
                {this.getPublicControl(false, {
                    //ordinal: 3,
                    left: '73%',
                    bottom: '12%'
                }, [
                    'introduce yourself to the students',
                    'ask the student\'s name and greet the student',
                    'Say “We are going to help the cat and the dog to run away from the shark. And then they will get the ball and the apple.”'
                ])}

                <img id='gif' src='../images/food/easy/gif/0.gif'/>
            </div>
        )
    }
})
render((
    <Zero/>
), document.getElementById('app'))