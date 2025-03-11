
## Getting Started

First, run the development server:

```bash
# 本地启动
npm run dev

# 正式环境打包
npm run build

#测试环境打包
npm run test

 ./build.ps1

# 打包后运行(需打包后执行)
npm start
```

//
[nextjs文档写法]
[
  <div>
    Hello world
    <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
    <style global jsx>{`
      body {
        background: black;
      }
    `}</style>
  </div>
]

//
[服务端渲染方法]
[
  在服务端渲染时获取数据
 export async function getServerSideProps() {
   const res = await getHomeList({
    PageIndex: 1,
    PageSize: 8,
    LoadingTime: "2023-12-30",
    Category: "",
    SortNo: 4, //不传则随机排序
  });
  return { props: { data: res.Datas } };
 }
]


//
[采用rem！]
css采用emotion[https://gitee.com/mirrors/emotion?utm_source=alading&utm_campaign=repo]
推荐插件[vscode-styled-components]
[勿传组件进emotion！！]
示例:[
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;

    <Title>
      Hello World!
    </Title>
`;]

//
_app.js文件主要用于应用级别的配置，比如全局状态管理、错误处理、页面布局等

//
_document.js这个文件允许你控制整个页面的结构和 <head> 部分的内容

//
ui框架arco.design[https://www.arco.design/]

//
全局状态管理采用zustand[https://awesomedevin.github.io/zustand-vue/docs/introduce/start/zustand]

//
项目采用pages路由示例[在pages文件创建about/index.jsx，可以直接在http://localhost:3000/about访问]

//
组件统一放在[components文件夹]

//
静态资源统一放在[static文件夹]

//
[getServerSideProps()]方法用于数据需要服务端渲染时调用，不可在组件内使用，并且不能调用客户端的方法，示例看pages/index.jsx 。方法内的打印只能在终端查看，页面无法看到。getServerSideProps 是 Next.js 的内置方法，它会在每次页面请求时自动被框架调用，无需手动触发。


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


