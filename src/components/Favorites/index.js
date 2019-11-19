import React, { Component } from 'react'
import './index.css';
import { getHost } from '../../util/browser';
import Dapp from '../Dapp';

export default class Favorites extends Component {
    state = {
        favorites: []
    }

    componentDidMount(){
        if(window.__mmFavorites){
            this.setState({ favorites: window.__mmFavorites.reverse() });
        }
        
        window.addEventListener('message', ({ data }) => {
            if(data === 'updateFavorites'){
                if(window.__mmFavorites){
                    this.setState({ favorites: window.__mmFavorites.reverse() });
                }
            }
        });

    }
    
    onClose = async (url) => {
        const { favorites } = await window.ethereum.send('metamask_removeFavorite', [url]);
        this.setState({ favorites: favorites.reverse() });
    }

    renderFavorites(){
        return (
            <div className={'favorites'}>
            { 
                this.state.favorites.map( (dapp, i) => (
                    <Dapp 
                        data={{
                            ...dapp,
                            icon: `https://api.faviconkit.com/${getHost(dapp.url)}/64`,
                            description: null
                        }}
                        key={`fav-${dapp.url}`}
                        size={'small'}
                        closable
                        onClose={this.onClose}
                        position={i}
                    />
                ))
            }
            </div>
        );
    }

    renderEmpty(){
        return (
            <div className={'favorites-empty'}>
                <p>You have no favorites yet</p>
            </div>
        );
    }

    render(){
        if(!this.state.favorites || !this.state.favorites.length) {
           return this.renderEmpty();
        }

        return this.renderFavorites()
    }
}
