import React, { useEffect, useRef, forwardRef } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";

function Case() {
  const info = {
    title: "AI工具赋能优秀案例",
    content:
      "海量优质项目需求，AI工具赋能，助力打造众多优秀案例，一键轻松接单，快速开启赚钱之旅。",
    tip: "支持室内/建筑/景观竞选",
  };

  const imageSrc = [
    {
      src:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
      user: {
        name: "用户1",
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
        tag: "21321",
        value:
          "“草图里的生图效果十分惊艳，生图质量与市面主流渲染器渲染出的效果图无异，但出图效率却领先十倍百倍”",
      },
    },
    {
      src:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
      user: {
        name: "用户2",
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp",
        tag: "21321",
        value:
          "“草图里的生图效果十分惊艳，生图质量与市面主流渲染器渲染出的效果图无异，但出图效率却领先十倍百倍”",
      },
    },
    {
      src:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
      user: {
        name: "用户3",
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
        tag: "21321",
        value:
          "“草图里的生图效果十分惊艳，生图质量与市面主流渲染器渲染出的效果图无异，但出图效率却领先十倍百倍”",
      },
    },
    {
      src:
        "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
      user: {
        name: "用户4",
        avatar:
          "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
        tag: "21321",
        value:
          "“草图里的生图效果十分惊艳，生图质量与市面主流渲染器渲染出的效果图无异，但出图效率却领先十倍百倍”",
      },
    },
  ];

  const Box = styled.div`
    margin-bottom: 32px;
  `;
  const BoxRef = useRef(null);
  const ToolInfoRef = useRef(null);
  const ImagesRef = useRef(null);

  useEffect(() => {
    let tl;
    let ScrollTrigger;
    if (typeof window !== "undefined") {
      import("gsap/ScrollTrigger").then((module) => {
        ScrollTrigger = module.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: BoxRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
            scrub: false,
            duration: 3,
          },
        });

        tl.fromTo(
          ToolInfoRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );

        tl.fromTo(
          ImagesRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.5"
        );
      });
    }
    return () => {};
  }, []);

  return (
    <Box ref={BoxRef}>
      <ToolInfo ref={ToolInfoRef} info={info} />
      <Images ref={ImagesRef} imageSrc={imageSrc} />
    </Box>
  );
}

export default Case;

const ToolInfo = forwardRef(({ info }, ref) => {
  const Box = styled.div`
    padding-top: 160px;
    position: relative;
    padding-left: 829px;
  `;

  const Title = styled.div`
    font-size: 64px;
    line-height: 72px;
    color: #fff;
  `;

  const Content = styled.div`
    font-size: 20px;
    line-height: 28px;
    color: rgba(255, 255, 255, 0.65);
    margin-top: 24px;
  `;

  const Tip = styled.div`
    color: rgba(255, 255, 255, 0.45);
    font-size: 16px;
    line-height: 24px;
    position: absolute;
    top: 160px;
    left: 204px;
  `;

  const Btn = styled.div`
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #fbf6e5;
    padding: 16px 80px;
    border-radius: 4px;
    opacity: 1;
    border: 1px solid rgba(255, 255, 255, 0.25);
    display: inline-block;
    margin-top: 48px;
    cursor: pointer;
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
      });
    }
    return () => {};
  }, []);

  return (
    <Box ref={ref}>
      <Title ref={title}>{info.title}</Title>
      <Content ref={content}>{info.content}</Content>
      <Tip>{info.tip}</Tip>
      <Btn>更多设计竞选</Btn>
    </Box>
  );
});
ToolInfo.displayName = "ToolInfo";

const Images = forwardRef(({ imageSrc }, ref) => {
  const Wrapper = styled.div`
    /* overflow: hidden; */
    position: relative;
    width: 100%;
    margin-top: 96px;
  `;

  const Track = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;
    width: max-content;
    min-width: 100%;
    animation: marquee 20s linear infinite;
    will-change: transform;

    &:hover {
      animation-play-state: paused;
    }

    @keyframes marquee {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(-50%, 0, 0);
      }
    }
  `;
  const ItemBox = styled.div`
    position: relative;
  `;
  const ImgItem = styled.img`
    flex: 0 0 auto;
    width: 780px;
    height: 438px;
    object-fit: cover;
  `;

  const Evaluate = styled.div`
    color: #ffffff;
    position: absolute;
    border-radius: 8px;
    background: rgba(46, 8, 8, 0.05);
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(80px);
    /* top: -32px; */
    left: 50%;
    translate: -50%;
    width: 570px;
    height: 116px;
    padding: 16px;
    z-index: 1;
  `;

  const UserInfo = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
  `;

  const Avatar = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 16px;
  `;
  return (
    <Wrapper ref={ref}>
      <Track>
        {[...imageSrc, ...imageSrc].map((item, index) => (
          <ItemBox key={index}>
            <ImgItem src={item.src} />
            <Evaluate
              style={
                index % 2 === 0
                  ? { bottom: "-32px", top: "auto" }
                  : { top: "-32px", bottom: "auto" }
              }
            >
              {item.user.value}
              <UserInfo>
                <Avatar src={item.user.avatar} alt="" />
                {item.user.name}·{item.user.tag}
              </UserInfo>
            </Evaluate>
          </ItemBox>
        ))}
      </Track>
    </Wrapper>
  );
});

Images.displayName = "Images";
