import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import backIcon from '../../images/back-icon.svg';

import './index.css';

export default class Navbar extends Component {
    render(){
        const { title } = this.props;
        return (
            <div className={'navbar'}>
                <Link
                    to={'/'}
                    className={'navbar-back'}
                >
                    <img src={backIcon}  alt={'go back'} />
                </Link>
                <h1>{title}</h1>
            </div>
        );
    }
}
