import React, { Component } from 'react'
import './index.css';

export default class Dapp extends Component {
    render(){
        const { name, description, url, icon } = this.props.data;
        return (
            <a
                className={'dapp'}
                href={url}
            >
                <img 
                    src={icon} 
                    className={'dapp-logo'}
                    alt={`${name} logo`}
                />
                <div className='dapp-content'>
                    <p className={'dapp-name'} >{name}</p>
                    <p className={'dapp-desc'} >{description}</p>
                    <span className={'dapp-url'} >{url}</span>
                </div>
            </a>
            );
    }
}