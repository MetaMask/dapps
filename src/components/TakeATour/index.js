import React, { Component } from 'react'
import logo from '../../images/logo.svg';
import closeIcon from '../../images/close-icon.svg';
import './index.css';

export default class TakeATour extends Component {
    state = {
        hideTutorialBanner: localStorage.getItem('hideTutorialBanner')
    }
    
    hideBanner = () => {
        localStorage.setItem('hideTutorialBanner', 'true');
        this.setState({hideTutorialBanner: true});
    }

    showTutorial = (e) => {
        e.preventDefault();
        window.ethereum.send('metamask_showTutorial');
    }

    render(){
        if (this.state.hideTutorialBanner) return null;
        
        return (
            <div className={'take-a-tour-wrapper'}>
                <a 
                    className={'take-a-tour'}
                    href={'#metamask-tutorial'}
                    onClick={this.showTutorial}
                >
                    <img src={logo} className={'take-a-tour-logo'} alt={'MetaMask logo'}/>
                    <div className={'take-a-tour-content'}>
                        <h3>Take a tour</h3>
                        <p>Our new mobile app gives you the control to access the new decentralized web</p>
                        
                    </div>
                </a>
                <button 
                    className={'take-a-tour-close'}
                    onClick={this.hideBanner}
                >
                    <img src={closeIcon} alt={'close button'} />
                </button>
            </div>
            
        );
    }
}