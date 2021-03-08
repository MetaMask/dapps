import React, { useEffect, useState } from 'react'
import { getHost } from '../../util/browser';
import Dapp from '../Dapp';
import './index.css';

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (window.__mmFavorites) {
            setFavorites(window.__mmFavorites.reverse());
        }

        window.addEventListener('message', ({ data }) => {
            if (data === 'updateFavorites') {
                if (window.__mmFavorites) {
                    setFavorites(window.__mmFavorites.reverse())
                }
            }
        });
    }, [])

    const onClose = async (url) => {
        const { favorites } = await window.ethereum.send('metamask_removeFavorite', [url]);
        setFavorites(favorites.reverse())
    }

    const renderEmpty = () => {
        return (
            <div className={'favorites-empty'}>
                <p>You have no favorites yet</p>
            </div>
        );
    }

    const renderFavorites = () => {
        return (
            <div className={'favorites'}>
                {
                    favorites.map((dapp, i) => (
                        <Dapp
                            data={{
                                ...dapp,
                                icon: `https://api.faviconkit.com/${getHost(dapp.url)}/64`,
                                description: null
                            }}
                            key={`fav-${dapp.url}`}
                            size={'small'}
                            closable
                            onClose={onClose}
                            position={i}
                        />
                    ))
                }
            </div>
        );
    }

    if (!favorites || !favorites.length) {
        return renderEmpty();
    }

    return renderFavorites()
}