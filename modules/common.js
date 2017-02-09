import React from 'react'
import Utilities from './utilities'

import CommonMixin2 from './base'

export default   {
    mixins: [CommonMixin2, Utilities],
    num: -1,
    triggerCotrol: function () {
        this.loopPicsId = setInterval(()=> {
            this.num = this.setPageState(this.num);
            this.setArrowsUi(this.num);
        }, 1000)
    },
    playPics () {
        this.triggerCotrol();
    },
    componentDidMount () {
        let classlet = "none animated";
        if (this.generateNodesFromJson) {
            this.generateNodesFromJson(classlet)
        }
        let that = this

        function setNextClick() {
            if (!$._data($('.play')[0], 'events').click[0].data.isPlay) {
                $('.play').find('img').attr('src', '../images/public-control/1920/control/play.png').removeClass('pause')
                clearInterval(this.loopPicsId)
                $._data($('.play')[0], 'events').click[0].data.isPlay = true
            } else {
                this.num = this.setPageState(this.num);
                this.setArrowsUi.call(that, this.num);
            }
        }

        this.bindExplainPageEvt('#right', function () {
            setNextClick.call(that);
            $('.step[ordinal=2]').remove()
        },()=>{},false);
        this.bindExplainPageEvt('#left', function () {
            setPrevClick.call(that);
        },()=>{},false);
        this.bindExplainPageEvt({
            ele: '.play',
            data: {isPlay: true},
            ordinal:1
        }, function (evt) {
            setPlayClick.call(that, evt);
            $('.step[ordinal=1]').remove()

        },()=>{},false);
        function setPrevClick() {
            if (!$._data($('.play')[0], 'events').click[0].data.isPlay) {
                $('.play').find('img').attr('src', '../images/public-control/1920/control/play.png').removeClass('pause')
                clearInterval(this.loopPicsId)
                $._data($('.play')[0], 'events').click[0].data.isPlay = true
            } else {
                this.num = this.leftClickEvt(this.num, that);
                this.setArrowsUi.call(that, this.num);
            }
        }

        function setPlayClick(evt) {
            if (evt.data.isPlay || this.isFinished) {
                if (this.num + 1 == this.sentences.length) {
                    let $cur = this.sentences.eq(this.num)
                    $cur.prevAll().add($cur).addClass('none')
                    this.num = -1
                }
                $(evt.currentTarget)
                    .find('img')
                    .addClass('pause')
                    .attr('src', '../images/public-control/1920/control/pause.png')
                this.playPics()
                this.isFinished = false;
                evt.data.isPlay = false
            } else {
                $(evt.currentTarget).find('img').attr('src', '../images/public-control/1920/control/play.png').removeClass('pause')
                clearInterval(this.loopPicsId)
                evt.data.isPlay = true
                this.isPlaying = false;
            }
        }
    },
    sentences: [],
    getInitialState(){
        return {
            eles: [],
            animateEles: []
        }
    },
    setArrowsUi: function (i) {
        if (i > 0) {
            $('#left').css('opacity', 1)
        } else {
            $('#left').css('opacity', 0.5)
        }
        if (i < this.sentences.length - 1) {
            $('#right').css('opacity', 1)
        } else {
            $('#right').css('opacity', 0.5)
        }
        if (i == this.sentences.length - 1) {
            $('.play img').attr('src', '../images/public-control/1920/control/play.png').removeClass('pause')
        }
    },
    componentDidUpdate(){
    },
    getJson: function (url) {
        $.getJSON(url, (data)=> {
            let eles = [], eles1 = [];
            eles = this.getEles(data.scenes[0].SceneStaticNodes, false, data.strict);
            eles1 = this.getEles(data.scenes[0].SceneAnimateNodes, true, data.strict);
            this.setState({
                eles: eles,
                animateEles: eles1
            })
        })
    },
    getElementsNodes(){
        let contents = <div>
            {this.state.eles.map(function (item, i) {
                return item
            })}
            <div id='animateContainer'>
                {
                    this.state.animateEles.map(function (item, i) {
                        return (
                            <div key={i}>
                                {
                                    item.map(function (img, i) {
                                        return img
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

        </div>
        return contents
    },
};
