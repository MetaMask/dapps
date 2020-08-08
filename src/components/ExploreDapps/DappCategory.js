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

    const { t, i18n } = useTranslation();

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
                    buyCrypto: 'Buy Crypto',
                    earnCrypto: 'Earn Crypto',
                    games: 'Games',
                    social: 'Social',
                    finance: 'Finance',
                    news: 'News',
                })}
            </span>
        </Link>
    );
}
export default DappCategory;
// export default class DappCategory extends Component {
//     track = () => {
//         trackEvent(ANALYTICS_EVENT_OPTS.CLICKS_DAPP_CATEGORY, {
//             'Category': this.props.data.name,
//         });
//     }

//     render() {
//         const { name, icon, color } = this.props.data;
//         const url = `/${name.toLowerCase().replace(" ", "-")}`;

//         return (
//             // eslint-disable-next-line jsx-a11y/anchor-is-valid
//             <Link
//                 className={'dapp-category'}
//                 to={url}
//                 onClick={this.track}
//             >
//                 <FontAwesomeIcon
//                     className={'dapp-category-icon'}
//                     icon={icon}
//                     color={color}
//                 />
//                 <span className={'dapp-category-name'} >{name}</span>
//             </Link>
//         );
//     }
// }