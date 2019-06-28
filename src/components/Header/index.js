import React, { Component } from 'react'
import BgImage from '../../images/bg-img.svg';
import LogoWordmark from '../../images/logo-wordmark.svg';
import './index.css';

export default class Header extends Component {
    render(){
        return (
            <div className={'header'}>
                <img src={LogoWordmark}  className={'header logo-img'} alt={'background'} />
                <img src={BgImage}  className={'header bg-img'} alt={'background'} />
            </div>
        );
    }
}