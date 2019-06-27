import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DappCategory.css';

export default class DappCategory extends Component {
    render(){
        const { name, icon, color } = this.props.data;
        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <div
                className={'dapp-category'}
            >
                <FontAwesomeIcon
                    className={'dapp-category-icon'}    
                    icon={icon}
                    color={color}
                    size={32}
                />
                <span className={'dapp-category-name'} >{name}</span>
            </div>
        );
    }
}