require('./styles/ten.scss')
import React from 'react'
import CommonMixin from './common'

export default React.createClass({
    mixins: [CommonMixin],
    getInitialState(){

    },
    componentDidMount () {

    },
    componentDidUpdate(){
    },
    generateNodesFromJson(){
        this.getJson('modules/data/10.json');

    },
    generateNodes (classVar) {

    },
    render() {
        return (
            <div id='ten' className='container'>


                {this.getElementsNodes()}
            </div>
        )
    }
})