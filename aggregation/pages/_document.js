import Document, { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="../static/启动图标.svg" />
        <meta
          name="description"
          content="草图里是集装修、建筑、景观设计于一体的在线AI创作工具，也是创作、交易、施工于一体的装修行业平台。一键生图，秒出高清AI设计图，提供海量装修效果图及装修设计模型方案，汇聚知名室内设计师，协助你找到合适的装修设计方案。"
        />
        <meta
          name="keywords"
          content="装修设计软件,Ai设计工具,装修设计软件,装修设计方案,在线设计平台"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
