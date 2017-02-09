import '../app.js'
import './styles/learning.scss'
import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'
import CommonMixin2 from './base'
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
                <img src={'.' + item.imageSrc} key={i}
                     id={isAnimate ? ('word' + i) : ''}
                     className={(isAnimate ? ' animated ' : '') + (animate ? animate : '')}
                     style={ style}/>
            )
        }
        return eles
    },
    generateNodesFromJson(){
        $.getJSON('../data/0.json').done((data) => {
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
        this.state.frameId = requestAnimationFrame(() => {
            let $ele = $('#words .animated').eq(this.state.i);
            if ($ele.length) {
                $ele.removeClass('none bounce')
                setTimeout(() => {
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
        this.generateNodesFromJson()
        this.bindExplainPageEvt('p', function () {
            $('p')
                .toggleClass('p-scale')
            $('.step').remove()
        }, () => {
        }, false);
        var selector = '[src$="alphabet.png"],[src$="the.png"]';
        $('body').on('click', selector, function () {
            $(selector).animateCss('shake')
        })
    },
    componentDidUpdate(){
        $('#words .animated').attr('id', function (i, n) {
            return 'word' + (i + 1)
        })
        this.animate(this.state.frameId);
        $('.animated').off().hover((i, n) => {
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
                <p id='p-0'>We are going to learn：</p>
                <p id='p-1'> A B C;</p>
                
                <p id='p-2'>The song;</p>
                <p id='p-3'>I see… pattern.</p>
                <img id='gif' src='../images/phonics/easy/gif/0.gif'/>
            </div>
        )
    }
})
// render((
//     <Zero/>
// ), document.getElementById('app'))
//render
let Common = React.createClass({
    getId(){
        return ReactDOM.findDOMNode(this).parentNode.getAttribute("id")
    },
    componentDidMount(){
        this.setState({
            id: this.getId()
        })
    },
    getInitialState(){
        return {
            id: ''
        }
    },
    getSpan(val){
        return <span>{val || this.state.id}</span>;
    },
    render(){
        return this.getSpan(this.props.name)
    }
});
var SimpleView = React.createClass({
    // mixins: [Common],
    render: function () {
        return (<Common/>);
    }
});
render((<SimpleView/>), document.getElementById('render-simple'));
//jsx: The simplest component need only include a render() method
var WelcomeBanner = React.createClass({
    // mixins: [Common],
    render: function () {
        return <Common/>;
    }
});
render(<WelcomeBanner />, document.getElementById('render-jsx'));
//without jsx
function func() {
    class Hello extends React.Component {
        render() {
            return React.createElement('span', null, `${this.props.id}`);
        }
    }
    let id = 'without-jsx';
    render(
        React.createElement(Hello, {id: id}, null),
        document.getElementById(id)
    );
}
func()
function componentsWithProp() {
    var WelcomeBanner = React.createClass({
        // mixins: [Common],
        render: function () {
            return <Common name={this.props.name}/>;
        }
    });
    let id = 'props';
    render(<WelcomeBanner name={id}/>, document.getElementById(id));
}
componentsWithProp()
//Components have state
var WelcomeBanner = React.createClass({
    // mixins: [Common],
    getInitialState: function () {
        return {times: 0};
    },
    handleClick: function () {
        this.setState({times: this.state.times + 1});
    },
    render: function () {
        return (
            <section>
                <div> <Common name={this.props.name}/></div>
                <div>Times clicked: { this.state.times }</div>
                <button onClick={ this.handleClick }>Add One</button>
            </section>
        );
    }
});
let id = 'state';
render(<WelcomeBanner name={id}/>, document.getElementById(id));
