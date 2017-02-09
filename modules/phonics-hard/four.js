import '../../app.js'
import '../styles/phonics-hard/four.scss'
import React from 'react'
import { render } from 'react-dom'

import CommonMixin from '../common'
let Four = React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
        return {
            animal: '',
            position: '',
            style:{}
        }
    },
    componentDidMount () {
        let that = this;
        this.bindPracticePageEvt('.container>img', function func(evt) {
            var style = {
                left: $(this).offset().left / that.scale,
                top: $(this).offset().top / that.scale,
            };
            that.setState({
                style:style,
                animal:$(this).attr('id'),
                position:$(this).data('position')
            })

        })
    },
    componentDidUpdate(){
    },
    render() {
        return (
            <div id='hard-four' className='container'>
                {this.getElementsNodes(true)}
                <img data-position='ball' id='dog' src="../images/phonics/hard/4/dog.png"/>
                <img data-position='bed' id='cat' src="../images/phonics/hard/4/cat.png"/>
                <img data-position='apple' id='ant' src="../images/phonics/hard/4/ant.png"/>

                <div id='dialog' style={this.state.style}>
                    <p>{
                        (()=>{
                        return `Where is the ${this.state.animal} ?
                        The ${this.state.animal} is on the ${this.state.position} .`
                    })()
                    }</p>
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