import { Html, Head, Main, NextScript } from "next/document"

export default function Document () {
  return (
    <Html>
      <Head>
        <title>TetherUSD</title>
        <meta name="title" content="TetherUSD"/>
        <meta name="description" content="Tether USD Coin is a Community created for Stablecoin to be pegged"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://mytetherusdcoin.vercel.app/"/>
        <meta property="og:title" content="TetherUSD"/>
        <meta property="og:description" content="Tether USD Coin is a Community created for Stablecoin to be pegged"/>
        <meta property="og:image" content="https://foxcoin.vercel.app/assets/LandingPage.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://foxcoin.vercel.app/"/>
        <meta property="twitter:title" content="FoxCoin"/>
        <meta property="twitter:description" content="Tether USD Coin is a Community created for Stablecoin to be pegged"/>
        <meta property="twitter:image" content="https://foxcoin.vercel.app/assets/LandingPage.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
