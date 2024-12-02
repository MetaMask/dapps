import React from 'react'
import closeIcon from '../../images/close-icon.svg';
import { trackEvent, ANALYTICS_EVENT_OPTS } from '../../util/analytics';
import './index.css';

const Dapp = (props) => {
    const { size, closable, data: { name, description, url, icon } } = props;

    const trackEventOpenListedDapp = (e) => {
        e.preventDefault();
        trackEvent(ANALYTICS_EVENT_OPTS.OPEN_LISTED_DAPP, {
            'dapp_name': props.data.name,
            'dapp_url': props.data.url,
            'position': props.position + 1
        });
        window.location.href = props.data.url;
    }

    const renderDescription = (description) => {
        return description && (<p className={'dapp-desc'} >{description}</p>)
    }

    const onClose = (e) => {
        e.preventDefault();
        props.onClose(props.data.url);
    }

    return (
        <div
            className={'dapp'}
        >
            <a href={url} className='dapp-container' onClick={trackEventOpenListedDapp}>
                <img
                    src={icon}
                    className={`dapp-logo ${size === 'small' ? 'dapp-logo-small' : ''}`}
                    alt={`${name} logo`}
                />
                <div className='dapp-content'>
                    <p className={`dapp-name ${size === 'small' ? 'dapp-name-small' : ''}`} >{name}</p>
                    {description ? renderDescription(description) : null}
                    <span className={'dapp-url'} >{url}</span>
                </div>
            </a>
            {closable && (
                <button
                    className={'dapp-close'}
                    onClick={onClose}
                >
                    <img src={closeIcon} alt={'close button'} />
                </button>
            )
            }
        </div>
    );
}

export default Dapp;