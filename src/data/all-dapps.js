import { library } from '@fortawesome/fontawesome-svg-core'
import { faCreditCard,faDice, faCommentAlt, faMoneyBillWave, faNewspaper, faWrench, faExchangeAlt, faStore  } from '@fortawesome/free-solid-svg-icons'
library.add(faCreditCard, faDice, faCommentAlt, faMoneyBillWave, faNewspaper, faWrench, faExchangeAlt, faStore)

const categories =  [
    {
        name: 'DeFi',
        icon: 'money-bill-wave',
        color: '#5cd879',
        dapps: [
            {
                name: 'Compound',
                url: 'https://app.compound.finance/',
                description: 'Earn interest on your ETH.',
                icon: './images/dapps/compound.finance.png'
            },
            {
                name: 'MakerDAO CDP',
                url: 'https://oasis.app/',
                description: 'Trade, borrow, and save using Dai.',
                icon: './images/dapps/cdp.makerdao.com.png'
            },
            {
                name: 'AirSwap',
                url: 'https://instant.airswap.io/',
                description: 'Find Tokens, Get Best Prices, & Make Instant Trades.',
                icon: './images/dapps/instant.airswap.io.png'
            },
            {
                name: 'PoolTogether',
                url: 'https://app.pooltogether.us/',
                description: 'A prize-linked savings account. By saving money you have a chance to win prizes.',
                icon: './images/dapps/pooltogether.us.png'
            },
            {
                name: 'Shell Protocol',
                url: 'https://mainnet.shells.exchange',
                description: 'Shell is a stablecoin interoperability protocol.',
                icon: './images/dapps/shell_protocol.png'
            },
            {
                name: 'DeFi Saver',
                url: 'https://defisaver.com/',
                description: 'One-stop management solution for DeFi protocols.',
                icon: './images/dapps/defi_saver.png'
            },
            {
                name: 'pTokens',
                url: 'https://dapp.ptokens.io/',
                description: 'Make your crypto compatible with any blockchain!',
                icon: './images/dapps/pTokens.png'
            },
            {
                name: 'CoinGecko',
                url: 'https://www.coingecko.com/en',
                description: '360° Market Overview of Coins & Cryptocurrencies.',
                icon: './images/dapps/coingecko.com.png'
            },
        ],
    },
    {
        name: 'Exchanges',
        icon: 'exchange-alt',
        color: '#bbb9f3',
        dapps: [
            {
                name: 'Uniswap',
                url: 'https://uniswap.exchange/',
                description: 'Swap and trade tokens.',
                icon: './images/dapps/uniswap.exchange.png'
            },
            {
                name: 'Kyber Swap',
                url: 'https://kyberswap.com/',
                description: 'A simple way to exchange tokens.',
                icon: './images/dapps/kyber.network.png'
            },
            {
                name: 'Tokenlon',
                url: 'https://tokenlon.im/',
                description: 'Tokenlon DEX, powered by 0x protocol.',
                icon: './images/dapps/tokenlon.png'
            },
            {
                name: '1inch',
                url: 'https://1inch.exchange',
                description: '1inch is a DEX aggregator with the best DEX prices and single point of entry for DeFi.',
                icon: './images/dapps/1inch.svg'
            },
            {
                name: 'Totle Swap',
                url: 'https://totle.exchange',
                description: 'Swap any ERC-20 token at the best price.',
                icon: './images/dapps/totle.jpeg'
            },
            {
                name: 'DeFiZap',
                url: 'https://zapper.fi',
                description: 'Deploy capital to unique opportunities in open finance in one transaction.',
                icon: './images/dapps/defizap.png'
            },
            {
                name: 'Radar Relay',
                url: 'https://relay.radar.tech/',
                description: 'Simple and secure wallet to wallet trading with the best prices in DeFi.',
                icon: './images/dapps/radar_relay.png'
            },
        ]   
    },
    {
        name: 'Collectibles',
        icon: 'store',
        color: '#F29D62',
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
                description: 'Buy, sell, and discover rare digital items.',
                icon: './images/dapps/opensea.io.png'
            },
            {
                name: 'KnownOrigin',
                url: 'https://knownorigin.io/',
                description: 'Discover and collect rare digital artwork.',
                icon: './images/dapps/known_origin.png'
            },
            {
                name: 'Mintbase',
                url: 'https://mintbase.io',
                description: 'Leading non-fungible token creation tool and marketplace.',
                icon: './images/dapps/mintbase.png'  
            },
            {
                name: 'Axie Infinity',
                url: 'https://axieinfinity.com/#',
                description: 'Collect and raise fantasy creatures called Axie.',
                icon: './images/dapps/axieinfinity.com.png'
            },
        ]   
    },
    {
        name: 'Play Games',
        icon: 'dice',
        color: '#FC99EA',
        dapps: [
            {
                name: 'My Crypto Heroes',
                url: 'https://www.mycryptoheroes.net/home',
                description: 'MCH is a strategic turn based battle game, featuring PvE and PvP modes to fight for NFTs.',
                icon: './images/dapps/my_crypto_heroes.jpg'
            },
            {
                name: 'CryptoKitties',
                url: 'https://www.cryptokitties.co/',
                description: 'Collect, breed and trade unique CryptoKitties.',
                icon: './images/dapps/cryptokitties.co.png'
            },
            {
                name: 'CryptoDozer',
                url: 'https://market.playdapp.io',
                description: 'A blockchain-powered arcade game.',
                icon: './images/dapps/cryptodozer.io.png'
            },
            {
                name: 'Clovers Network',
                url: 'https://clovers.network',
                description: 'Discover, collect & trade cryptographic icons.',
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
                description: 'A multi-blockchain game with collectibles.',
                icon: './images/dapps/blockchaincuties.com.png'
            },
            {
                name: 'F1® Delta Time',
                url: 'https://www.f1deltatime.com/',
                description: 'This game centres around the collection and trading of unique Cars, Drivers & Components.',
                icon: './images/dapps/f1deltatime.com.png'
            },
            {
                name: 'MegaCryptoPolis 3D',
                url: 'http://mcp3d.com',
                description: 'Decentralized city builder strategy game.',
                icon: './images/dapps/megacryptopolis.png'
            },
            {
                name: 'Sorare',
                url: 'https://sorare.com/',
                description: 'Global Fantasy Football - Collect your favorite players, manage your team, earn prizes!',
                icon: './images/dapps/sorare.jpg'
            },
        ],
    },
    {
        name: 'Get Crypto',
        icon: 'credit-card',
        color: '#1098FC',
        dapps: [
            {
                name: 'Gitcoin',
                url: 'https://gitcoin.co/',
                description: 'Get paid in crypto for working on open source projects.',
                icon: './images/dapps/gitcoin.co.png'
            },
            {
                name: 'Local Ethereum',
                url: 'https://localethereum.com/',
                description: 'Get ETH peer-to-peer in over 130 countries.',
                icon: './images/dapps/localethereum.com.png'
            },
            {
                name: 'Cent',
                url: 'https://beta.cent.co/',
                description: 'Earn ETH by creating content.',
                icon: './images/dapps/cent.co.png'
            },
        ],
    },
    {
        name: 'Developer Tools',
        icon: 'wrench',
        color: '#838c96',
        dapps: [
            {
                name: 'Mintable',
                url: 'https://mintable.app',
                description: 'Mintable is a way for anyone to deploy a NFT smart contract and create their own NFTs.',
                icon: './images/dapps/mintable.png'
            },
            {
                name: 'Ethereum Name Service',
                url: 'https://app.ens.domains/',
                description: 'Have one name for all your cryptocurrency wallets, a decentralised website, & more.',
                icon: './images/dapps/ens.jpg'
            },
            {
                name: 'Gnosis Safe Multisig',
                url: 'https://gnosis-safe.io/app/#/',
                description: 'Manage digital assets collectively.',
                icon: './images/dapps/gnosis_safe.png'
            },
            {
                name: 'Microsponsors',
                url: 'https://microsponsors.io',
                description: 'Microsponsors is an auction house for tokenized Time.',
                icon: './images/dapps/microsponsors.png'
            },
            {
                name: 'MythX',
                url: 'https://mythx.io/',
                description: 'Smart contract security service for Ethereum.',
                icon: './images/dapps/mythx.png'
            },
        ]   
    },
    {
        name: 'Social',
        icon: 'comment-alt',
        color: '#F8CD45',
        dapps: [
            {
                name: '3Box',
                url: 'https://3box.io/hub',
                description: 'Social profiles for Ethereum.',
                icon: './images/dapps/3box.io.png'
            },
            {
                name: 'Kauri',
                url: 'https://kauri.io/',
                description: 'Ethereum dev content in a decentralized knowledge base.',
                icon: './images/dapps/kauri.io.png'
            },
            {
                name: 'FOAM',
                url: 'https://map.foam.space',
                description: 'Create, curate, and search a consensus-driven map.',
                icon: './images/dapps/foam.space.png'
            },
            {
                name: 'Aragon',
                url: 'https://aragon.org/discover/',
                description: 'Create and manage communities, companies, organizations.',
                icon: './images/dapps/aragon.org.png'
            },
        ],
    },
    {
        name: 'News',
        icon: 'newspaper',
        color: '#FF849A',
        dapps: [
            {
                name: 'Civil',
                url: 'https://civil.co/',
                description: 'A community-owned platform for independent journalism.',
                icon: './images/dapps/civil.co.png'
            },
            {
                name: 'Popula',
                url: 'https://popula.com/',
                description: 'News powered by Civil and Ethereum.',
                icon: './images/dapps/popula.com.png'
            },
            {
                name: 'CoinDesk',
                url: 'https://www.coindesk.com/',
                description: 'Blockchain news.',
                icon: './images/dapps/coindesk.com.png'
            },
        ],
    }
];


export default categories;
