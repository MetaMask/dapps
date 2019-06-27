import React, { Component } from 'react'
import './FeaturedDapp.css';

export default class FeaturedDapp extends Component {
    render(){
        const { shortName, url, icon } = this.props.data;
        return (
            <a
                className={'featured-dapp'}
                href={url}
            >
                <span className={'featured-dapp-box'}>
                    <img 
                        src={icon} 
                        className={'featured-dapp-logo'}
                        alt={`${shortName} logo`}
                    />
                </span>
                <p className={'featured-dapp-name'} >{shortName}</p>

            </a>
            );
    }
}