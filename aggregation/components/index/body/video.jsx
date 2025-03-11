import React, {
  memo,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Video(props) {
  const data = JSON.parse(props.data.Result);
  console.log("props", data);
  const Box = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    position: relative;
  `;

  const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  const ImgBtnBox = styled.div`
    position: absolute;
    right: 32px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  `;

  const videoRefs = useRef([]); // 存储多个 itemRef
  const [videoActiveIndex, setVideoActiveIndex] = useState(0);

  // 控制播放，在播放完成后，切换到下一个视频
  useEffect(() => {
    const playNextVideo = () => {
      if (videoActiveIndex < data.Data.length - 1) {
        setVideoActiveIndex((prevIndex) => prevIndex + 1);
      } else {
        setVideoActiveIndex(0);
      }
    };

    videoRefs.current[videoActiveIndex]?.addEventListener(
      "ended",
      playNextVideo
    );

    return () => {
      videoRefs.current[videoActiveIndex]?.removeEventListener(
        "ended",
        playNextVideo
      );
    };
  }, [videoActiveIndex]);

  const getOpacity = useCallback(
    (index) => {
      if (index === videoActiveIndex) {
        return 1;
      } else {
        const count = Math.abs(videoActiveIndex - index);
        return count > 3 ? 0.2 : 1 - count * 0.25;
      }
    },
    [videoActiveIndex]
  );

  const getBtnSize = useCallback(
    (index) => {
      if (index === videoActiveIndex) {
        return 48;
      } else {
        return 32;
      }
    },
    [videoActiveIndex]
  );

  return (
    <Box>
      {data.Data.map((item, index) => (
        <Video
          ref={(el) => (videoRefs.current[index] = el)}
          key={item.ID}
          src={item.VideoUrl}
          autoPlay={videoActiveIndex === index}
          muted
          style={{ display: videoActiveIndex === index ? "block" : "none" }}
        ></Video>
      ))}
      <Title title={data.Title} />
      <Search />
      <ImgBtnBox>
        {data.Data.map((item, index) => (
          <img
            onMouseEnter={() => {
              setVideoActiveIndex(index);
            }}
            onClick={() => {
              setVideoActiveIndex(index);
            }}
            key={item.VideoUrl + index}
            src={
              item.VideoUrl +
              "?x-oss-process=video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast"
            }
            alt=""
            style={{
              width: getBtnSize(index) + "px",
              height: getBtnSize(index) + "px",
              objectFit: "cover",
              borderRadius: "8px",
              opacity: getOpacity(index),
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          />
        ))}
      </ImgBtnBox>
    </Box>
  );
}

export default Video;

function Title({ title }) {
  const TitleBox = styled.div`
    position: absolute;
    font-size: 80px;
    width: 100%;
    text-align: center;
    line-height: 80px;
    color: #ffffff;
    opacity: 0;
  `;

  useEffect(() => {
    gsap.to("#title", { duration: 3, opacity: 1 }, 1);
  }, []);

  return <TitleBox id="title">{title}</TitleBox>;
}

function Search() {
  const Box = styled.div`
    position: absolute;
    bottom: 50px;
    width: 520px;
    height: 52px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(80px);
    left: 50%;
    translate: -50% 0;
    padding: 16px;
    opacity: 0;
  `;

  const Font = styled.span`
    font-family: HarmonyOS Sans SC;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  `;

  const Btn = styled.div`
    position: absolute;
    border-radius: 4px;
    background: #ffc14e;
    padding: 8px 12px;
    right: 8px;
    top: 8px;
    cursor: pointer;
  `;

  useEffect(() => {
    gsap.to("#search", { duration: 3, opacity: 1 }, 1);
  }, []);

  return (
    <Box id="search">
      <Font>123213211</Font>
      <Btn>立即创作</Btn>
    </Box>
  );
}
