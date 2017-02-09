import './styles/public-control.scss'
import React from 'react'
import Utilities from './utilities'
import Store from './redux.js'
export default React.createClass({
    order: 0,
    mixins: [Utilities],
    getInitialState(){
        return {
            stepShow: false,
            followMe: false,
        }
    },
    flyArrow (i = 0, left = this.randomIntFromInterval(83, 600) - 83,
              top = 'initial', bottom = 0, toDown = false) {
        var otherClass = 'step ' + (toDown ? 'down' : '')
        $('<div>')
            .animateCss('bounceInRight', false, otherClass, function () {
                $(this).addClass('loop pulse animated')
            })
            //.addClass(otherClass)
            .attr('ordinal', i)
            .css({
                left: left,
                top: top,
                bottom: bottom,
                'background-image': "url('../images/public-control/1920/" +
                "hand-down.png')"
            })
            .appendTo('.public-container')
    },
    generateSteps(arrows) {
        if (!this.state.followMe) {
            $('.step').remove()
        } else {
            if ($.isPlainObject(arrows) && !$.isEmptyObject(this.props.arrows)) {
                this.flyArrow(arrows.ordinal, arrows.left, arrows.top, arrows.bottom, arrows.down);
            } else if ($.isArray(arrows)) {
                if (this.props.order) {
                    this.flyArrow(arrows[this.order].ordinal, arrows[this.order].left, arrows[this.order].top, arrows.bottom, arrows.down);
                } else {
                    $.each(arrows, (i, n)=> {
                        this.flyArrow(n.ordinal, n.left, n.top, n.bottom, n.down);
                    })
                }
            }
            else {
                //for (let i = 1; i < 6; i++) {
                //    this.flyArrow(i);
                //}
            }
        }
    },
    componentDidMount () {
        $(".pop-up").draggable({
            stop: function( event, ui ) {
                //var tempobj = {};
                //tempobj.ele = $(this).getPath();
                //tempobj.event = event.type;
                //tempobj.position=ui.position
                //tempobj.selector=".pop-up"
                //sendData('data', JSON.stringify(tempobj));
            }

        })
        let that = this;
        $('.step-show,.close')
            .click(function (evt) {
                that.setState({
                    stepShow: !that.state.stepShow
                })
            })
        $('.follow-me')
            .click({ini: true}, function (evt) {
                that.setState({
                    followMe: !that.state.followMe
                })
                if (that.state.followMe) {
                    that.generateSteps.call(that, that.props.arrows);
                    //evt.data.ini = false
                } else {
                    $('.step').remove()
                }
            })
        $('.prev,.next,.close')
            .mousedown(function () {
                $(this).addClass('click')
            })
            .mouseup(function () {
                $(this).removeClass('click')
            })
        $('dd').click(function () {
            $(this)
                .parents('dl')
                .find('dd')
                .removeClass('txt-click')
            $(this).addClass('txt-click')
        })
        if (this.state.followMe) {
            this.generateSteps.call(that, that.props.arrows);
        }
        Store.subscribe(function () {
                var order = (++this.order);
                if (order < this.props.arrows.length) {
                    this.flyArrow(this.props.arrows[order].ordinal, this.props.arrows[order].left, this.props.arrows[order].top, this.props.arrows[order].bottom, this.props.arrows[order].down);
                }
            }.bind(this)
        )
    },
    componentDidUpdate(){
    },
    generateNodesFromJson(){
        this.getJson('modules/data/10.json');
    },
    render() {
        let containerClass = this.props.isTeacher ? 'public-container' : ('public-container none');
        var stepVisible = (this.state.stepShow ? '' : 'none');
        let stepClass = 'check-mark ' + stepVisible,
            followClass = 'check-mark ' + (this.state.followMe ? '' : 'none'),
            popupClass = 'pop-up ' + stepVisible,
            arr = this.props.data;
        return (
            <div className={containerClass}>
                <div id='public-control' className='noselect'>
                    <div className='indicate'>
                        <div className='step-show'>
                            <div className={stepClass}></div>
                        </div>
                        <div className='follow-me'>
                            <div className={followClass}></div>

                        </div>
                    </div>
                    <div className={popupClass}>
                        <div className='header'>STEP SHOW
                            <div className='close'></div>
                        </div>
                        <dl>
                            {
                                arr.map((item, i)=> {
                                    return (
                                        <div key={i}>
                                            <dt>STEP {i + 1}</dt>
                                            <dd>{item[0].toUpperCase() + item.substr(1)+(item.endsWith('.')?'':'.') }</dd>
                                        </div>
                                    )
                                })

                            }
                        </dl>
                    </div>
                    {
                        (()=> {
                            if (this.props.toShowControl) {
                                return <div className='control'>
                                    <div className='prev' id='left'></div>
                                    <div className='play'>
                                        <img className='center' src='../images/public-control/1920/control/play.png'/>
                                    </div>
                                    <div className='next' id='right'></div>
                                </div>
                            }
                        })()
                    }
                </div>
            </div>

        )
    }
})