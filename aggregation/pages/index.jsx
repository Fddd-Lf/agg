import { useRef, useState } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Video from "@/components/index/body/video";
import Tool from "@/components/index/body/tool";
import AiDraw from "@/components/index/body/aiDraw";
import AIAnswer from "@/components/index/body/aIAnswer";
import Case from "@/components/index/body/case";
import DesignScene from "@/components/index/body/designScene";
import Synopsis from "@/components/index/body/synopsis";
import { Typography } from "@arco-design/web-react";
import { dataConfig, fetchAggregationData } from "@/utils/getAggregationData";
const { Paragraph } = Typography;
function Home(data) {
  const Box = styled.div`
    background-color: rgb(42, 41, 31);
    width: 100%;
    overflow: hidden;
  `;
  const BoxDiv = useRef(null);
  console.log(data.data, "页面渲染数据1232132");

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
        <Video data={data.data.videoBanner} />
        <Tool data={data.data.designTools} />
        <AiDraw data={data.data.highQualityPhoto} />
        <AIAnswer data={data.data.exampleVideo} />
        <Case data={data.data.exampleComment} />
        <DesignScene data={data.data.inspirationDisplay} />
        <Synopsis data={data.data.CTLIntroduction} />
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
    })
  );

  const data = Object.assign({}, ...results);
  return { props: { data } };
}
