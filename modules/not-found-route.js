require('./styles/two.scss')
import React from 'react'
//import Redux from './redux'
import CommonMixin from './common'

export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){
    },
    componentDidMount () {

    },
    componentDidUpdate(){
        this.num = this.setPageState(this.num);
        this.setArrowsUi(this.num);

    },
    componentWillUnmount(){
        //Redux.dispatch({
        //    stepShow:$('.step-show .check-mark').is(':visible'),
        //    follwMe:$('.follow-me .check-mark').is(':visible'),
        //    type:'public-control'
        //
        //}o)

    },
    generateNodesFromJson(){
        this.getJson('modules/data/2.json');
    },
    render() {
        return (
            <div className=''>
                Not Found Page

            </div>
        )
    }
})