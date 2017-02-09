import '../../app.js'
import '../styles/phonics-hard/two.scss'
import React from 'react'
import { render } from 'react-dom'

import CommonMixin from '../common'
let Two = React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
        return {
            ini: true,
            dataOrder: 0,
            imgs: [
                'bg',
                'bg',
                'bg-ant',
                'bg',
                'bg-ball',
                'bg',
                'bg-c'
            ],
            data: [
                [
                    ' Let’s read and act.',
                    'Click next and then guide the student to see the animation.'
                ],
                [
                    'Point at Aa and say “Hi, letter Aa.” Can you say “Hi” to letter Aa?',
                    'Act with finger and say “Make letter A with me.”',
                    'Trace A and say “One, two, three.”',
                    'Guide the student to trace.',
                    'Say “Good job! Let’s help the cat move to the next step. (Move the cat to the next step.)'
                ],
                [
                    'Ask “Can you point at letter Aa?”',
                    'Read and sing “A is for apple, a a apple.”',
                    'Ask the student to say the word “apple” .',
                    'Guide the student to read “I see an apple.”',
                    'Say “Very good! Let’s help the cat move to the next step. (Move the cat to the next step.)'
                ],
                [
                    'Point at Bb and say “Hi, letter Bb.” Can you say “Hi” to letter Bb?',
                    'Act with finger and say “Make letter B with me.”',
                    'Trace B and say “One, two, three.”',
                    'Guide the student to trace.',
                    'Say “Wonderful! Let’s help the cat move to the next step. (Move the cat to the next step.)'
                ],
                [
                    'Ask “Can you point at letter Bb?”',
                    'Read and sing “B is for ball, b b ball.”',
                    'Ask the student to say the word “ball” .',
                    'Guide the student to read “I see a ball.”',
                    'Say “Perfect! Let’s help the cat move to the next step. (Move the cat to the next step.)'
                ],
                [
                    'Point at Cc and say “Hi, letter Cc.” Can you say “Hi” to letter Cc?',
                    'Act with finger and say “Make letter C with me.”',
                    'Trace C and say “One, two, three.”',
                    'Guide the student to trace.',
                    'Say “Very good! Let’s help the cat move to the next step. (Move the cat to the next step.)'
                ],
                [
                    'Ask “Can you point at letter Cc?”',
                    'Read and sing “C is for cat, c c cat.”',
                    'Ask the student to say the word “cat”',
                    'Guide the student to read “I see a cat.”',
                    'Say “Excellent! Let’s help the cat move to the next step. (Move the cat to the next step.)'
                ]
            ]
        }
    },
    componentDidMount () {
    },
    componentDidUpdate(){
        if (this.state.ini) {
            this.num = -1;
            this.setArrowsUi(this.num);
            this.state.ini = false;
        }
    },
    generateNodesFromJson(){
        this.getJson('../data/hard-2.json');
    },
    render() {
        let obj={'backgroundImage':'url(../images/phonics/hard/2/'+this.state.imgs[this.state.dataOrder]+'.png)'};
        return (
            <div id='two' className='container' style={obj}>
                {this.getElementsNodes()}
                {this.getCommonControl(this.state.data[this.state.dataOrder])}

            </div>
        )
    }
})
render((
    <Two/>
), document.getElementById('app'))