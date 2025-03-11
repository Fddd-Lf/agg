import styled from "@emotion/styled";
import { Trigger, Modal, Image } from "@arco-design/web-react";
import QRCode from "qrcode.react";
import { useEffect, useState } from "react";

const Box = styled.div`
  display: flex;
  /* height: 19.75rem; */
  background-color: #2e2e2e;
  margin-top: 2rem;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: center;
  /* padding: 0 15.5rem; */
  padding-left: 15.5rem;
  padding-right: 25.125rem;
`;

const Content = styled.div`
  /* width: 119.5rem; */
  /* max-width: 119.5rem; */
  min-width: 100%;
  /* width: 100%; */
`;

const TopBox = styled.div`
  flex: 1;
  width: 100%;
  /* padding: 0 15.625rem; */
  box-sizing: border-box;
  display: flex;
  max-width: 89rem;
  margin: 0 auto;
`;
const BottomBox = styled.div`
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  width: 100%;
  padding: 1.5rem 0;
  border-top: 1px solid #3a3a3a;
  box-sizing: border-box;
  margin-top: 30px;
`;

const PhoneBox = styled.div`
  padding-right: 5.125rem;
  color: rgba(255, 255, 255, 1);
  margin: 2rem 0 3.75rem 0;
  border-right: 1px solid #3a3a3a;
  @media (max-width: 1600px) {
    padding-right: 0;
  }
`;
const PhoneTitle = styled.div`
  /* margin-top: 2rem; */
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 1rem;
`;
const Phone = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
  display: flex;
  align-items: center;
  @media (max-width: 1450px) {
    font-size: 1.5rem;
  }
`;
const Time = styled.div`
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
`;
const QrcodeBox = styled.div`
  color: rgba(255, 255, 255, 1);
  margin-top: 2rem;
`;

const DownloadItem = styled.div`
  width: 7.75rem;
  height: 2.5rem;
  border-radius: 4px;
  background-color: #3a3a3a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
`;
const ContentBox = styled.div`
  margin-top: 2rem;
  flex: 1;
  color: rgba(255, 255, 255, 1);
  display: flex;
  padding-left: 5.1875rem;
  @media (max-width: 1450px) {
    padding-left: 2rem;
  }
`;

const ContentItem = styled.div`
  /* margin-right: 10rem; */
  flex: 1;
`;

const ContentSubIitle = styled.div`
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  :hover {
    color: rgb(255, 193, 78);
  }
`;

const StyledLink = styled.a`
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    color: rgba(255, 193, 78, 1);
  }
`;

const download = [
  {
    id: 0,
    name: "IOS",
    url: "../../static/index/downlowIcon/icon_ios-white.svg",
    hoverUrl: "../../static/index/downlowIcon/icon_ios.svg",
    position: "rt",
    download:
      "https://apps.apple.com/cn/app/%E8%8D%89%E5%9B%BE%E9%87%8C/id6474016996",
  },
  {
    id: 1,
    name: "Android",
    url: "../../static/index/downlowIcon/icon_android-white.svg",
    hoverUrl: "../../static/index/downlowIcon/icon_android.svg",
    position: "right",
    download: "https://api.aiiiin.com/app/release/downloadandroidapp",
  },
  {
    id: 2,
    name: "小程序",
    url: "../../static/index/downlowIcon/icon_xcx.svg",
    hoverUrl: "../../static/index/downlowIcon/icon_xcx_hover.svg",
    position: "rb",
    download: "../../static/downlowApp/gh_e1155568ca9a_430.jpg",
  },
];

const DownloadIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

const contentList = [
  {
    name: "产品与服务",
    url: "",
    children: [
      {
        name: "智能创作",
        url: "/newAICreation",
      },
      {
        name: "设计竞选",
        url: "/demandDesign",
      },
      {
        name: "模型商城",
        url: "/aiStore",
      },
      {
        name: "设计师",
        url: "/demandDesign",
      },
    ],
  },
  {
    name: "关于我们",
    url: "",
    children: [
      {
        name: "公司介绍",
        url: "",
        isModal: true,
      },
      {
        name: "联系我们",
        url: "",
        isModal: true,
      },
      {
        name: "加入我们",
        url: "https://doc.weixin.qq.com/doc/w3_AdIAgQYgADUkvP506hSTPCHTSsAba?scode=AOkAfQfkAHAaBgv8NRAbMAGgZkADM",
      },
      {
        name: "帮助文档",
        url: "/helper",
      },
    ],
  },
  {
    name: "其他",
    url: "",
    children: [
      {
        name: "用户协议",
        url: "/universalAgreement?protocol=/userUseAgreement",
      },
      {
        name: "隐私政策",
        url: "/universalAgreement?protocol=%2FplatformPrivacyPolicy",
      },
      {
        name: "算法备案",
        url: "",
        isModal: true,
      },
      {
        name: "营业执照",
        url: "",
        isModal: true,
      },
    ],
  },
];

function Footer() {
  const [showPopup, setShowPopup] = useState(null);
  const [isshowCompanyProfile, setIsshowCompanyProfile] = useState(false);
  const [isAboutUs, setisAboutUs] = useState(false);
  const [isCompanyImg, setisCompanyImg] = useState(false);

  function subTitleFn(item) {
    if (item.name == "加入我们") {
      window.open(item.url);
      return;
    }
    if (item.url) {
      process.env.NODE_ENV == "production"
        ? window.open("https://www.aiiiin.com/#" + item.url)
        : window.open("http://test.caotanghuali.com/#" + item.url);
    }
    if (item.isModal) {
      if (item.name == "公司介绍") {
        setIsshowCompanyProfile(true);
      } else if (item.name == "营业执照" || item.name == "算法备案") {
        setisCompanyImg(true);
      } else {
        setisAboutUs(true);
      }
    }
  }

  useEffect(() => {
    setShowPopup(0);
  }, []);
  return (
    <Box>
      <Content>
        <TopBox>
          <PhoneBox>
            <PhoneTitle>合作咨询</PhoneTitle>
            <Phone>
              <img
                style={{ marginRight: ".625rem" }}
                src="../../static/index/phone.svg"
                alt=""
              />
              020-32644924
            </Phone>
            <Time>
              <img
                style={{ marginRight: ".3125rem" }}
                src="../../static/index/time.svg"
                alt=""
              />
              9:00-18:00
            </Time>
          </PhoneBox>
          <ContentBox>
            {contentList.map((item, index) => (
              <ContentItem key={index}>
                <PhoneTitle>{item.name}</PhoneTitle>
                {item.children && (
                  <ContentSubIitle>
                    {item.children.map((item, index) => (
                      <ContentSubIitle
                        key={index}
                        onClick={() => subTitleFn(item)}
                        href={item.url}
                      >
                        {item.name}
                      </ContentSubIitle>
                    ))}
                  </ContentSubIitle>
                )}
              </ContentItem>
            ))}
          </ContentBox>
          <QrcodeBox>
            <PhoneTitle>下载</PhoneTitle>
            {download.map((item, index) => (
              <Trigger
                defaultPopupVisible={item.id == showPopup}
                popupVisible={item.id == showPopup}
                key={item.id}
                arrowProps={{
                  style: {
                    background: "#434343",
                  },
                }}
                showArrow
                trigger="click"
                position={item.position}
                popup={() => <Popup item={item} />}
              >
                <DownloadItem
                  key={index}
                  style={
                    item.id == showPopup
                      ? { color: "rgba(255, 193, 78, 1)" }
                      : {}
                  }
                  onClick={() => setShowPopup(item.id)}
                >
                  <DownloadIcon
                    src={item.id == showPopup ? item.hoverUrl : item.url}
                    alt=""
                  />
                  {item.name}
                </DownloadItem>
              </Trigger>
            ))}
          </QrcodeBox>
        </TopBox>
        <BottomBox>
          © 2023-2024 AiiiiN 草图里（广州）科技有限公司{" "}
          <StyledLink
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            粤ICP备2023105099号
          </StyledLink>
          <StyledLink
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            粤ICP备2023105099号
          </StyledLink>{" "}
          公安备案号：粤公网安备44010502003010号
          <StyledLink
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICP证：粤B2-20240431
          </StyledLink>{" "}
        </BottomBox>
      </Content>

      <CompanyProfile
        isShow={isshowCompanyProfile}
        isClose={() => setIsshowCompanyProfile(false)}
      />
      {/* <AboutUs isShow={isAboutUs} isClose={() => setisAboutUs(false)} /> */}
      <CompanyImg
        isShow={isCompanyImg}
        isClose={() => setisCompanyImg(false)}
      />
    </Box>
  );
}

const TriggerBox = styled.div`
  border-radius: 4px;
  background-color: #434343;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
  width: 9.375rem;
  height: 9rem;
`;

const CodeImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
`;

function Popup({ item }) {
  return (
    <TriggerBox style={{ padding: "0.5rem", boxSizing: "border-box" }}>
      {item.id == 2 ? (
        <CodeImg style={{ marginBottom: "0" }} src={item.download} />
      ) : (
        <QRCode
          style={{ width: "100%", height: "100%", borderRadius: "0.25rem" }}
          value={item.download}
        />
      )}
    </TriggerBox>
  );
}

export default Footer;

function CompanyProfile({ isShow, isClose }) {
  const Box = styled.div`
    color: rgba(255, 255, 255, 0.65);
    padding: 2rem;
  `;

  return (
    <Modal
      title={<div style={{ textAlign: "left" }}>公司介绍</div>}
      footer={null}
      visible={isShow}
      onOk={() => isClose()}
      onCancel={() => isClose()}
      autoFocus={false}
      focusLock={true}
    >
      <Box>
        <p>
          我司是一家专注于智能家居方案设计等多种服务的公司，致力于为用户提供高质量的家居装修解决方案。我们的主要业务之一是运营一个AI大模型智能出图网站，为第三方用户提供一个便捷的平台，以展示和寻找各种装修服务和风格涵盖现代简约、法式极简、流行英式等多种风格。
        </p>
        <p>
          我们的网站是一个开放的装修信息发布平台，允许装修服务提供商和个人用户发布他们的装修项目信息，用户可以上传图片或者平面图以更好地展示他们的信息。我们鼓励用户发布各种不同的装修风格需求，以满足不同人群的喜好和需求。现代简约、法式极简、流行英式等风格都有专门的分类，用户能够轻松找到符合他们口味的装修项目。
        </p>
        <p>
          我们拥有一支高度专业的技术团队，他们精通互联网技术和家居领域的专业知识。他们确保网站的运行顺畅，提供用户友好的界面，并随时提供技术支持已解决用户的疑问和问题。
        </p>
        <p>
          我们采用多种收费模式，以满足不用用户的需求。基本信息发布是免费的但我们也提供增值服务，例如推广推荐、精准匹配等，这些服务会收取一定的费用。这些费用有助于维护网站的运营和提供更好的用户体验。
        </p>
        <p>
          我们的实施计划旨在持续改进和发展我们的网站。这包括不断改进用户界面、增加新的装修风格分类、提供更多的增值服务、扩展合作伙伴关系以及加强营销和推广活动，以吸引更多的用户和装修服务提供商。我们将不断努力提升，为用户提供广泛的选择和高质量的服务，以“你我他，实现家”为使命，通过技术创新和不断改进，为合作伙伴提供更优质、更舒适、更智能的家居产品和服务。
        </p>
      </Box>
    </Modal>
  );
}

function AboutUs({ isShow, isClose }) {
  const Box = styled.div`
    padding: 2rem;
  `;
  const list = [
    {
      title: "联系我们",
      children: [
        {
          title: "服务邮箱：",
          content: "service@aiiiin.com",
        },
        {
          title: "商务邮箱：",
          content: "ai@aiiiin.com",
        },
        {
          title: "售前咨询：",
          content: "020-31958204",
        },
        {
          title: "售后咨询：",
          content: "020-31954864",
        },
      ],
    },
    {
      title: "加入我们",
      children: [
        {
          title: "招聘邮箱：",
          content: "hr@aiiiin.com",
        },
      ],
    },
  ];
  const AboutItem = styled.div`
    margin-bottom: 1.5rem;
  `;

  const Title = styled.div`
    color: rgba(255, 255, 255, 1);
    font-size: 1rem;
    line-height: 1.5rem;
  `;

  const SubTitle = styled.div`
    color: rgba(255, 255, 255, 0.45);
    margin: 0.5rem 0;
    font-size: 0.875rem;
    line-height: 20px;
  `;

  const SubContent = styled.span`
    color: rgba(255, 255, 255, 0.65);
  `;

  const JoinUsLine = styled.a`
    color: rgba(255, 255, 255, 0.45);
  `;

  return (
    <Modal
      footer={null}
      title={<div style={{ textAlign: "left" }}>关于我们</div>}
      visible={isShow}
      onOk={() => isClose()}
      onCancel={() => isClose()}
      autoFocus={false}
      focusLock={true}
    >
      <Box>
        {list.map((item) => (
          <AboutItem key={item.title}>
            <Title>{item.title}</Title>
            {item.children.map((child) => (
              <SubTitle key={child.title}>
                <span>{child.title}</span>
                <SubContent>{child.content}</SubContent>
              </SubTitle>
            ))}
          </AboutItem>
        ))}
      </Box>
    </Modal>
  );
}

function CompanyImg({ isShow, isClose }) {
  const Box = styled.div`
    color: rgba(255, 255, 255, 0.65);
    padding: 2rem;
  `;

  return (
    <Modal
      title={<div style={{ textAlign: "left" }}>营业执照/算法备案</div>}
      footer={null}
      visible={isShow}
      onOk={() => isClose()}
      onCancel={() => isClose()}
      autoFocus={false}
      focusLock={true}
    >
      <Box>
        <Image
          style={{ marginBottom: "30px" }}
          width={"100%"}
          src="../../static/companyInformation/营业执照1111111111111.jpg"
          alt=""
        />
        <Image
          width={"100%"}
          src="../../static/companyInformation/微信截图_20240613113645.png"
          alt=""
        />
      </Box>
    </Modal>
  );
}
