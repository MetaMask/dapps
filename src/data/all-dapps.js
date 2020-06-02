import { library } from '@fortawesome/fontawesome-svg-core'
import { faCreditCard, faHandHoldingHeart,faDice, faCommentAlt, faMoneyBillWave, faNewspaper, faWrench, faExchangeAlt  } from '@fortawesome/free-solid-svg-icons'
library.add(faCreditCard, faHandHoldingHeart, faDice, faCommentAlt, faMoneyBillWave, faNewspaper, faWrench, faExchangeAlt)

// name: '',
// url: '',
// description: '',
// icon: './images/dapps/'

const categories =  [
	{
        name: 'Buy Crypto',
        icon: 'credit-card',
        color: '#1098FC',
        dapps: [
            {
                name: 'Local Ethereum',
                url: 'https://localethereum.com/',
                description: 'Get ETH peer-to-peer in over 130 countries',
                icon: './images/dapps/localethereum.com.png'
            },
        ],
    },
    {
        name: 'Get Crypto',
        icon: 'hand-holding-heart',
        color: '#FF45D8',
        dapps: [
            {
                name: 'Cent',
                url: 'https://beta.cent.co/',
                description: 'Earn ETH by creating content',
                icon: './images/dapps/cent.co.png'
            },
            {
                name: 'Gitcoin',
                url: 'https://gitcoin.co/',
                description: 'Get paid in crypto for working on open source projects',
                icon: './images/dapps/gitcoin.co.png'
            },
            {
                name: 'PoolTogether',
                url: 'https://app.pooltogether.us/',
                description: 'A prize-linked savings account. By saving money you have a chance to win prizes.',
                icon: './images/dapps/pooltogether.us.png'
            },
        ],
    },
    {
        name: 'Tools',
        icon: 'wrench',
        color: '#F8883B',
        dapps: [
            {
                name: 'Mintable',
                url: 'https://mintable.app',
                description: 'Mintable is a way for anyone to deploy a NFT smart contract and create their own NFTs',
                icon: './images/dapps/mintable.png'
            },
            {
                name: 'Ethereum Name Service',
                url: 'https://app.ens.domains/',
                description: 'Have one name for all your cryptocurrency wallets, a decentralised website, & more.',
                icon: './images/dapps/ens.jpg'
            },
            {
                name: 'Gnosis Safe Multisig"',
                url: 'https://gnosis-safe.io/app/#/',
                description: 'The most trusted platform to store digital assets on Ethereum collectively',
                icon: './images/dapps/gnosis_safe.png'
            },
            {
                name: 'Microsponsors',
                url: 'https://microsponsors.io',
                description: 'Microsponsors is an auction house for tokenized Time.',
                icon: './images/dapps/microsponsors.png'

            },
        ]   
    },
    {
        name: 'Exchanges',
        icon: 'exchange-alt',
        color: '#F8883B',
        dapps: [
            {
                name: '1inch',
                url: 'https://1inch.exchange',
                description: '1inch is a DEX aggregator with the best DEX prices and single point of entry for DeFi.',
                icon: './images/dapps/1inch.svg'
            },
            {
                name: 'Totle Swap',
                url: 'https://totle.exchange',
                description: 'Swap any ERC-20 token at the best price',
                icon: './images/dapps/totle.jpeg'
            },
            {
                name: 'ParaSwap',
                url: 'https://paraswap.io',
                description: 'ParaSwap offers a simple, fast and safe way to exchange Ethereum-native tokens',
                icon: './images/dapps/paraswap.png'
            },
            {
                name: 'DeFiZap',
                url: 'https://defizap.com/',
                description: 'Deploy capital to unique opportunities in open finance in one transaction.',
                icon: './images/dapps/defizap.png'
            },
            {
                name: 'Tokenlon',
                url: 'https://tokenlon.im/',
                description: 'Tokenlon DEX, powered by 0x protocol.',
                icon: './images/dapps/tokenion.png'
            },
        ]   
    },
    {
        name: 'Marketplaces',
        icon: 'dice',
        color: '#F8883B',
        dapps: [
            {
                name: 'miime',
                url: 'https://miime.io/',
                description: 'miime is an NFT marketplace catering to blockchain gamers in Japan and across the world.',
                icon: './images/dapps/miime.png'
            },
            {
                name: 'OpenSea',
                url: 'https://opensea.io/',
                description: 'Buy, sell, and discover rare digital items',
                icon: './images/dapps/opensea.io.png'
            },
        ]   
    },
    {
        name: 'Play Games',
        icon: 'dice',
        color: '#F8883B',
        dapps: [
            {
                name: 'Axie Infinity',
                url: 'https://axieinfinity.com/#',
                description: 'Collect and raise fantasy creatures called Axie',
                icon: './images/dapps/axieinfinity.com.png'
            },
            {
                name: '0x Universe',
                url: 'https://0xuniverse.com/',
                description: 'Build spaceships, explore the galaxy, conquer planets',
                icon: './images/dapps/0xuniverse.com.png'
            },
            {
                name: 'CryptoKitties',
                url: 'https://www.cryptokitties.co/',
                description: 'Collect, breed and trade unique CryptoKitties',
                icon: './images/dapps/cryptokitties.co.png'
            },
            {
                name: 'CryptoDozer',
                url: 'https://cryptodozer.io/',
                description: 'A blockchain-powered arcade game',
                icon: './images/dapps/cryptodozer.io.png'
            },
            {
                name: 'Clovers Network',
                url: 'https://clovers.network',
                description: 'Discover, collect & trade cryptographic icons',
                icon: './images/dapps/clovers.png'
            },
            {
                name: 'BRAVE FRONTIER HEROES',
                url: 'https://bravefrontierheroes.com',
                description: 'Brave Frontier Heroes is a wildly popular Blockchain game, let alone huge in Japan.',
                icon: './images/dapps/brave_frontier_heroes.png'
            },
           {
                name: 'Blockchain Cuties',
                url: 'https://blockchaincuties.com/',
                description: 'A multi-blockchain game with collectibles',
                icon: './images/dapps/blockchaincuties.com.png'
            },
            {
                name: 'MLB Champions',
                url: 'https://mlbcryptobaseball.com/welcome',
                description: 'Collect official MLB Digital Figures',
                icon: './images/dapps/mlbcryptobaseball.com.png'
            },
            {
                name: 'F1® Delta Time',
                url: 'https://www.f1deltatime.com/',
                description: 'This game centres around the collection and trading of unique Cars, Drivers & Components',
                icon: './images/dapps/f1deltatime.com.png'
            },
            {
                name: 'MegaCryptoPolis 3D',
                url: 'http://mcp3d.com',
                description: 'Decentralized city builder strategy game',
                icon: './images/dapps/megacryptopolis.png'
            },
            {
                name: 'My Crypto Heroes',
                url: 'https://www.mycryptoheroes.net/home',
                description: 'MCH is a strategic turn based battle game, featuring PvE and PvP modes to fight for NFTs.',
                icon: './images/dapps/my_crypto_heroes.jpg'
            },
        ],
    },
    {
        name: 'Social',
        icon: 'comment-alt',
        color: '#FFD33D',
        dapps: [
            {
                name: '3Box',
                url: 'https://3box.io/hub',
                description: 'Social profiles for Ethereum',
                icon: './images/dapps/3box.io.png'
            },
            {
                name: 'Kauri',
                url: 'https://kauri.io/',
                description: 'Ethereum dev content in a decentralized knowledge base',
                icon: './images/dapps/kauri.io.png'
            },
            {
                name: 'FOAM',
                url: 'https://map.foam.space',
                description: 'Create, curate, and search a consensus-driven map',
                icon: './images/dapps/foam.space.png'
            },
            {
                name: 'Aragon',
                url: 'https://aragon.org/discover/',
                description: 'Create and manage communities, companies, organizations',
                icon: './images/dapps/aragon.org.png'
            },
            {
                name: 'Cent',
                url: 'https://beta.cent.co/',
                description: 'Earn ETH by creating content',
                icon: './images/dapps/cent.co.png'
            },
        ],
    },
    {
        name: 'Finance',
        icon: 'money-bill-wave',
        color: '#5cd879',
        dapps: [
            {
                name: 'Uniswap',
                url: 'https://uniswap.exchange/',
                description: 'Swap and trade tokens',
                icon: './images/dapps/uniswap.exchange.png'
            },
            {
                name: 'AirSwap',
                url: 'https://instant.airswap.io/',
                description: 'Find Tokens, Get Best Prices, & Make Instant Trades',
                icon: './images/dapps/instant.airswap.io.png'
            },
            {
                name: 'Compound',
                url: 'https://app.compound.finance/',
                description: 'Earn interest on your ETH',
                icon: './images/dapps/compound.finance.png'
            },
            {
                name: 'MakerDAO CDP',
                url: 'https://oasis.app/',
                description: 'Trade, borrow, and save using Dai',
                icon: './images/dapps/cdp.makerdao.com.png'
            },
            {
                name: 'Kyber Swap',
                url: 'https://kyberswap.com/',
                description: 'A simple way to exchange tokens',
                icon: './images/dapps/kyber.network.png'
            },
            {
                name: 'CoinGecko',
                url: 'https://www.coingecko.com/en',
                description: '360° Market Overview of Coins & Cryptocurrencies',
                icon: './images/dapps/coingecko.com.png'
            },
            {
                name: 'Shell Protocol',
                url: 'https://mainnet.shells.exchange',
                description: 'Shell is a stablecoin interoperability protocol',
                icon: './images/dapps/shell_protocol.png'
            },
            {
                name: 'DeFi Saver',
                url: 'https://defisaver.com/',
                description: 'One-stop management solution for DeFi protocols.',
                icon: './images/dapps/defi_saver.png'
            },
        ],
    },
    {
        name: 'News',
        icon: 'newspaper',
        color: '#838c96',
        dapps: [
            {
                name: 'Civil',
                url: 'https://civil.co/',
                description: 'A community-owned platform for independent journalism',
                icon: './images/dapps/civil.co.png'
            },
            {
                name: 'Popula',
                url: 'https://popula.com/',
                description: 'News powered by Civil and Ethereum',
                icon: './images/dapps/popula.com.png'
            },
            {
                name: 'CoinDesk',
                url: 'https://www.coindesk.com/',
                description: 'Blockchain news',
                icon: './images/dapps/coindesk.com.png'
            },
        ],
    }
];


export default categories;
