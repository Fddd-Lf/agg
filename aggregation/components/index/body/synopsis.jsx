import React, { useEffect, useState, useRef, forwardRef } from "react";
import styled from "@emotion/styled";
function Synopsis() {
  const Box = styled.div`
    padding: 234px 155px 166px;
    background: url("/底部底图切图@2x(2).jpg") no-repeat center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: contain;
  `;
  const Btn = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.25);
    display: inline-block;
    padding: 16px 96px;
    cursor: pointer;
    margin-top: 64px;
    color: #fbf6e5;
    border-radius: 4px;
  `;

  const arr = [
    {
      icon:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
      content:
        "操作流程简便，无需设计基础，即使是零基础的小白用户也能轻松上手，快速变身设计师，开启创意设计之旅。",
    },
    {
      icon:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
      content:
        "支持多平台兼容，无论您使用网页版、App还是小程序，都能随时随地轻松玩转AI，享受便捷智能服务。",
    },
    {
      icon:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
      content:
        "高达千万量级的图形训练，系统能够快速精准地创作出用户所想的高质量图片，高效且可靠。",
    },
  ];

  return (
    <Box>
      <Head />
      <Body arr={arr} />
      <Btn>立即体验</Btn>
    </Box>
  );
}

export default Synopsis;

const Head = forwardRef((props, ref) => {
  const HeadBox = styled.div`
    text-align: center;
  `;
  const Title = styled.div`
    font-size: 52px;
    line-height: 52px;
    color: #fbf6e5;
  `;
  const Description = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.65);
    margin-top: 24px;
  `;

  return (
    <HeadBox ref={ref}>
      <Title>AI赋能多维设计场景</Title>
      <Description>
        建筑/室内/景观/工程设计全行业覆盖，AI智能驱动高效生图，赋能高效标准化设计
      </Description>
    </HeadBox>
  );
});
Head.displayName = "Head";

const Body = forwardRef(({ arr }, ref) => {
  const BodyBox = styled.div`
    padding: 0 200px;
    display: flex;
    margin-top: 100px;
  `;
  const Icon = styled.img`
    width: 48px;
    height: 48px;
  `;
  const Content = styled.div`
    font-family: HarmonyOS Sans SC;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.65);
  `;

  const Item = styled.div`
    padding-right: 216px;
    &:last-of-type {
      padding-right: 0;
    }
  `;
  return (
    <BodyBox ref={ref}>
      {arr.map((item, index) => {
        return (
          <Item key={index}>
            <Icon src={item.icon} />
            <Content>{item.content}</Content>
          </Item>
        );
      })}
    </BodyBox>
  );
});
Body.displayName = "Body";
