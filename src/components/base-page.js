/**
 * Created by lizhaoguang on 15/10/21.
 */
const React = require('react');

module.exports = class BasePage extends React.Component {

    //getClassName() {
    //
    //}
    //
    constructor(props) {
        super(props);
        console.log('constructor:' + this.getClassName());
    }
    //
    componentWillMount() {
        console.log('componentWillMount:' + this.getClassName());
    }
    //
    componentDidMount() {
        console.log('componentDidMount:' + this.getClassName());
    }
    //
    //componentWillReceiveProps() {
    //    console.log('componentWillReceiveProps:' + this.getClassName());
    //}
    //
    //shouldComponentUpdate() {
    //    console.log('shouldComponentUpdate:' + this.getClassName());
    //}
    //
    //componentWillUpdate() {
    //    console.log('componentWillUpdate:' + this.getClassName());
    //}
    //
    //componentDidUpdate() {
    //    console.log('componentDidUpdate:' + this.getClassName());
    //}
    //
    componentWillUnmount() {
        console.log('componentWillUnmount:' + this.getClassName());
    }
}