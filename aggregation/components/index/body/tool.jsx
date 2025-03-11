import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Tool() {
  const info = {
    title: "全能AI设计，专业多元",
    content:
      "全能AI设计工具，集专业与多元功能于一身，为设计领域带来高效创作新体验。",
    tip: "支持文/图 生图片",
  };
  const arr = [
    {
      index: "01",
      title: "图&文生图",
      content:
        "图像二绘与自选风格再加工，为建筑设计持续激发新灵感，文字内容自动生成图像，灵活应用于家装设计和图形创作。",
    },
    {
      index: "02",
      title: "编辑重绘",
      content:
        "图像二绘与自选风格再加工，为建筑设计持续激发新灵感，文字内容自动生成图像，灵活应用于家装设计和图形创作。",
    },
    {
      index: "03",
      title: "线稿成图",
      content:
        "图像二绘与自选风格再加工，为建筑设计持续激发新灵感，文字内容自动生成图像，灵活应用于家装设计和图形创作。",
    },
  ];

  const Box = styled.div`
    background: url("/首页光效切图@2x.png") no-repeat;
  `;

  return (
    <Box>
      <ToolInfo info={info} />
      <ToolList arr={arr} />
    </Box>
  );
}

export default Tool;

function ToolInfo({ info }) {
  const Box = styled.div`
    padding-top: 160px;
    position: relative;
  `;

  const Title = styled.div`
    font-size: 64px;
    line-height: 72px;
    text-align: center;
    color: #fbf6e5;
    opacity: 0;
  `;

  const Content = styled.div`
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: rgba(255, 255, 255, 0.65);
    margin-top: 24px;
    opacity: 0;
  `;

  const Tip = styled.div`
    color: rgba(255, 255, 255, 0.45);
    font-size: 16px;
    line-height: 24px;
    position: absolute;
    top: 160px;
    left: 204px;
  `;

  const title = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    let tl;
    let ScrollTrigger;
    if (typeof window !== "undefined") {
      import("gsap/ScrollTrigger").then((module) => {
        ScrollTrigger = module.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        tl = gsap.timeline({
          scrollTrigger: {
            trigger: title.current,
            start: "top 80%",
            end: "top 80%",
            scrub: 1, // 链接到滚动条，延迟滚动条1s
            duration: 3, // 持续时间
            once: true,
          },
        });

        tl.to(title.current, { opacity: 1, ease: "power1.out" });
        tl.to(content.current, { opacity: 1, ease: "power1.out" }, "<"); // 上一个动画开始时插入动画
      });
    }
    return () => {};
  }, []);

  return (
    <Box>
      <Title ref={title}>{info.title}</Title>
      <Content ref={content}>{info.content}</Content>
      <Tip>{info.tip}</Tip>
    </Box>
  );
}

function ToolList({ arr }) {
  const Box = styled.div`
    padding: 0px 48px 0 204px;
  `;

  const Item = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 160px;
  `;
  const ArrItem = styled.div`
    color: rgba(255, 255, 255, 0.65);
    width: 312px;
  `;
  const ItemImg = styled.div`
    flex: 1;
    height: 675px;
    background-color: #346692;
    margin-left: 156px;
  `;

  const Index = styled.div`
    font-size: 36px;
    line-height: 44px;
  `;
  const Title = styled.div`
    font-size: 36px;
    line-height: 44px;
    margin-top: 64px;
  `;
  const Content = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    margin-top: 24px;
  `;
  const CreateBtn = styled.div`
    margin-top: 48px;
    border: 1px solid red;
    display: inline-block;
    padding: 16px 96px;
    font-size: 16px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    cursor: pointer;
  `;

  const itemRefs = useRef([]); // 存储多个 itemRef

  useEffect(() => {
    // console.log(itemRefs, "ItemRef.current");

    let tl;
    let ScrollTrigger;
    if (typeof window !== "undefined") {
      import("gsap/ScrollTrigger").then((module) => {
        ScrollTrigger = module.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        itemRefs.current.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });
    }
    return () => {};
  }, []);

  return (
    <Box>
      {arr.map((item, index) => {
        return (
          <Item key={item.index} ref={(el) => (itemRefs.current[index] = el)}>
            <ArrItem>
              <Index>{item.index}</Index>
              <Title>{item.title}</Title>
              <Content>{item.content}</Content>
              <CreateBtn>立即创作</CreateBtn>
            </ArrItem>
            <ItemImg>{item.title}</ItemImg>
          </Item>
        );
      })}
    </Box>
  );
}
