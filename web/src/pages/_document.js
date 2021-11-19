import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();

    const _renderPage = ctx.renderPage;
    ctx.renderPage = () =>
      _renderPage({
        enhanceApp: (App) => (props) => (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        <style id="server-side-styles">{registry.toString()}</style>,
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
