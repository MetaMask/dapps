import React, { Component } from 'react'
import './index.css';

export default class Favorites extends Component {
    render(){
        return (
            <div className={'favorites'}>
                <p>You have no favorite Dapps yet</p>
            </div>
        );
    }
}