import React, { useState } from 'react'
import logo from '../../images/logo.svg';
import closeIcon from '../../images/close-icon.svg';
import './index.css';

export default function TakeATour() {
    const [hideTutorialBanner, setHideTutorialBanner] = useState(localStorage.getItem('hideTutorialBanner'))

    if (hideTutorialBanner) return null;

    const hideBanner = () => {
        localStorage.setItem('hideTutorialBanner', 'true');
        setHideTutorialBanner(true)
    }

    const showTutorial = (e) => {
        e.preventDefault();
        if (window.ethereum) window.ethereum.send('metamask_showTutorial');
    }

    return (
        <div className={'take-a-tour-wrapper'}>
            <a
                className={'take-a-tour'}
                href={'#metamask-tutorial'}
                onClick={showTutorial}
            >
                <img src={logo} className={'take-a-tour-logo'} alt={'MetaMask logo'} />
                <div className={'take-a-tour-content'}>
                    <h3>Take a tour</h3>
                    <p>Our new mobile app gives you the control to access the new decentralized web</p>

                </div>
            </a>
            <button
                className={'take-a-tour-close'}
                onClick={hideBanner}
            >
                <img src={closeIcon} alt={'close button'} />
            </button>
        </div>

    );
}