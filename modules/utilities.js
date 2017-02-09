import React from 'react'
let obj = {
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    setTxtClick (selector) {
        $(selector).click(function () {
            //$(this).animateCss('pulse')
            $(this).addClass('txt-click')
        })
    },
    extendJquery(){
        $.fn.extend({
            animateCss: function (animationName='bounce', isHidden=false, otherClass = '', callback = ()=> {
            }) {
                if ($.isPlainObject(animationName)) {
                    isHidden = animationName.hidden;
                    otherClass = animationName.otherClass;
                    callback = animationName.callback;
                    animationName = animationName.animationName;
                }
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                if (isHidden) {
                    $(this).removeClass('none')
                }
                $(this).addClass(otherClass + ' animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                    callback.call(this)
                });
                return this
            }
        });
        $.fn.clickToggle = function (func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function (evt) {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this, evt)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
        jQuery.fn.extend({
            getPath: function () {
                var pathes = [];
                this.each(function (index, element) {
                    var path, $node = jQuery(element);
                    while ($node.length) {
                        var realNode = $node.get(0), name = realNode.localName;
                        if (!name) {
                            break;
                        }
                        name = name.toLowerCase();
                        var parent = $node.parent();
                        var sameTagSiblings = parent.children(name);
                        if (sameTagSiblings.length > 1) {
                            let allSiblings = parent.children();
                            var index = allSiblings.index(realNode) + 1;
                            if (index > 0) {
                                name += ':nth-child(' + index + ')';
                            }
                        }
                        path = name + (path ? ' > ' + path : '');
                        $node = parent;
                    }
                    pathes.push(path);
                });
                return pathes.join(',');
            }
        });
    },
};
obj.extendJquery();
export default obj;