import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <title>CodeGeek</title>
          <meta name="Adain" content="...people, technologies and possibilities." />
          <link rel="Adain Logo" href="/codegeek.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins&display=swap" rel="stylesheet"/>
  </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
