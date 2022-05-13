import React, { Component } from 'react'
import closeIcon from '../../images/close-icon.svg';
import{trackEvent, ANALYTICS_EVENT_OPTS} from '../../util/analytics';
import './index.css';

export default class Dapp extends Component {

    trackEventOpenListedDapp = (e) => {
        e.preventDefault();
        trackEvent(ANALYTICS_EVENT_OPTS.OPEN_LISTED_DAPP, { 
            'dapp_name' : this.props.data.name,
            'dapp_url': this.props.data.url,
            'position': this.props.position + 1
        });
        window.location.href = this.props.data.url;
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
            <div
                className={'dapp'}
            >
                <a href={url} className='dapp-container' onClick={this.trackEventOpenListedDapp}>
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
                </a>
                { closable && (
                        <button 
                            className={'dapp-close'}
                            onClick={this.onClose}
                        >
                            <img src={closeIcon} alt={'close button'} />
                        </button>
                    )
                }
            </div>
            );
    }
}