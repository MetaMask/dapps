import { library } from '@fortawesome/fontawesome-svg-core'
import { faCreditCard, faHandHoldingHeart,faDice, faCommentAlt, faMoneyBillWave, faNewspaper  } from '@fortawesome/free-solid-svg-icons'
library.add(faCreditCard, faHandHoldingHeart, faDice, faCommentAlt, faMoneyBillWave, faNewspaper)


const categories =  [
	{
        name: 'Buy Crypto',
        icon: 'credit-card',
        color: '#1098FC',
        dapps: [
            {
                name: 'Coinbase',
                url: 'https://www.coinbase.com/buy-ethereum',
                description: 'Coinbase makes it simple to buy, sell, and hold ETH',
                icon: 'https://api.faviconkit.com/coinbase.com/64'
            },
            {
                name: 'Wyre',
                url: 'https://dash.sendwyre.com/',
                description: 'Get ETH using your bank account or payment card',
                icon: 'https://api.faviconkit.com/sendwyre.com/64'
            },
            {
                name: 'Changelly',
                url: 'https://changelly.com/',
                description: 'Purchase assets with credit card or exchange over 140 cryptos',
                icon: 'https://api.faviconkit.com/changelly.com/64'
            },
            {
                name: 'Local Ethereum',
                url: 'https://localethereum.com/',
                description: 'Get ETH peer-to-peer in over 130 countries',
                icon: 'https://api.faviconkit.com/localethereum.com/64'
            },
            {
                name: 'Simplex',
                url: 'https://simplex.com/',
                description: 'Buy ETH using your credit card',
                icon: 'https://api.faviconkit.com/simplex.com/64'
            },
        ],
    },
    {
        name: 'Earn Crypto',
        icon: 'hand-holding-heart',
        color: '#E06470',
        dapps: [
            {
                name: 'The Bounties Network',
                url: 'https://bounties.network/',
                description: 'Get paid for doing work in any domain',
                icon: 'https://api.faviconkit.com/bounties.network/64'
            },
            {
                name: 'Cent',
                url: 'https://beta.cent.co/',
                description: 'Earn ETH by creating content',
                icon: 'https://api.faviconkit.com/beta.cent.co/64'
            },
            {
                name: 'Gitcoin',
                url: 'https://gitcoin.co/',
                description: 'Get paid in crypto for working on open source projects',
                icon: 'https://api.faviconkit.com/gitcoin.co/64'
            },
            {
                name: 'Pool Together',
                url: 'https://www.pooltogether.us/',
                description: 'Pool your ETH and get a chance to win the interest',
                icon: 'https://api.faviconkit.com/pooltogether.us/64'
            },
        ],
    },
    {
        name: 'Games',
        icon: 'dice',
        color: '#F8883B',
        dapps: [
            {
                name: 'Axie Infinity',
                url: 'https://axieinfinity.com/#',
                description: 'Collect and raise fantasy creatures called Axie',
                icon: 'https://api.faviconkit.com/axieinfinity.com/64'
            },
            {
                name: '0x Universe',
                url: 'https://0xuniverse.com/',
                description: 'Build spaceships, explore the galaxy, conquer planets',
                icon: 'https://api.faviconkit.com/0xuniverse.com/64'
            },
            {
                name: 'CryptoKitties',
                url: 'https://www.cryptokitties.co/',
                description: 'Collect, breed and trade unique CryptoKitties',
                icon: 'https://api.faviconkit.com/cryptokitties.co/64'
            },
        //   Currently having problems with thumbnail
        //   
        //    {
        //         name: 'Snail Farm',
        //         url: 'https://snailking.github.io/snailfarm3/',
        //         description: 'An Ethereum forest adventure',
        //         icon: 'https://api.faviconkit.com/snailking.github.io/64'
        //     },
            {
                name: 'CryptoDozer',
                url: 'https://cryptodozer.io/',
                description: 'A blockchain-powered arcade game',
                icon: 'https://api.faviconkit.com/cryptodozer.io/64'
            },
           {
                name: 'Blockchain Cuties',
                url: 'https://blockchaincuties.com/',
                description: 'A multi-blockchain game with collectibles',
                icon: 'https://api.faviconkit.com/blockchaincuties.com/64'
            },
            {
                name: 'World War Goo',
                url: 'https://ethergoo.io/',
                description: 'A competitive crypto idle game',
                icon: 'https://api.faviconkit.com/ethergoo.io/64'
            },
            {
                name: 'MLB Champions',
                url: 'https://mlbcryptobaseball.com/welcome',
                description: 'Collect official MLB Digital Figures',
                icon: 'https://api.faviconkit.com/mlbcryptobaseball.com/64'
            },
            {
                name: 'Dice 2 Win',
                url: 'https://dice2.win/',
                description: 'Classic games run on open source contracts that pay ETH',
                icon: 'https://api.faviconkit.com/dice2.win/64'
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
                icon: 'https://api.faviconkit.com/3box.io/64'
            },
            {
                name: 'Peepeth',
                url: 'https://peepeth.com/welcome',
                description: 'A blockchain-powered social network',
                icon: 'https://api.faviconkit.com/peepeth.com/64'
            },
            {
                name: 'Kauri',
                url: 'https://kauri.io/',
                description: 'Ethereum dev content in a decentralized knowledge base',
                icon: 'https://api.faviconkit.com/kauri.io/64'
            },
            {
                name: 'FOAM',
                url: 'https://map.foam.space',
                description: 'Create, curate, and search a consensus-driven map',
                icon: 'https://api.faviconkit.com/foam.space/64'
            },
            {
                name: 'Aragon',
                url: 'https://aragon.org/discover/',
                description: 'Create and manage communities, companies, organizations',
                icon: 'https://api.faviconkit.com/aragon.org/64'
            },
            {
                name: 'Gitcoin Kudos',
                url: 'https://gitcoin.co/kudos/',
                description: 'A new way to show appreciation and build relationships',
                icon: 'https://api.faviconkit.com/gitcoin.co/64'
            },
            {
                name: 'Cent',
                url: 'https://beta.cent.co/',
                description: 'Earn ETH by creating content',
                icon: 'https://api.faviconkit.com/beta.cent.co/64'
            },
            {
                name: 'OpenSea',
                url: 'https://opensea.io/',
                description: 'Buy, sell, and discover rare digital items',
                icon: 'https://api.faviconkit.com/opensea.io/64'
            },
            {
                name: 'Ujo Music',
                url: 'https://www.ujomusic.com/',
                description: 'Connecting artists and fans directly via Ethereum',
                icon: 'https://api.faviconkit.com/ujomusic.com/64'
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
                icon: 'https://api.faviconkit.com/uniswap.exchange/64'
            },
            {
                name: 'Airswap',
                url: 'https://instant.airswap.io/',
                description: 'Find Tokens, Get Best Prices, & Make Instant Trades',
                icon: 'https://api.faviconkit.com/instant.airswap.io/64'
            },
            {
                name: 'Compound',
                url: 'https://app.compound.finance/',
                description: 'Earn interest on your ETH',
                icon: 'https://api.faviconkit.com/compound.finance/64'
            },
            {
                name: 'MakerDAO CDP',
                url: 'https://cdp.makerdao.com/',
                description: 'Generate DAI by locking up your ETH',
                icon: 'https://api.faviconkit.com/cdp.makerdao.com/64'
            },
            {
                name: 'Dharma',
                url: 'https://www.dharma.io/',
                description: 'Lend or borrow ETH quickly & easily',
                icon: 'https://api.faviconkit.com/dharma.io/64'
            },
            {
                name: 'Idex',
                url: 'https://idex.market/eth/plu',
                description: 'Popular decentralized exchange',
                icon: 'https://api.faviconkit.com/idex.market/64'
            },
            {
                name: 'Kyber',
                url: 'https://kyber.network/',
                description: 'A simple way to exchange tokens',
                icon: 'https://api.faviconkit.com/kyber.network/64'
            },
            // Currently having problems with thumbnail
            // 
            // {
            //     name: 'Bancor',
            //     url: 'https://www.bancor.network/',
            //     description: 'A simple way to exchange tokens',
            //     icon: 'https://api.faviconkit.com/www.bancor.network/64'
            // },
            {
                name: 'Fork Delta',
                url: 'https://forkdelta.app/',
                description: 'A decentralized trading platform',
                icon: 'https://api.faviconkit.com/forkdelta.app/64'
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
                icon: 'https://api.faviconkit.com/civil.co/64'
            },
            {
                name: 'Popula',
                url: 'https://popula.com/',
                description: 'News powered by Civil and Ethereum',
                icon: 'https://api.faviconkit.com/popula.com/64'
            },
            {
                name: 'Breaker Mag',
                url: 'https://breakermag.com/',
                description: 'Telling stories in the blockchain space',
                icon: 'https://api.faviconkit.com/breakermag.com/64'
            },
            {
                name: 'CoinDesk',
                url: 'https://www.coindesk.com/',
                description: 'Blockchain news',
                icon: 'https://api.faviconkit.com/coindesk.com/64'
            },
        ],
    }
];


export default categories;