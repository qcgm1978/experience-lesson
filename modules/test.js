require('./styles/test.scss')
import React from 'react'
import Redux from './redux'
//debugger;
export default React.createClass({
    componentDidMount(){
        var $eles = $('.img-container').add('img');
        $('select').change(function () {
            var val = $(this).val();
            $eles
                .addClass(val)
                .one('transitionend animationend', function () {
                    $(this).removeClass(val)
                })
        })
        $('button').hover(function () {
            $eles.addClass($('select').val())
        }, function () {
            $eles.removeClass($('select').val())
        })
    },
    render() {
        return (
            <div>
                <div className='img-container'>
                    <img src='./images/test/tile_user.png'/>
                    <img src='./images/test/tile_phone.png'/>
                    <div className="object3d" id="obj6">
                        <img className="face3d" src="./images/test/tile_browser.png" id="im2E"/>
                            <img className="face3d" src="./images/test/tile_phone.png" id="im2F"/>
                                <img className="face3d" src="./images/test/tile_bberry.png" id="im30"/>
                                    <img className="face3d" src="./images/test/tile_user.png" id="im31"/>
                                        <img className="face3d" src="./images/test/tile_console.png" id="im32"/>
                                            <img className="face3d" src="./images/test/tile_world.png" id="im33"/>
                                            </div>
                </div>
                <path fill="#fff">
                    <animate attributeName="d" dur="2s" repeatCount="indefinite"
                             values="m 0,0  c  1,15 -13,45  -45,45  -32,0 -44,-28 -44,-44  z;
        m 0,0  c -4,15 -66,106 -98,106 -32,0   3,-89   9,-105 z" />
                </path>
                <select>
                    <option>Please choose the animation effect</option>
                    <option value='transition1'>transition1</option>
                    <option value='animation1'>animation1</option>
                    <optgroup label='2d geometric transform'>
                        <option value='rotate'>rotate</option>
                        <option value='scale'>scale</option>
                        <option value='skew'>skew</option>

                    </optgroup>
                    <optgroup label='3d geometric transforms'>
                        <option value='d3'>translateZ rotateY</option>
                        <option value='d3-cube'>3d cube</option>
                    </optgroup>
                </select>
                <button>Hover to trigger current animation</button>
            </div>
        )
    }
})

