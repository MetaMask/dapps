import React from 'react'
import FeaturedDapp from './FeaturedDapp';
import { useTranslation } from 'react-i18next';
import featuredDapps from '../../data/featured-dapps';

import './index.css';


function FeaturedDappsCarousel() {
    const { t } = useTranslation();
    return (
        <div className={'featured-dapps'}>
            <h2 className={'featured-dapps-title'}>{t('HOMEPAGE.FEATURED_PROJECTS')}</h2>
            <div className={'featured-dapps-carousel-wrapper'}>
                <div className={'featured-dapps-carousel'}>
                    {
                        featuredDapps.map((dapp, position) => (
                            <FeaturedDapp
                                data={dapp}
                                key={dapp.url}
                                position={position}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default FeaturedDappsCarousel;