import { library } from '@fortawesome/fontawesome-svg-core'
import { isIOS } from 'react-device-detect';
import { faCreditCard,faDice, faCommentAlt, faMoneyBillWave, faNewspaper, faWrench, faExchangeAlt, faStore  } from '@fortawesome/free-solid-svg-icons'
library.add(faCreditCard, faDice, faCommentAlt, faMoneyBillWave, faNewspaper, faWrench, faExchangeAlt, faStore)

const categories =  [
    {
        name: 'Decentralized finance',
        displayIos: false,
        icon: 'money-bill-wave',
        color: '#5cd879',
        dapps: [
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
                name: 'PoolTogether',
                url: 'https://app.pooltogether.com/',
                description: 'A prize-linked savings account. By saving money you have a chance to win prizes',
                icon: './images/dapps/pooltogether.us.png'
            },
            {
                name: 'DeFi Saver',
                url: 'https://defisaver.com/',
                description: 'One-stop management solution for DeFi protocols',
                icon: './images/dapps/defi_saver.png'
            },
            {
                name: 'pTokens',
                url: 'https://dapp.ptokens.io/',
                description: 'Make your crypto compatible with any blockchain!',
                icon: './images/dapps/pTokens.png'
            },
            {
                name: 'Zapper',
                url: 'https://zapper.fi',
                description: 'Manage your DeFi assets and liabilities in one simple interface',
                icon: './images/dapps/zapper.svg'
            },
            {
                name: 'Yearn',
                url: 'https://yearn.finance/',
                description: 'An ecosystem of aggregators that utilize lending services to optimize your token lending',
                icon: './images/dapps/yearn.finance.png'
            },
            {
                name: 'Aave',
                url: 'https://aave.com/',
                description: 'An open-source, non-custodial protocol enabling the creation of money markets',
                icon: './images/dapps/aave.svg'
            },
            {
                name: 'Zerion',
                url: 'https://zerion.io/',
                description: 'Zerion is the easiest way to build and manage your entire DeFi portfolio from one place',
                icon: './images/dapps/zerion.io.png'
            },
            {
                name: 'Token Sets',
                url: 'https://www.tokensets.com/',
                description: 'Manage your crypto porfolio',
                icon: './images/dapps/tokensets.com.png'
            },
            {
                name: 'Pickle Finance',
                url: 'https://pickle.finance',
                description: 'Stabilize stablecoins',
                icon: './images/dapps/pickle.finance.jpeg'
            },
            {
                name: 'Nexus Mutual',
                url: 'https://nexusmutual.io/',
                description: 'A people-powered alternative to insurance',
                icon: './images/dapps/nexusmutual.io.png'
            },
            {
                name: 'Curve',
                url: 'https://www.curve.fi/',
                description: 'Creating deep on-chain liquidity using advanced bonding curves',
                icon: './images/dapps/curve.fi.png'
            },
            {
                name: 'ShapeShift',
                url: 'https://app.shapeshift.com/',
                description: 'Track, trade, buy, borrow, and earn. Community owned. Private. Noncustodial. Multichain.',
                icon: './images/dapps/shapeshift.svg'
            },
        ],
    },
    {
        name: 'Decentralized exchanges',
        displayIos: false,
        icon: 'exchange-alt',
        color: '#bbb9f3',
        dapps: [
            {
                name: 'Uniswap',
                url: 'https://uniswap.exchange/',
                description: 'Swap and trade tokens',
                icon: './images/dapps/uniswap.exchange.png'
            },
            {
                name: 'dYdX',
                url: 'https://trade.dydx.exchange/',
                description: 'A decentralized and non-custodial trading platform offering perpetual margin, and spot trading',
                icon: './images/dapps/dydx.png'
            },
            {
                name: 'Kyber Swap',
                url: 'https://kyberswap.com/',
                description: 'A simple way to exchange tokens',
                icon: './images/dapps/kyber.network.png'
            },
            {
                name: 'Tokenlon',
                url: 'https://tokenlon.im/',
                description: 'Tokenlon DEX, powered by 0x protocol',
                icon: './images/dapps/tokenlon.png'
            },
            {
                name: '1inch',
                url: 'https://1inch.exchange',
                description: '1inch is a DEX aggregator with the best DEX prices and single point of entry for DeFi',
                icon: './images/dapps/1inch.svg'
            },
            {
                name: 'Totle Swap',
                url: 'https://totle.exchange',
                description: 'Swap any ERC-20 token at the best price',
                icon: './images/dapps/totle.jpeg'
            },
            {
                name: 'Radar Relay',
                url: 'https://relay.radar.tech/',
                description: 'Simple and secure wallet to wallet trading with the best prices in DeFi',
                icon: './images/dapps/radar_relay.png'
            },
            {
                name: 'AirSwap',
                url: 'https://instant.airswap.io/',
                description: 'Trade Tokens Easily, Securely, & Without Trading Fees',
                icon: './images/dapps/instant.airswap.io.png'
            },
            {
                name: 'Balancer',
                url: 'https://balancer.exchange/#/swap',
                description: 'Swap ERC20 tokens trustlessly across all Balancer liquidity pools.balancer.exchange',
                icon: './images/dapps/balancer.exchange.png'
            },
            {
                name: 'Matcha',
                url: 'https://matcha.xyz/',
                description: 'Simple crypto trading for everyone',
                icon: './images/dapps/matcha.png'
            },
        ]   
    },
    {
        name: 'Art & collectibles',
        displayIos: false,
        icon: 'store',
        color: '#F29D62',
        dapps: [
            {
                name: 'miime',
                url: 'https://miime.io/',
                description: 'miime is an NFT marketplace catering to blockchain gamers in Japan and across the world',
                icon: './images/dapps/miime.png'
            },
              {
                name: 'Mintable',
                url: 'https://mintable.app',
                description: 'Mintable is a next generation NFT marketplace, the easiest place to trade NFTs and create your own.',
                icon: './images/dapps/mintable.png'
            },
            {
                name: 'OpenSea',
                url: 'https://opensea.io/',
                description: 'Buy, sell, and discover rare digital items',
                icon: './images/dapps/opensea.io.png'
            },
            {
                name: 'KnownOrigin',
                url: 'https://knownorigin.io/',
                description: 'Discover and collect rare digital artwork',
                icon: './images/dapps/known_origin.png'
            },
            {
                name: 'Mintbase',
                url: 'https://mintbase.io',
                description: 'Leading non-fungible token creation tool and marketplace',
                icon: './images/dapps/mintbase.png'  
            },
            {
                name: 'Axie Infinity',
                url: 'https://axieinfinity.com/#',
                description: 'Collect and raise fantasy creatures called Axie',
                icon: './images/dapps/axieinfinity.com.png'
            },
            {
                name: 'Sorare',
                url: 'https://sorare.com/',
                description: 'Global Fantasy Football. Collect limited edition digital collectibles',
                icon: './images/dapps/sorare.jpg'
            },
            {
                name: 'Clovers Network',
                url: 'https://clovers.network',
                description: 'Discover, collect & trade cryptographic icons',
                icon: './images/dapps/clovers.png'
            },
            {
                name: 'CryptoKitties',
                url: 'https://www.cryptokitties.co/',
                description: 'Collect, breed and trade unique CryptoKitties',
                icon: './images/dapps/cryptokitties.co.png'
            },
            {
                name: 'Super Rare',
                url: 'https://superrare.co/',
                description: 'Discover and collect digital artworks',
                icon: './images/dapps/superrare.co.jpg'
            },
            {
                name: 'Rarible',
                url: 'https://rarible.com/',
                description: 'Create and sell digital collectibles',
                icon: './images/dapps/rarible.com.jpg'
            },
            {
                name: 'Makersplace',
                url: 'https://makersplace.com/',
                description: 'Collect truly rare digital artworks',
                icon: './images/dapps/makersplace.com.jpg'
            },
            {
                name: 'My Crypto Heroes',
                url: 'https://www.mycryptoheroes.net/home',
                description: 'Collect and battle heroes',
                icon: './images/dapps/my_crypto_heroes.jpg'
            },
            {
                name: 'CryptoDozer Marketplace',
                url: 'https://market.playdapp.io',
                description: 'From sales to purchases, marketplace is reliable and fast',
                icon: './images/dapps/cryptodozer.io.png'
            },
            {
                name: 'Brave Frontier Heroes',
                url: 'https://bravefrontierheroes.com',
                description: 'Use heroes in turn-based quests and battles.',
                icon: './images/dapps/brave_frontier_heroes.png'
            },
           {
                name: 'Blockchain Cuties',
                url: 'https://blockchaincuties.com/',
                description: 'Cuties are cats, dogs, and bears that go on adventures.',
                icon: './images/dapps/blockchaincuties.com.png'
            },
            {
                name: 'F1 Delta Time',
                url: 'https://www.f1deltatime.com/',
                description: 'Own F1 Delta collectibles & stake to earn',
                icon: './images/dapps/f1deltatime.com.png'
            },
            {
                name: 'MegaCryptoPolis',
                url: 'https://mcp3d.com',
                description: 'Collect land and build a blockchain city.',
                icon: './images/dapps/megacryptopolis.png'
            },
        ]   
    },
    {
        name: 'Earn crypto',
        displayIos: false,
        icon: 'credit-card',
        color: '#1098FC',
        dapps: [
            {
                name: 'Gitcoin',
                url: 'https://gitcoin.co/',
                description: 'Get paid in crypto for working on open source projects',
                icon: './images/dapps/gitcoin.co.png'
            },
            {
                name: 'Local Ethereum',
                url: 'https://localethereum.com/',
                description: 'Get ETH peer-to-peer in over 130 countries',
                icon: './images/dapps/localethereum.com.png'
            },
            {
                name: 'Cent',
                url: 'https://beta.cent.co/',
                description: 'Earn ETH by creating content',
                icon: './images/dapps/cent.co.png'
            },
            {
                name: 'Mirror',
                url: 'https://mirror.xyz',
                description: 'Mirror—a crypto native creative suite, with crowdfunding & publishing tools for creators. ',
                icon: './images/dapps/mirror.png'
             },
        ],
    },
    {
        name: 'Developer tools',
        displayIos: false,
        icon: 'wrench',
        color: '#838c96',
        dapps: [
            {
                name: 'Chainlist',
                url: 'https://chainlist.org/',
                description: 'A site for adding additional blockchains to your wallet',
                icon: './images/dapps/chainlist.png'
            },
            {
                name: 'Ethereum Name Service',
                url: 'https://app.ens.domains/',
                description: 'Have one name for all your cryptocurrency wallets, a decentralised website, & more',
                icon: './images/dapps/ens.jpg'
            },
            {
                name: 'Gnosis Safe Multisig',
                url: 'https://gnosis-safe.io/app/#/',
                description: 'Manage digital assets collectively',
                icon: './images/dapps/gnosis_safe.png'
            },
            {
                name: 'Microsponsors',
                url: 'https://microsponsors.io',
                description: 'Microsponsors is an auction house for tokenized Time',
                icon: './images/dapps/microsponsors.png'
            },
            {
                name: 'MythX',
                url: 'https://mythx.io/',
                description: 'Smart contract security service for Ethereum',
                icon: './images/dapps/mythx.png'
            },
        ]   
    },
    {
        name: 'Social',
        displayIos: false,
        icon: 'comment-alt',
        color: '#F8CD45',
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
        ],
    },
    {
        name: 'Markets',
        displayIos: false,
        icon: 'newspaper',
        color: '#FF849A',
        dapps: [
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
            {
                name: 'CoinGecko',
                url: 'https://www.coingecko.com/en',
                description: 'Cryptocurrency Prices & Market Capitalization',
                icon: './images/dapps/coingecko.com.png'
            },
            {
                name: 'DeCrypt',
                url: 'https://decrypt.co/',
                description: 'News about Ethereum, Bitcoin and Web3',
                icon: './images/dapps/decrypt.co.jpg'
            },
            {
                name: 'Defipulse',
                url: 'https://defipulse.com/',
                description: 'The analytics + rankings hub for DeFi',
                icon: './images/dapps/defipulse.com.png'
            },
        ],
    }
];

// hide any of the above on iOS when displayIos is false
const filtered = categories.filter(({ displayIos = true }) => !(isIOS && !displayIos));

export default filtered;
