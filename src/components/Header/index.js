import React, { Component } from 'react'
import BgImage from '../../images/bg-img.svg';
import './index.css';

export default class Header extends Component {
    render(){
        return (
            <div className={'header'}>
                <img src={BgImage}  className={'header bg-img'} alt={'background'} />
            </div>
        );
    }
}