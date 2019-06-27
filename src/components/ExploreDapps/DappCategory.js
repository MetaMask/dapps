import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DappCategory.css';

export default class DappCategory extends Component {
    render(){
        const { name, icon, color } = this.props.data;
        const url = `categories/${name.toLowerCase().replace(" ", "-")}`;
        
        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link
                className={'dapp-category'}
                to={url}
            >
                <FontAwesomeIcon
                    className={'dapp-category-icon'}    
                    icon={icon}
                    color={color}
                />
                <span className={'dapp-category-name'} >{name}</span>
            </Link>
        );
    }
}