import { library } from '@fortawesome/fontawesome-svg-core'
import { faCreditCard, faHandHoldingHeart, faDice, faCommentAlt, faMoneyBillWave, faNewspaper } from '@fortawesome/free-solid-svg-icons'
library.add(faCreditCard, faHandHoldingHeart, faDice, faCommentAlt, faMoneyBillWave, faNewspaper)


const categories = [
    {
        name: '{{ buyCrypto }}',
        icon: 'credit-card',
        color: '#1098FC',
        dapps: [
            {
                name: '{{ localEthereum }}',
                url: 'https://localethereum.com/',
                description: '{{ localEthereumDescription }}',
                icon: './images/dapps/localethereum.com.png'
            },
        ],
    },
    {
        name: '{{ earnCrypto }}',
        icon: 'hand-holding-heart',
        color: '#E06470',
        dapps: [
            {
                name: '{{ cent }}',
                url: 'https://beta.cent.co/',
                description: '{{ centDescription }}',
                icon: './images/dapps/cent.co.png'
            },
            {
                name: '{{ gitcoin }}',
                url: 'https://gitcoin.co/',
                description: '{{ gitcoinDescription }}',
                icon: './images/dapps/gitcoin.co.png'
            },
            {
                name: '{{ poolTogether }}',
                url: 'https://app.pooltogether.us/',
                description: '{{ poolTogetherDescription }}',
                icon: './images/dapps/pooltogether.us.png'
            },
        ],
    },
    {
        name: '{{ games }}',
        icon: 'dice',
        color: '#F8883B',
        dapps: [
            {
                name: '{{ axieInfinity }}',
                url: 'https://axieinfinity.com/#',
                description: '{{ axieInfinityDescription }}',
                icon: './images/dapps/axieinfinity.com.png'
            },
            {
                name: '{{ zeroxUniverse }}',
                url: 'https://0xuniverse.com/',
                description: '{{ zeroxUniverseDescription }}',
                icon: './images/dapps/0xuniverse.com.png'
            },
            {
                name: '{{ cryptoKitties }}',
                url: 'https://www.cryptokitties.co/',
                description: '{{ cryptoKittiesDescription }}',
                icon: './images/dapps/cryptokitties.co.png'
            },
            //   Currently having problems with thumbnail
            //
            //    {
            //         name: 'Snail Farm',
            //         url: 'https://snailking.github.io/snailfarm3/',
            //         description: 'An Ethereum forest adventure',
            //         icon: './images/dapps/snailking.github.io.png'
            //     },
            {
                name: '{{ cryptoDozer }}',
                url: 'https://cryptodozer.io/',
                description: '{{ cryptoDozerDescription }}',
                icon: './images/dapps/cryptodozer.io.png'
            },
            {
                name: '{{ blockchainCuties }}',
                url: 'https://blockchaincuties.com/',
                description: '{{ blockchainCutiesDescription }}',
                icon: './images/dapps/blockchaincuties.com.png'
            },
            {
                name: '{{ mLBChampions }}',
                url: 'https://mlbcryptobaseball.com/welcome',
                description: '{{ mLBChampionsDescription }}',
                icon: './images/dapps/mlbcryptobaseball.com.png'
            },
            {
                name: '{{ fOneDeltaTime }}',
                url: 'https://www.f1deltatime.com/',
                description: '{{ fOneDeltaTimeDescription }}',
                icon: './images/dapps/f1deltatime.com.png'
            },
        ],
    },
    {
        name: '{{ social }}',
        icon: 'comment-alt',
        color: '#FFD33D',
        dapps: [
            {
                name: '{{ threeBox }}',
                url: 'https://3box.io/hub',
                description: '{{ threeBoxDescription }}',
                icon: './images/dapps/3box.io.png'
            },
            {
                name: '{{ kauri }}',
                url: 'https://kauri.io/',
                description: '{{ kauriDescription }}',
                icon: './images/dapps/kauri.io.png'
            },
            {
                name: '{{ foam }}',
                url: 'https://map.foam.space',
                description: '{{ foamDescription }}',
                icon: './images/dapps/foam.space.png'
            },
            {
                name: '{{ aragon }}',
                url: 'https://aragon.org/discover/',
                description: '{{ aragonDescription }}',
                icon: './images/dapps/aragon.org.png'
            },
            {
                name: '{{ cent }}',
                url: 'https://beta.cent.co/',
                description: '{{ centDescription }}',
                icon: './images/dapps/cent.co.png'
            },
            {
                name: '{{ openSea }}',
                url: 'https://opensea.io/',
                description: '{{ openSeaDescription }}',
                icon: './images/dapps/opensea.io.png'
            },
        ],
    },
    {
        name: '{{ finance }}',
        icon: 'money-bill-wave',
        color: '#5cd879',
        dapps: [
            {
                name: '{{ uniswap }}',
                url: 'https://uniswap.exchange/',
                description: '{{ uniswapDescription }}',
                icon: './images/dapps/uniswap.exchange.png'
            },
            {
                name: '{{ airSwap }}',
                url: 'https://instant.airswap.io/',
                description: '{{ airSwapDescription }}',
                icon: './images/dapps/instant.airswap.io.png'
            },
            {
                name: '{{ compound }}',
                url: 'https://app.compound.finance/',
                description: '{{ compoundDescription }}',
                icon: './images/dapps/compound.finance.png'
            },
            {
                name: '{{ makerDAOCDP }}',
                url: 'https://oasis.app/',
                description: '{{ makerDAOCDPDescription }}',
                icon: './images/dapps/cdp.makerdao.com.png'
            },
            {
                name: '{{ kyberSwap }}',
                url: 'https://kyberswap.com/',
                description: '{{ kyberSwapDescription }}',
                icon: './images/dapps/kyber.network.png'
            },
            {
                name: '{{ coinGecko }}',
                url: 'https://www.coingecko.com/en',
                description: '{{ coinGeckoDescription }}',
                icon: './images/dapps/coingecko.com.png'
            },
        ],
    },
    {
        name: '{{ news }}',
        icon: 'newspaper',
        color: '#838c96',
        dapps: [
            {
                name: '{{ civil }}',
                url: 'https://civil.co/',
                description: '{{ civilDescription }}',
                icon: './images/dapps/civil.co.png'
            },
            {
                name: '{{ popula }}',
                url: 'https://popula.com/',
                description: '{{ populaDescription }}',
                icon: './images/dapps/popula.com.png'
            },
            {
                name: '{{ coinDesk }}',
                url: 'https://www.coindesk.com/',
                description: '{{ coinDeskDescription }}',
                icon: './images/dapps/coindesk.com.png'
            },
        ],
    }
];


export default categories;
