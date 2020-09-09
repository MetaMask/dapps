import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { trackEvent, ANALYTICS_EVENT_OPTS } from '../../util/analytics';

import './DappCategory.css';

function DappCategory(props) {
    function track() {
        trackEvent(ANALYTICS_EVENT_OPTS.CLICKS_DAPP_CATEGORY, {
            'Category': props.data.name,
        });
    }

    const { t } = useTranslation();

    const { name, icon, color } = props.data;
    const url = `/${name.toLowerCase().replace(" ", "-")}`;

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link
            className={'dapp-category'}
            to={url}
            onClick={track}
        >
            <FontAwesomeIcon
                className={'dapp-category-icon'}
                icon={icon}
                color={color}
            />
            <span className={'dapp-category-name'} >
                {t(name, {
                    buyCrypto: '$t(HOMEPAGE.BUY_CRYPTO)',
                    earnCrypto: '$t(HOMEPAGE.EARN_CRYPTO)',
                    games: '$t(HOMEPAGE.GAMES)',
                    social: '$t(HOMEPAGE.SOCIAL)',
                    finance: '$t(HOMEPAGE.FINANCE)',
                    news: '$t(HOMEPAGE.NEWS)',
                })}
            </span>
        </Link>
    );
}
export default DappCategory;

