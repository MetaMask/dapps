import React, { Component } from 'react';
import Navbar from '../components/Navbar/';
import allDapps from '../data/all-dapps';

export default class Category extends Component {
    
    state = {
        category: null
    };
    
    componentDidMount(){
        const category = allDapps.find((cat) => (
            cat.name.toLowerCase().replace(" ", "-") === this.props.match.params.category
        ));
        if(category){
            this.setState({category});
        }
        
    }


    render(){
        const { name } = this.state.category || {};
        return (
            <div>
                <Navbar title={name} />
                
            </div>
        );
    }
}