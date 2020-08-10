import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import backIcon from '../../images/back-icon.svg';

import './index.css';


function Navbar(props) {
    const { title } = props;
    const { t } = useTranslation();
    return (
        <div className={'navbar'}>
            <Link
                to={'/'}
                className={'navbar-back'}
            >
                <img src={backIcon} alt={'go back'} />
            </Link>
            {/* <h1>{title}</h1> */}
            <h1>{t(title, {
                buyCrypto: '$t(HOMEPAGE.BUY_CRYPTO)',
                earnCrypto: '$t(HOMEPAGE.EARN_CRYPTO)',
                games: '$t(HOMEPAGE.GAMES)',
                social: '$t(HOMEPAGE.SOCIAL)',
                finance: '$t(HOMEPAGE.FINANCE)',
                news: '$t(HOMEPAGE.NEWS)',
            })}</h1>
        </div>
    );
}

export default Navbar;