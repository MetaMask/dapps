import { library } from '@fortawesome/fontawesome-svg-core'
import { faCreditCard, faHandHoldingHeart,faDice, faCommentAlt, faMoneyBillWave, faNewspaper  } from '@fortawesome/free-solid-svg-icons'
library.add(faCreditCard, faHandHoldingHeart, faDice, faCommentAlt, faMoneyBillWave, faNewspaper)


const categories =  [
	{
        name: "Buy Crypto",
        icon: "credit-card",
        color: "#1098FC",
        dapps: [

        ],
    },
    {
        name: "Earn Crypto",
        icon: "hand-holding-heart",
        color: "#E06470",
        dapps: [

        ],
    },
    {
        name: "Games",
        icon: "dice",
        color: "#F8883B",
        dapps: [

        ],
    },
    {
        name: "Social",
        icon: "comment-alt",
        color: "#FFD33D",
        dapps: [

        ],
    },
    {
        name: "Trade",
        icon: "money-bill-wave",
        color: "#5cd879",
        dapps: [

        ],
    },
    {
        name: "News",
        icon: "newspaper",
        color: "#838c96",
        dapps: [

        ],
    }
];


export default categories;