import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="#" rel="shortcut icon" />
          <link
            href="#"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="#"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="#"
          />
          <link rel="manifest" href="#" />
        </Head>
        <body
          className="font-poppins font-normal tracking-wide bg-white dark:bg-gray-900 text-gray-700
         dark:text-white selection:bg-green selection:text-white dark:selection:bg-mustard"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
