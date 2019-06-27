import React, { Component } from 'react'
import './index.css';

export default class Autocomplete extends Component {
    render(){
        return (
            <div class={'autocomplete'}>
                <input type={'text'} 
                    placeholder={'Search or Type URL'} 
                    className={'autocomplete-input'}
                />
            </div>
        );
    }
}