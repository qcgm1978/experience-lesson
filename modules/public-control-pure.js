var obj = {
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    setUI(){
        let randomSteps = (evt)=> {
            if (evt.data.isClicked) {
                $('.step').remove()
            } else {
                for (let i = 0; i < 5; i++) {
                    $('<div>')
                        .addClass('step animated bounceInRight')
                        .css({
                            left: this.randomIntFromInterval(83, 600) - 83,
                            top: this.randomIntFromInterval(61, 500) - 61,
                            'background-image': "url('./images/public-control/follow-me/step-" +
                            (i + 1) +
                            ".png')"
                        })
                        .appendTo('.container')
                }
            }
            evt.data.isClicked = !evt.data.isClicked;
        }
        $('.step-show')
            .click(function (evt) {
                $(this)
                    .find('.check-mark')
                    .add('.pop-up')
                    .toggle()
            })
        $('.follow-me')
            .click({isClicked: false}, function (evt) {
                $(this).find('.check-mark').toggle()
                randomSteps(evt);
            })
        $('.close')
            .click(function () {
                $('.pop-up').hide()
            })
        $('.prev,.next,.close')
            .mousedown(function () {
                $(this).addClass('click')
            })
            .mouseup(function () {
                $(this).removeClass('click')
            })
    }
}
obj.setUI();