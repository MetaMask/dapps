import React, { Component } from 'react'
import logo from '../../images/logo.svg';
import closeIcon from '../../images/close-icon.svg';
import './index.css';

export default class TakeATour extends Component {
    render(){
        return (
            <div className={'take-a-tour-wrapper'}>
                <a className={'take-a-tour'}>
                    <img src={logo} className={'take-a-tour-logo'} />
                    <div className={'take-a-tour-content'}>
                        <h3>Take a tour</h3>
                        <p>Our new mobile app gives you the control to access the new decentralized web</p>
                    </div>
                </a>
                <a className={'take-a-tour-close'}>
                    <img src={closeIcon} />
                </a>
            </div>
            
        );
    }
}