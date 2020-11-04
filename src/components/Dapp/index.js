import React from 'react'
import closeIcon from '../../images/close-icon.svg';
import { trackEvent, ANALYTICS_EVENT_OPTS } from '../../util/analytics';
import './index.css';

export default function Dapp(props) {
    const track = (e) => {
        e.preventDefault();
        trackEvent(ANALYTICS_EVENT_OPTS.CLICKS_DAPP, {
            'Dapp': props.data.name,
            'Url': props.data.url,
            'Position': props.position + 1
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

    const { size, closable, data: { name, description, url, icon } } = props;

    return (
        <a
            className={'dapp'}
            href={url}
            onClick={track}
        >
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
            { closable && (
                <button
                    className={'dapp-close'}
                    onClick={onClose}
                >
                    <img src={closeIcon} alt={'close button'} />
                </button>
            )
            }
        </a>
    );

}