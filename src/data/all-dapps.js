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
                icon: './images/dapps/coinbase.com.png'
            },
            {
                name: 'Wyre',
                url: 'https://dash.sendwyre.com/',
                description: 'Get ETH using your bank account or payment card',
                icon: './images/dapps/sendwyre.com.png'
            },
            {
                name: 'Changelly',
                url: 'https://changelly.com/',
                description: 'Purchase assets with credit card or exchange over 140 cryptos',
                icon: './images/dapps/changelly.com.png'
            },
            {
                name: 'Local Ethereum',
                url: 'https://localethereum.com/',
                description: 'Get ETH peer-to-peer in over 130 countries',
                icon: './images/dapps/localethereum.com.png'
            },
            {
                name: 'Simplex',
                url: 'https://simplex.com/',
                description: 'Buy ETH using your credit card',
                icon: './images/dapps/simplex.com.png'
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
                icon: './images/dapps/bounties.network.png'
            },
            {
                name: 'Cent',
                url: 'https://beta.cent.co/',
                description: 'Earn ETH by creating content',
                icon: './images/dapps/beta.cent.co.png'
            },
            {
                name: 'Gitcoin',
                url: 'https://gitcoin.co/',
                description: 'Get paid in crypto for working on open source projects',
                icon: './images/dapps/gitcoin.co.png'
            },
            {
                name: 'Pool Together',
                url: 'https://www.pooltogether.us/',
                description: 'Pool your ETH and get a chance to win the interest',
                icon: './images/dapps/pooltogether.us.png'
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
        //   Currently having problems with thumbnail
        //   
        //    {
        //         name: 'Snail Farm',
        //         url: 'https://snailking.github.io/snailfarm3/',
        //         description: 'An Ethereum forest adventure',
        //         icon: './images/dapps/snailking.github.io.png'
        //     },
            {
                name: 'CryptoDozer',
                url: 'https://cryptodozer.io/',
                description: 'A blockchain-powered arcade game',
                icon: './images/dapps/cryptodozer.io.png'
            },
           {
                name: 'Blockchain Cuties',
                url: 'https://blockchaincuties.com/',
                description: 'A multi-blockchain game with collectibles',
                icon: './images/dapps/blockchaincuties.com.png'
            },
            {
                name: 'World War Goo',
                url: 'https://ethergoo.io/',
                description: 'A competitive crypto idle game',
                icon: './images/dapps/ethergoo.io.png'
            },
            {
                name: 'MLB Champions',
                url: 'https://mlbcryptobaseball.com/welcome',
                description: 'Collect official MLB Digital Figures',
                icon: './images/dapps/mlbcryptobaseball.com.png'
            },
            {
                name: 'Dice 2 Win',
                url: 'https://dice2.win/',
                description: 'Classic games run on open source contracts that pay ETH',
                icon: './images/dapps/dice2.win.png'
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
                name: 'Peepeth',
                url: 'https://peepeth.com/welcome',
                description: 'A blockchain-powered social network',
                icon: './images/dapps/peepeth.com.png'
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
                name: 'Gitcoin Kudos',
                url: 'https://gitcoin.co/kudos/',
                description: 'A new way to show appreciation and build relationships',
                icon: './images/dapps/gitcoin.co.png'
            },
            {
                name: 'Cent',
                url: 'https://beta.cent.co/',
                description: 'Earn ETH by creating content',
                icon: './images/dapps/beta.cent.co.png'
            },
            {
                name: 'OpenSea',
                url: 'https://opensea.io/',
                description: 'Buy, sell, and discover rare digital items',
                icon: './images/dapps/opensea.io.png'
            },
            {
                name: 'Ujo Music',
                url: 'https://www.ujomusic.com/',
                description: 'Connecting artists and fans directly via Ethereum',
                icon: './images/dapps/ujomusic.com.png'
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
                name: 'Airswap',
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
                url: 'https://cdp.makerdao.com/',
                description: 'Generate DAI by locking up your ETH',
                icon: './images/dapps/cdp.makerdao.com.png'
            },
            {
                name: 'Dharma',
                url: 'https://www.dharma.io/',
                description: 'Lend or borrow ETH quickly & easily',
                icon: './images/dapps/dharma.io.png'
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
                name: 'Zerion',
                url: 'https://beta.zerion.io/',
                description: 'Zerion is your gateway to DeFi. Watch the portfolio, trade, lend and borrow assets in a single place!',
                icon: './images/dapps/zerion.png'
            }
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
                name: 'Breaker Mag',
                url: 'https://breakermag.com/',
                description: 'Telling stories in the blockchain space',
                icon: './images/dapps/breakermag.com.png'
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
