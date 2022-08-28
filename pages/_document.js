// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='keywords' content='Giavinh, GV79, Giavinh Lam, Gia Vinh Lam, Gia Vinh, University of Guelph' />
          <meta name='author' content='Giavinh Lam' />

          {/* Facebook Meta Tags */}
          <meta property='og:url' content='https://giavinhlam.com/' key='ogurl' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Giavinh Lam' key='ogtitle' />
          <meta property='og:site_name' content="Giavinh Lam's Portfolio" key='ogsitename' />
          <meta
            property='og:description'
            content="Giavinh Lam is a software developer working with languages like JavaScript (React.js) and Java. He graduated with a Bachelor's in Computer Engineering at the University of Guelph."
          />
          <meta property='og:image' content='https://giavinhlam.com/images/abstract/portfolio.png' key='ogimage' />

          {/* Twitter Meta Tags */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='twitter:domain' content='https://giavinhlam.com' />
          <meta property='twitter:url' content='https://giavinhlam.com' />
          <meta name='twitter:title' content='Giavinh Lam' />
          <meta
            name='twitter:description'
            content="Giavinh Lam is a software developer working with languages like JavaScript (React.js) and Java. He graduated with a Bachelor's in Computer Engineering at the University of Guelph."
          />
          <meta name='twitter:image' content='https://giavinhlam.com/images/abstract/portfolio.png' />

          {/* Links */}
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
