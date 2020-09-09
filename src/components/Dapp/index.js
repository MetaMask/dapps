import React from 'react'
import closeIcon from '../../images/close-icon.svg';
import { useTranslation } from 'react-i18next';
import { trackEvent, ANALYTICS_EVENT_OPTS } from '../../util/analytics';
import './index.css';

function Dapp(props) {

    function track(e) {
        e.preventDefault();
        trackEvent(ANALYTICS_EVENT_OPTS.CLICKS_DAPP, {
            'Dapp': props.data.name,
            'Url': props.data.url,
            'Position': props.position + 1
        });
        window.location.href = props.data.url;
    }

    const { t } = useTranslation();

    function renderDescription(description) {
        return description && (<p className={'dapp-desc'} >{t(description, {
            // Buy Crypto Tab
            localEthereumDescription: '$t(DAPPS.BUY_CRPTO.LOCAL_ETHEREUM_DESCRIPTION)',

            // Earn Crypto Tab
            centDescription: '$t(DAPPS.EARN_CRYPTO.CENT_DESCRIPTION)',
            gitcoinDescription: '$t(DAPPS.EARN_CRYPTO.GITCOIN)',
            poolTogetherDescription: '$t(DAPPS.EARN_CRYPTO.POOLTOGETHER)',

            // Games Tab
            axieInfinityDescription: '$t(DAPPS.GAMES.AXIEINFINITY_DESCRIPTION)',
            zeroxUniverseDescription: '$t(DAPPS.GAMES.ZEROXUNIVERSE_DESCRIPTION)',
            cryptoKittiesDescription: '$t(DAPPS.GAMES.CRYPTOKITTIES_DESCRIPTION)',
            cryptoDozerDescription: '$t(DAPPS.GAMES.CRYPTODOZER_DESCRIPTION)',
            blockchainCutiesDescription: '$t(DAPPS.GAMES.BLOCKCHAIN_CUTIES_DESCRIPTION)',
            mLBChampionsDescription: '$t(DAPPS.GAMES.MLB_CHAMPIONS_DESCRIPTION)',
            fOneDeltaTimeDescription: '$t(DAPPS.GAMES.FONE_DELTA_TIME_DESCRIPTION)',

            // Social Tab
            threeBoxDescription: '$t(DAPPS.SOCIAL.THREEBOX_DESCRIPTION)',
            kauriDescription: '$t(DAPPS.SOCIAL.KAURI_DESCRIPTION)',
            foamDescription: '$t(DAPPS.SOCIAL.FOAM_DESCRIPTION)',
            aragonDescription: '$t(DAPPS.SOCIAL.ARAGON_DESCRIPTION)',
            openSeaDescription: '$t(DAPPS.SOCIAL.OPENSEA_DESCRIPTION)',

            // Finance Tab
            uniswapDescription: '$t(DAPPS.FINANCE.UNISWAP_DESCRIPTION)',
            airSwapDescription: '$t(DAPPS.FINANCE.AIRSWAP_DESCRIPTION)',
            compoundDescription: '$t(DAPPS.FINANCE.COMPOUND_DESCRIPTION)',
            makerDAOCDPDescription: '$t(DAPPS.FINANCE.MAKERDOACDP_DESCRIPTION)',
            kyberSwapDescription: '$t(DAPPS.FINANCE.KYBER_SWAP_DESCRIPTION)',
            coinGeckoDescription: '$t(DAPPS.FINANCE.COINGECKO_DESCRIPTION)',

            // News Tab
            civilDescription: '$t(DAPPS.NEWS.CIVIL_DESCRIPTION)',
            populaDescription: '$t(DAPPS.NEWS.POPULA_DESCRIPTION)',
            coinDeskDescription: '$t(DAPPS.NEWS.COINDESK_DESCRIPTION)',

        })}</p>)
    }

    function onClose(e) {
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
                <p className={`dapp-name ${size === 'small' ? 'dapp-name-small' : ''}`} >
                    {t(name, {
                        // Buy Crypto Tab
                        localEthereum: '$t(DAPPS.BUY_CRPTO.LOCAL_ETHEREUM)',

                        // Earn Crypto Tab
                        cent: '$t(DAPPS.EARN_CRYPTO.CENT)',
                        gitcoin: '$t(DAPPS.EARN_CRYPTO.GITCOIN)',
                        poolTogether: '$t(DAPPS.EARN_CRYPTO.POOLTOGETHER)',

                        // Games Tab
                        axieInfinity: '$t(DAPPS.GAMES.AXIEINFINITY)',
                        zeroxUniverse: '$t(DAPPS.GAMES.ZEROXUNIVERSE)',
                        cryptoKitties: '$t(DAPPS.GAMES.CRYPTOKITTIES)',
                        cryptoDozer: '$t(DAPPS.GAMES.CRYPTODOZER)',
                        blockchainCuties: '$t(DAPPS.GAMES.BLOCKCHAIN_CUTIES)',
                        mLBChampions: '$t(DAPPS.GAMES.MLB_CHAMPIONS)',
                        fOneDeltaTime: '$t(DAPPS.GAMES.FONE_DELTA_TIME)',

                        // Social Tab
                        threeBox: '$t(DAPPS.SOCIAL.THREEBOX)',
                        kauri: '$t(DAPPS.SOCIAL.KAURI)',
                        foam: '$t(DAPPS.SOCIAL.FOAM)',
                        aragon: '$t(DAPPS.SOCIAL.ARAGON)',
                        openSea: '$t(DAPPS.SOCIAL.OPENSEA)',

                        // Finance Tab
                        uniswap: '$t(DAPPS.FINANCE.UNISWAP)',
                        airSwap: '$t(DAPPS.FINANCE.AIRSWAP)',
                        compound: '$t(DAPPS.FINANCE.COMPOUND)',
                        makerDAOCDP: '$t(DAPPS.FINANCE.MAKERDOACDP)',
                        kyberSwap: '$t(DAPPS.FINANCE.KYBER_SWAP)',
                        coinGecko: '$t(DAPPS.FINANCE.COINGECKO)',

                        // News Tab
                        civil: '$t(DAPPS.NEWS.CIVIL)',
                        popula: '$t(DAPPS.NEWS.POPULA)',
                        coinDesk: '$t(DAPPS.NEWS.COINDESK)',

                    })}</p>
                {description ? renderDescription(description) : null}
                <span className={'dapp-url'} >{url}</span>
            </div>
            {closable && (
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

export default Dapp;