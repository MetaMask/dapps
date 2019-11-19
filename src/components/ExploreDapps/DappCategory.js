import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DappCategory.css';
import { trackEvent } from '../../util/analytics';

export default class DappCategory extends Component {
    track = () => {
        trackEvent('Click', { 
            'dapp-category' : this.props.data.name,
        });
    }

    render(){
        const { name, icon, color } = this.props.data;
        const url = `/${name.toLowerCase().replace(" ", "-")}`;
        
        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link
                className={'dapp-category'}
                to={url}
                onClick={this.track}
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