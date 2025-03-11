import React, { useEffect, useState, useRef, forwardRef } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Tabs from "../Tabs";
import "swiper/css/pagination";
import "swiper/css";
import "./drawPag.css";
function DesignScene() {
  const Box = styled.div`
    margin-top: 200px;
  `;

  const homeRef = useRef(null);
  const headRef = useRef(null);
  const tabsRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    // console.log(headRef, carouselRef);

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
            duration: 1,
          },
        });

        tl.fromTo(
          headRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        );

        tl.fromTo(
          tabsRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 },
          "-=1"
        );

        tl.fromTo(
          carouselRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0 },
          "-=1"
        );
      });
    }
    return () => {};
  }, []);
  return (
    <Box ref={homeRef}>
      <Head ref={headRef} />
      <div id="box" style={{ marginTop: "64px" }}>
        <Tabs ref={tabsRef} />
        <Carousels ref={carouselRef} />
      </div>
    </Box>
  );
}

export default DesignScene;

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

const Carousels = forwardRef((props, ref) => {
  const imgList = [
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
  ];

  const Img = styled.img`
    width: 100%;
    /* height: 675px; */
    object-fit: cover;
  `;
  const Box = styled.div`
    margin-top: 64px;
  `;

  return (
    <Box ref={ref}>
      <Swiper
        style={{ padding: "0 48px" }}
        loop
        pagination={{ clickable: true }}
        modules={[Pagination]}
        autoplay={{ delay: 3000 }}
        spaceBetween={48}
        slidesPerView={3}
      >
        {Array.from({ length: Math.ceil(imgList.length / 2) }).map((_, i) => (
          <SwiperSlide
            key={i}
            style={{
              display: "grid",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            <Img src={imgList[i * 2]} />
            {imgList[i * 2 + 1] && <Img src={imgList[i * 2 + 1]} />}
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ marginTop: "48px", height: "50px" }}></div>
    </Box>
  );
});
Carousels.displayName = "Carousels";
