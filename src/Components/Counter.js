import React, {Component} from 'react';

class Counter extends Component{
    state = {
        number : 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(props) {

    }

    static getDerivedStateFromProps(nextProps, prevState) {

    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    getSnapshotBeforeUpdate(prevProps, prevState, snapshot){

    }

    componentDidUpdate(prevProps, prevState, snapshot){

    }

    componentWillUnmount() {
        
    }
}