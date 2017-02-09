import React from 'react'
import Store from './redux.js'
import PublicControl from './public-control.js'
import {isTeacher,getClassState,getPracticeState,sendData} from './api.js'
var obj = {
    //contextTypes: {
    //    router: React.PropTypes.object.isRequired
    //},
    isTeacher: isTeacher,
    isBeforeClass: getClassState,
    isPractice: getPracticeState,
    scale: 1,
    setPageState: function (num) {
        let $hiddenEle = this.sentences;
        if (num + 1 < this.sentences.length) {
            var $cur = $hiddenEle.eq(num);
            if ($cur.next().length == 0 && $cur.index() != 0) {
                $cur.prevAll().add($cur).addClass('none')
            }
            $hiddenEle.eq(num + 1)
                .removeClass('none bounceIn bounceOut')
                .addClass('bounceIn')
            if (num + 1 < this.sentences.length) {
                num++
            }
            if (num == 0 || ( $cur.next().length == 0 && $cur.index() != 0 && this.state.dataOrder < this.state.data.length)) {
                this.setState({
                    dataOrder: ++this.state.dataOrder,
                })
            }
        } else {
            clearInterval(this.loopPicsId)
            this.isFinished = true
            this.isPlaying = false;
        }
        return num
    },
    list: ['two', 'three', 'four', 'five', 'six', 'seven'],
    //setFullScreen() {
    //    $('.container').css('transform-origin', '50% 0')
    //    $(window).resize(()=> {
    //        let scaleX = $(window).width() / 1920, scaleY = $(window).height() / 1080
    //        $('.container').css('transform', 'scale(' + scaleX + ',' + scaleY + ')')
    //    }).resize()
    //},
    setWidthOrHeightFull() {
        $(window).resize(()=> {
            let width = $(window).width();
            let height = $(window).height()
            let scaleX = width / 1920, scaleY = $(window).height() / 1080
            let minX = 640 / 1920, minY = 360 / 1080
            if (scaleX < minX || scaleY < minY) {
                $('body').css({
                    overflow: 'scroll'
                })
                scaleX = minX
                scaleY = minY
            } else {
                $('body').css({
                    overflow: 'hidden'
                })
            }
            var scale = scaleX < scaleY ? scaleX : scaleY;
            var $container = $('.container');
            try {
                this.scale = scale
            } catch (e) {
                //var scale = scale
            }
            $container
                .css('transform', 'scale(' + scale + ')')

        }).resize()
        $('.container').on('transitionend', function () {
            let width = $(window).width();
            let height = $(window).height()
            let $containerScale = $('.container');
            let marginLeft = (width - $containerScale.width()) / 2,
                marginTop = (height - $containerScale.height()) / 2
            if (marginLeft > 0) {
                $containerScale
                    .css('margin-left', marginLeft)
                //.css('margin-top', marginTop)
            }
        });
    },
    componentDidMount(){
        if (!this.state.notScalable) {
            this.setWidthOrHeightFull();
        }
        $(document).keydown(function (e) {
            let href = ''
            if (e.which == 40 || e.which == 39) {
                href = location.href.replace(/\d(?=\/index)/, function replacer(match, p1, p2, p3, offset, string) {
                    let num = Number(match)
                    return num <= 4 ? ++num : num
                })
            } else if (e.which == 37 || e.which == 38) {
                href = location.href.replace(/\d(?=\/index)/, function replacer(match, p1, p2, p3, offset, string) {
                    let num = Number(match)
                    return num > 0 ? --num : num
                })
            }
            if (href != '') {
                location.href = href;
            }
        });
    },
    componentDidUpdate(){
        this.sentences = $('#animateContainer img');
    },
    getEles: function (data, isHidden, isStrict) {
        let div = []
        for (let i = 0; i < data.length; i++) {
            let item = data[i]
            if ($.isPlainObject(item)) {
                item = [item]
            }
            let eles = []
            $.each(item, function (i, n) {
                let left = String(n.nodeProperties.left),
                    bottom = String(n.nodeProperties.bottom),
                    top = String(n.nodeProperties.top),
                    animate = n.animate;
                let style = {
                    position: 'absolute', left: left + (left.endsWith('%') ? '' : 'px'),
                    top: top + (top.endsWith('%') ? '' : 'px'),
                    bottom: bottom + (bottom.endsWith('%') ? '' : 'px')
                };
                if (isStrict) {
                    style = $.extend(n.nodeProperties, style);
                }
                eles.push(
                    <img src={'.'+n.imageSrc} key={i}
                         className={(isHidden?'none':'')+' animated '+ (animate?animate:'')}
                         style={ style}/>
                )
            })
            div.push(eles)
        }
        return div
    },
    leftClickEvt: function (num, that) {
        let $cur = {};
        if (num > -1) {
            $cur = that.sentences
                .eq(num);
            $cur
                .prevAll()
                .add($cur)
                .removeClass('none bounceIn')
            $cur.addClass('bounceOut animated')
        } else {
            clearInterval(this.loopPicsId)
        }
        num == -1 ? null : num--
        if (!$.isEmptyObject($cur) && $cur.next().length === 0 && (num + 1 !== that.sentences.length - 1)) {
            this.setState({
                dataOrder: --this.state.dataOrder
            })
        }
        return num;
    },
    getPublicControl(toShowControl, arrows, data, order){
        return <PublicControl toShowControl={ toShowControl} arrows={ arrows} data={data} isTeacher={this.isTeacher}
                              order={order}/>
    },
    getCommonControl(data){
        return this.getPublicControl(true, [{
            ordinal: 1,
            left: '50%',
            bottom: '5%'
        }, {
            ordinal: 2,
            left: '57%',
            bottom: '5%',
            //down: true
        }], data)
    },
    bindMouseEvt($ele, that, mouseoverCallback, hasAnimation = true) {
        if($ele.is('body')){
            return;
        }
        $ele.mouseover(function (event) {
            mouseoverCallback.call(this)
            if (hasAnimation) {
                $(this).animateCss('bounce')
            }
        });
        $ele.css({
            "cursor": 'pointer'
        });
    },
    bindExplainPageEvt (selector, clickCallback, mouseoverCallback = ()=> {
    }, hasAnimation = true) {
        let that = this;
        var $ele = $(selector.ele || selector);
        $ele
            .on('click',selector.filter,selector.data, function (evt, derive = {isFromTeacher: false}) {
                var beforeClass = that.isBeforeClass();
                if (beforeClass || that.isTeacher || derive.isFromOpposite) {
                    clickCallback.call(this, evt)
                }
                if (!beforeClass && that.isTeacher) {
                    var tempobj = {};
                    tempobj.ele = $(this).getPath();
                    tempobj.event = "click";
                    sendData('data', JSON.stringify(tempobj));
                }
            })
        this.bindMouseEvt($ele, that, mouseoverCallback, hasAnimation)
    },
    bindPracticePageEvt (selector, clickCallback, mouseoverCallback = ()=> {
    }, hasAnimation = true) {
        let that = this;
        var $ele = $(selector.ele || selector);
        $ele
            .off()
            .click(selector.data, function (evt, derive = {isFromOpposite: false}) {
                var beforeClass = that.isBeforeClass();
                if (!that.isPractice() || !that.isTeacher || derive.isFromOpposite) {
                    clickCallback.call(this, evt)
                }
                if (that.isPractice() && !that.isTeacher) {
                    var tempobj = {};
                    tempobj.ele = $(this).getPath();
                    tempobj.event = "click";
                    sendData('data', JSON.stringify(tempobj));
                }
            })
        this.bindMouseEvt($ele, that, mouseoverCallback, hasAnimation)
    }
};
window.bindPracticePageEvt = obj.bindPracticePageEvt;
window.setWidthOrHeightFull = obj.setWidthOrHeightFull;
export default   obj;
