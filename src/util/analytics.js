/* eslint-disable no-undef */
export function trackEvent(action, data){
    if(mixpanel && window.__mmMetametrics && mixpanel.track){
        const category = action.category
        delete action.category
        mixpanel.track(
            category,
            {...action, ...data},
        );
    }
}

const generateOpt = (category, action, name) => ({ category, action, name });

const NAMES = {
	DAPP: 'Dapp',
	FEATURED_DAPP: 'Featured Dapp',
	DAPP_CATEGORY: 'Dapp Category',
	HOMEPAGE_TAB: 'Homepage Tab',
	OPEN_FAVORITE: 'Opened Favorites',
	SEARCH_USED: 'Search Used',
	OPEN_DAPP_CATEGORY: 'Opened Dapp Category',
	OPEN_LISTED_DAPP: 'Opened Listed Dapp',
};

const ACTIONS = {
	CLICK: 'Click',
	IMPRESSION: 'Impression',
};

const CATEGORIES = {
	BROWSER_HOME: 'Browser Home',
};

export const ANALYTICS_EVENT_OPTS = {
	CLICKS_DAPP: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.DAPP
    ),
    CLICKS_FEATURED_DAPP: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.FEATURED_DAPP
	),
	CLICKS_DAPP_CATEGORY: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.DAPP_CATEGORY
	),
	CLICKS_HOMEPAGE_TAB: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.HOMEPAGE_TAB
    ),
    IMPRESSION: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.IMPRESSION,
	),
	CLICKS_FAVORITES_TAB: generateOpt(
		NAMES.OPEN_FAVORITE
	),
	SEARCH_USED: generateOpt(
		NAMES.SEARCH_USED
	),
	OPEN_DAPP_CATEGORY: generateOpt(
		NAMES.OPEN_DAPP_CATEGORY
	),
	OPEN_LISTED_DAPP: generateOpt(
		NAMES.OPEN_LISTED_DAPP
	)
};

export default {trackEvent,ANALYTICS_EVENT_OPTS }
