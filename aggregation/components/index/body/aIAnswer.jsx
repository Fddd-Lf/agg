import React, { useEffect, useState, useRef, forwardRef } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function AIAnswer() {
  const Box = styled.div`
    margin-top: 200px;
  `;
  const homeRef = useRef(null);
  const headRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    let tl;
    let ScrollTrigger;
    if (typeof window !== "undefined") {
      import("gsap/ScrollTrigger").then((module) => {
        ScrollTrigger = module.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: homeRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
            scrub: false,
            duration: 3,
          },
        });
        tl.fromTo(
          headRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
        tl.fromTo(
          bodyRef?.current?.querySelector("#tabs"),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=1"
        );
        tl.fromTo(
          bodyRef?.current?.querySelector("video"),
          { opacity: 0, scale: 0.3 },
          {
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "-=1"
        );
      });
    }
  }, []);

  return (
    <Box ref={homeRef}>
      <Head ref={headRef} />
      <Body ref={bodyRef} />
    </Box>
  );
}
export default AIAnswer;

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
  const Btn = styled.div`
    margin-top: 48px;
    margin-bottom: 64px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.25);
    display: inline-block;
    padding: 16px 86px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #fbf6e5;
    cursor: pointer;
  `;

  return (
    <HeadBox ref={ref}>
      <Title>AI绘画 梦境成真</Title>
      <Description>
        AI智能生成，输入简单的文案或图片，即可快速生成优质高清图片
      </Description>
      <Btn>开始使用</Btn>
    </HeadBox>
  );
});
Head.displayName = "Head";
const Body = forwardRef((props, ref) => {
  const Box = styled.div`
    text-align: center;
  `;
  const Tabs = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
  `;
  const TabsItem = styled.div`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${({ isActive }) =>
      isActive ? "#FBF6E5" : "rgba(255, 255, 255, 0.25)"};
    border-bottom: ${({ isActive }) =>
      isActive ? "1px solid #FBF6E5" : "1px solid rgba(255, 255, 255, 0.1)"};
    margin-right: 16px;
    cursor: pointer;
    padding: 0 25px 7px;
    &:last-child {
      margin-right: 0;
    }
  `;
  const Video = styled.video`
    width: 100%;
    height: 691px;
  `;
  const [value, setValue] = useState(0);

  const titles = [
    {
      title: "智能创作",
      video:
        "https://img.aiiiin.com/ai/helpVideo/2024-11-29/db2d1055a50046cfb3a59b7e9dff0e12.mp4",
    },
    {
      title: "编辑重绘",
      video:
        "https://img.aiiiin.com/ai/helpVideo/2024-11-29/52b31b09cf9941619bebf05362e25288.mp4",
    },
  ];
  return (
    <Box ref={ref}>
      <Tabs id="tabs">
        {titles.map((item, index) => (
          <TabsItem
            key={index}
            isActive={value === index}
            onClick={() => setValue(index)}
          >
            {item.title}
          </TabsItem>
        ))}
      </Tabs>
      <Video src={titles[value].video} autoPlay loop muted></Video>
    </Box>
  );
});
Body.displayName = "Body";
