import React, { Component } from 'react'
import closeIcon from '../../images/close-icon.svg';
import { trackEvent } from '../../util/analytics';
import './index.css';

export default class Dapp extends Component {

    track = () => {
        trackEvent('Click', { 
            'dapp' : this.props.data.name,
            'url': this.props.data.url,
            'position': this.props.position + 1
        });
    }

    renderDescription = (description) => {
        return description && (<p className={'dapp-desc'} >{description}</p>)
    }

    onClose = (e) => {
        e.preventDefault();
        this.props.onClose(this.props.data.url);
    }
    

    render(){
        const { size, closable, data: { name, description, url, icon }} = this.props;
        return (
            <a
                className={'dapp'}
                href={url}
                onClick={this.track}
            >
                <img 
                    src={icon} 
                    className={`dapp-logo ${size === 'small' ? 'dapp-logo-small':''}`}
                    alt={`${name} logo`}
                />
                <div className='dapp-content'>
                    <p className={`dapp-name ${size === 'small' ? 'dapp-name-small':''}`} >{name}</p>
                    { description ? this.renderDescription(description) : null}
                    <span className={'dapp-url'} >{url}</span>
                </div>
                { closable && (
                        <button 
                            className={'dapp-close'}
                            onClick={this.onClose}
                        >
                            <img src={closeIcon} alt={'close button'} />
                        </button>
                    )
                }
            </a>
            );
    }
}