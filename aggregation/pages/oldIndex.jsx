import {  useRef, useState } from "react";
import HeadPage from "../components/index/head";
import Content from "@/components/index/body";
import styled from "@emotion/styled";
import Head from "next/head";
import FloatBox from "@/components/index/floatBox";

import {  Typography } from "@arco-design/web-react";
import { dataConfig, fetchAggregationData } from "@/utils/getAggregationData";
const { Paragraph } = Typography;
function Home(data) {
  const [navigation, setNavigation] = useState([
    {
      name: "首页",
      href:
        process.env.NODE_ENV == "production"
          ? "https://www.aiiiin.com"
          : "http://test.caotanghuali.com",
      isJump: true,
      id: 1,
    },
    {
      name: "AI工具",
      href: "#",
      isJump: false,
      id: 2,
      children: [
        {
          name: "AI设计",
          href: "/newAICreation",
          isJump: true,
          id: "2a",
        },
        {
          name: "AI绘制",
          href: "/newAICreation?jump=drawing",
          isJump: true,
          id: "2b",
        },
      ],
    },
    {
      name: "创作社区",
      // href: "/communal",
      href:
        process.env.NODE_ENV == "production"
          ? "https://www.aiiiin.com"
          : "http://test.caotanghuali.com",
      isJump: true,
      id: 3,
    },
    {
      name: "需求广场",
      href: "#",
      isJump: false,
      id: 4,
      children: [
        {
          name: "找模型",
          href: "/aiStore",
          isJump: true,
          id: "4a",
        },
        {
          name: "找需求",
          href: "/designCampaign",
          isJump: true,
          id: "4b",
        },
        {
          name: "找设计师",
          href: "/demandDesign",
          isJump: true,
          id: "4c",
        },
      ],
    },
    {
      name: "关于我们",
      href: "#",
      isJump: false,
      id: 5,
      children: [
        {
          name: "公司介绍",
          href: "",
          isJump: false,
          id: "5a",
        },
        {
          name: "帮助中心",
          href: "/helper",
          isJump: true,
          id: "5b",
        },
        // { name: "商务合作", href: "#", current: false, id: "5c" },
        // { name: "APP下载", href: "#", current: false, id: "5d" },
      ],
    },
  ]);

  const Box = styled.div`
    background-color: #1a1a1a;
    width: 100%;
    overflow: hidden;
  `;
  const BoxDiv = useRef(null);
  // console.log(data.data, "页面渲染数据");

  const contentData = {
    centerBanner: data.data.centerBanner,
    DesignTools: data.data.DesignTools,
    ModelTrain: data.data.ModelTrain,
    ArticleDisplay: data.data.ArticleDisplay,
    ModelDisplay: data.data.ModelDisplay,
    DesignCampaign: data.data.DesignCampaign,
    ActivityDisplay: data.data.ActivityDisplay,
    BuildingDesign: data.data.BuildingDesign,
    LandscapeDesign: data.data.LandscapeDesign,
    InteriorDesign: data.data.InteriorDesign,
    EngineeringDesign: data.data.EngineeringDesign,
    CTLIntroduction: data.data.CTLIntroduction,
  };
  return (
    <div
      id="Box"
      style={{ position: "relative", height: "100%", overflow: "hidden" }}
      ref={BoxDiv}
    >
      <Head>
        <title>草图里-AI驱动的在线装修设计平台</title>
      </Head>
      <Box ref={BoxDiv}>
        <HeadPage
          bannerList={data.data.bannerList}
          littleBanner={data.data.littleBanner}
        ></HeadPage>
        <Content data={contentData}></Content>
        <FloatBox></FloatBox>
      </Box>
    </div>
  );
}

export default Home;

export async function getServerSideProps() {
  const results = await Promise.all(
    dataConfig.map(async (config) => {
      const data = await fetchAggregationData(config.key);
      return { [config.name]: data[config.key] };
    }),
  );

  const data = Object.assign({}, ...results);
  return { props: { data } };
}
