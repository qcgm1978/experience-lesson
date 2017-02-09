require('./styles/popup.scss')
import React from 'react'
import Store from './redux.js'
export default React.createClass({
    //mixins: [CommonMixin],
    getInitialState(){
        return {
            popup: 'none',
            faceRight: this.props.face,
            faceWrong: this.props.face,
            options: this.props.options,
            chosen: '',
            toShow: 'none',
            color: 'right-txt',
            toShowNum: ''
        }
    },
    componentWillReceiveProps(){
        this.setState({
            faceRight: this.props.face,
            faceWrong: this.props.face,
            options: this.props.options,
            popup: 'none',
            toShowNum: ''
        })
    },
    componentDidMount () {
        let that=this;

        function questionClick() {
            that.setState({
                popup: 'd-i-b',
                options: '',
                faceRight: 'none',
                faceWrong: 'none',
                toShow: 'none',
                toShowNum: ''
            })
        }
        this.props.method('#options div', optionsClick,()=>{},false)
        this.props.method('#question', questionClick,()=>{},false)

        function optionsClick(evt) {
            let str = '', strWrong = '', color = ''
            if ($(evt.target).text().indexOf(that.props.word) != -1) {
                str = ''
                strWrong = 'none'
                color = 'right-txt'
            } else {
                str = 'none'
                strWrong = ''
                color = 'wrong-txt'
            }
            that.setState({
                options: 'none',
                faceRight: str,
                faceWrong: strWrong,
                chosen: $.trim($(evt.target).text().split('.')[1]),
                toShow: '',
                toShowNum: 'none',
                color: color
            })
            //Store.dispatch({type: 'INCREMENT'})
            setTimeout(()=> {
                that.setState({
                    faceRight: 'none',
                    faceWrong: 'none'
                })
            }, 2000);
        }

    },
    componentDidUpdate(){
    },
    generateNodesFromJson(){
    },
    render() {
        let fillClass = this.state.color + ' fill ' + this.state.toShow,
            popupClass = this.state.popup + ' ' + this.props.popup;
        return (
            <div className={this.props.className} id="popup-container">
                <div id='popup' className={popupClass}>
                    <div id='options' className={this.state.options}>
                        <div>A. an apple</div>
                        <div>B. a cat</div>
                        <div>C. a ball</div>
                    </div>
                    <img id='right-face' className={this.state.faceRight} src="../images/phonics/icons/right.png"
                        />
                    <img className={this.state.faceWrong} src="../images/phonics/icons/wrong.png"/>
                    <span className={fillClass}>{this.state.chosen}</span>
                </div>

                <div className={this.props.popup} id='question-container'>
                    <img id='question' src="../images/phonics/easy/8/sentence.png"/>
                    <img className={this.state.toShowNum} id='num-icon' src={'../images/public-control/judgement/icons/' +
                     this.props.num +
                      '.png'}/>
                </div>


            </div>

        )
    }
})