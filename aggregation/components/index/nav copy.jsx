import styled from "@emotion/styled";
import useStore from "../../store/index";
import { useEffect, useState, useRef } from "react";
import {
  Dropdown,
  Menu,
  Space,
  Button,
  Modal,
  Select,
  Input,
  Trigger,
  Message,
} from "@arco-design/web-react";
import { IconDown, IconSearch } from "@arco-design/web-react/icon";
import QRCode from "qrcode.react";
import LoginBox from "@/components/index/loginModel";
import { getUserDetailGz, getWalletInfo } from "@/api/all";
const Option = Select.Option;
const Box = styled.div`
  display: flex;
  height: 4rem;
  background: #2e2e2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  align-items: center;
  padding: 0 1.5rem;
  justify-content: space-between;
  z-index: 999;
`;

const NavBox = styled.div`
  display: flex;
  height: 4rem;
  background: #2e2e2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  align-items: center;
  padding: 0 1.5rem;
  justify-content: center;
  z-index: 999;
`;

const Logo = styled.img`
  width: 82px;
  height: 48px;
  margin-right: 1rem;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;

const LoginBtn = styled(Button)`
  border-radius: 0.25rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: rgba(26, 26, 26, 1) !important;
  cursor: pointer;
  background: #ffc14e
    linear-gradient(
      90deg,
      rgba(255, 232, 159, 1) 0%,
      rgba(255, 193, 78, 1) 50.05%,
      rgba(255, 174, 78, 1) 100%
    );
  border: 0 !important;
`;

const NavBtn = styled.div`
  color: rgba(255, 255, 255, 0.65);
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 1.3rem 1rem;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  :hover {
    transition: 0.3s;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 1424px) {
    font-size: 0.8rem;
    padding: 1.3rem 0.5rem;
  }
`;

const DownloadBtn = styled.div`
  color: rgba(255, 255, 255, 0.65);
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 1.3rem 1rem;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transition: 0.3s;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 1424px) {
    font-size: 0.8rem;
    padding: 1.3rem 0.5rem;
  }
`;

const UserHead = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-left: 1rem;
  cursor: pointer;
  object-fit: cover;
`;

const VipIcon = styled.img`
  width: 28px;
  height: 14px;
  object-fit: contain;
  margin-left: 4px;
`;

const SearchIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3a3a3a;
  margin: 0 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background: #1a1a1a;
  }
  @media (max-width: 1424px) {
    width: 24px;
    height: 24px;
  }
`;

const IconImg = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 1424px) {
    width: 14px;
    height: 14px;
  }
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  width: 53rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled(Input)`
  flex-grow: 1;
  height: 2.5rem;
  border-radius: 4px;
  overflow: hidden;

  .arco-input {
    color: #e5e5e5;
  }

  .arco-input-inner-wrapper {
    background-color: #1a1a1a !important;
    border: none;
  }
  .arco-input-inner-wrapper .arco-input-group-prefix {
    color: rgba(255, 255, 255, 0.45);
  }
  .arco-input:focus {
    border-color: #ffc14e !important;
  }
  .arco-input:hover {
    border: none !important;
  }
`;

const SearchBtn = styled.div`
  position: absolute;
  right: 3.2rem;
  width: 88px;
  height: 34px;
  background: #ffc14e;
  border-radius: 2px;
  color: #1a1a1a;
  line-height: 34px;
  text-align: center;
  cursor: pointer;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 1.5rem;
  cursor: pointer;
`;

const DropDowm = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
`;

const DropBox = styled.div``;

export default function Nav({ navigation }) {
  const {
    showLoginBox,
    changeShowLoginBox,
    userInfo,
    setUserInfo,
    walletInfo,
  } = useStore();
  const [info, setInfo] = useState(null);
  const [isBlance, setIsBlance] = useState(null);
  const [isshowCompanyProfile, setIsshowCompanyProfile] = useState(false);
  const [isShowDownload, setIsShowDownload] = useState(false);
  const [isShowLoging, setIsShowLoging] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);
  const searchBoxRef = useRef(null);
  // const [isWallet, setWallet] = useState(null);

  useEffect(() => {
    setInfo(userInfo);
    setIsBlance(walletInfo);
  }, [userInfo, walletInfo]);

  const deleteCookie = (name, domain) => {
    document.cookie =
      name +
      "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" +
      domain +
      "; path=/";
  };

  const getDomain = () => {
    let url = window.location.hostname;
    if (url === "localhost") {
      return "localhost";
    } else {
      let arr = url.split(".");
      return "." + arr[1] + "." + arr[2];
    }
  };

  function setCookie(name, value, days, path, domain) {
    let expires = "";
    if (days === "Infinite") {
      const date = new Date(Date.UTC(2038, 0, 19, 0, 0, 0));
      expires = "; expires=" + date.toUTCString();
    } else if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie =
      name +
      "=" +
      (value || "") +
      expires +
      "; path=" +
      (path || "/") +
      (domain ? "; domain=" + domain : "");
  }

  const clickMenu = (key) => {
    // console.log("111111111111111", key);

    if (key === "1") {
      setUserInfo(null);
      deleteCookie("token", getDomain());
      deleteCookie("newUserDetail", getDomain());
      deleteCookie("walletInfo", getDomain());
      setCookie("loginState", "logout", "Infinite", "/", getDomain());
      // Cookies.remove("token");
      // Cookies.remove("newUserDetail");
    }
  };

  const IsLogin = () => {
    if (info) {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <DownloadBtn
            onClick={() =>
              window.open(
                "http://localhost:6060/#/messageManagement?type=CommunityMessage",
              )
            }
          >
            消息
          </DownloadBtn>
          <UserAmount isBlance={isBlance} info={info}></UserAmount>
          <UserHead
            src={info.Avatar}
            alt=""
            onClick={() =>
              window.open(
                process.env.NODE_ENV === "production"
                  ? "https://www.aiiiin.com/#/picList"
                  : "http://test.caotanghuali.com/#/picList",
              )
            }
          />
          <Dropdown
            trigger="click"
            position="bottom"
            droplist={
              <Menu onClickMenuItem={(key) => clickMenu(key)}>
                <Menu.Item key="1">退出登录</Menu.Item>
              </Menu>
            }
          >
            <DropBox style={{ display: "flex", alignItems: "center" }}>
              <DropDowm
                className={"dropDowm"}
                src="../../static/index/down.svg"
              ></DropDowm>
            </DropBox>
          </Dropdown>
        </div>
      );
    } else {
      return (
        // <LoginBtn onClick={() => changeShowLoginBox(!showLoginBox)}>
        //   登录/注册
        // </LoginBtn>
        <LoginBtn onClick={() => window.open("https://www.aiiiin.com/#/communal?login")}>登录/注册</LoginBtn>
        // <LoginBtn onClick={() => setIsShowLoging(true)}>登录/注册</LoginBtn>
      );
    }
  };

  const handleInputChange = (value) => {
    setSearchValue(value);
  };

  const handleSearchIconClick = () => {
    setIsShowSearch(true);
    // 使用 setTimeout 来确保在 DOM 更新后设置焦点
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 0);
  };

  const handleBlur = (event) => {
    // 检查点击事件是否发生在搜索框内
    if (
      searchBoxRef.current &&
      !searchBoxRef.current.contains(event.relatedTarget)
    ) {
      setIsShowSearch(false);
      setSearchValue("");
    }
  };

  const handleSearch = (value) => {
    // console.log("Search value:", value);
    // 在这里实现搜索逻辑
    if (value) {
      process.env.NODE_ENV == "production"
        ? window.open(
            `https://www.aiiiin.com/#/globalSearchResult?keyWords=${value}`,
          )
        : window.open(
            `http://test.caotanghuali.com/#/globalSearchResult?keyWords=${value}`,
          );
      setSearchValue("");
      setIsShowSearch(false);
    } else {
      Message.warning("请输入搜索内容");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // 检查键码是否为13，对应回车键
      handleSearch(searchValue); // 执行搜索操作
    }
  };

  return (
    <>
      {isShowSearch ? (
        <NavBox>
          <SearchBox ref={searchBoxRef}>
            <SearchInput
              ref={searchInputRef}
              value={searchValue}
              prefix={<IconSearch />}
              defaultValue=""
              placeholder="抽屉柜与床头柜"
              onKeyPress={handleKeyPress}
              onChange={handleInputChange}
              onBlur={handleBlur}
              style={{ width: "100%" }}
            />
            <SearchBtn
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSearch(searchValue)}
            >
              搜索
            </SearchBtn>
            <CloseIcon
              onClick={() => {
                setIsShowSearch(false);
                setSearchValue("");
              }}
              src="../../static/index/nor.svg"
            ></CloseIcon>
          </SearchBox>
        </NavBox>
      ) : (
        <>
          <Box>
            <LeftBox>
              <Logo
                onClick={() =>
                  window.open(
                    process.env.NODE_ENV === "production"
                      ? "https://www.aiiiin.com"
                      : "http://test.caotanghuali.com",
                  )
                }
                style={{ cursor: "pointer" }}
                // src="../../static/index/logo_text.svg"
                src="../../static/index/logo.svg"
                alt="草图里平台"
              />

              {navigation.map((item) => {
                return (
                  <Space key={item.id}>
                    <Trigger
                      className={"nav-btn"}
                      containerScrollToClose={true}
                      trigger={["hover", "click"]}
                      popup={() => (
                        <Popup
                          list={item.children}
                          isOpen={() => setIsshowCompanyProfile(true)}
                        />
                      )}
                    >
                      <NavBtn
                        onClick={() => item.isJump && window.open(item.href)}
                      >
                        {item.name} {item.children && <IconDown />}
                        {item.isVip && (
                          <VipIcon src="../../static/index/tag.svg" />
                        )}
                      </NavBtn>
                    </Trigger>
                  </Space>
                );
              })}
            </LeftBox>
            <LeftBox>
              <SearchIcon onClick={handleSearchIconClick}>
                <IconImg src="../../static/index/search.svg"></IconImg>
              </SearchIcon>
              <DownloadBtn
                onClick={() => window.open("https://www.aiiiin.com/#/helper")}
              >
                帮助手册
              </DownloadBtn>
              <DownloadBtn onClick={() => setIsShowDownload(true)}>
                APP下载
              </DownloadBtn>

              {IsLogin()}
            </LeftBox>
            <CompanyProfile
              isShow={isshowCompanyProfile}
              isClose={() => setIsshowCompanyProfile(false)}
            />
            <DownloadApp
              isShow={isShowDownload}
              isClose={() => setIsShowDownload(false)}
            />
            <LoginBox
              isShow={isShowLoging}
              isClose={() => setIsShowLoging(false)}
            />
          </Box>
        </>
      )}
    </>
  );
}

function Popup({ list, isOpen }) {
  const Box = styled.div`
    border-radius: 4px;
    background-color: #3a3a3a;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
    padding: 0.5rem 0;
  `;

  const Item = styled.div`
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 1);
    padding: 0.5rem 1.5rem;
    text-align: center;
    :hover {
      color: rgba(255, 193, 78, 1);
    }
  `;
  const clickNav = (item) => {
    if (item.name === "公司介绍") {
      let navBtnElement = document.getElementsByClassName("nav-btn")[0];
      let parentDiv = navBtnElement.parentNode;
      parentDiv.remove();
      isOpen();
      return;
    }
    item.isJump && process.env.NODE_ENV === "production"
      ? window.open("https://www.aiiiin.com/#" + item.href)
      : window.open("http://test.caotanghuali.com/#" + item.href);
  };

  if (list) {
    return (
      <Box>
        {list.map((item) => {
          return (
            <Item key={item.id} onClick={() => clickNav(item)}>
              {item.name}
            </Item>
          );
        })}
      </Box>
    );
  }
}

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

function DownloadApp({ isShow, isClose }) {
  const Box = styled.div`
    position: relative;
  `;
  const ModalBg = styled.img`
    height: 36.5625rem;
  `;

  const download = [
    {
      id: 0,
      name: "IOS",
      download:
        "https://apps.apple.com/cn/app/%E8%8D%89%E5%9B%BE%E9%87%8C/id6474016996",
      style: {
        left: "114px",
        top: "252px",
        position: "absolute",
      },
    },
    {
      id: 1,
      name: "Android",
      download: "https://api.aiiiin.com/app/release/downloadandroidapp",
      style: {
        right: "381px",
        top: "252px",
        position: "absolute",
      },
    },
    {
      id: 2,
      name: "小程序",
      download: "@/static/downlowApp/gh_e1155568ca9a_430.jpg",
      style: {
        right: "114px",
        top: "252px",
      },
    },
  ];

  const QrcodeImg = styled.img`
    position: absolute;
    width: 180px;
    height: 180px;
  `;

  return (
    <Modal
      style={{ width: "942px" }}
      footer={null}
      visible={isShow}
      onOk={() => isClose()}
      onCancel={() => isClose()}
      autoFocus={false}
      focusLock={true}
    >
      <Box>
        <ModalBg src="../../static/downLoad/0425-下载弹窗-最终版.jpg" alt="" />
        {download.map((item) =>
          item.id === 2 ? (
            <QrcodeImg
              key={item.id}
              style={item.style}
              src="../../static/downlowApp/gh_e1155568ca9a_430.jpg"
              alt=""
            />
          ) : (
            <QRCode
              key={item.id}
              size={180}
              style={item.style}
              value={item.download}
            />
          ),
        )}
      </Box>
    </Modal>
  );
}

function UserAmount({ isBlance, info }) {
  const AmountBox = styled.div`
    margin-left: 1rem;
    height: 32px;
    border-radius: 4px;
    background: rgba(255, 226, 164, 0.1);
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    @media (max-width: 1424px) {
      width: 130px;
    }
  `;
  const CashAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  `;
  const TelepathyAmount = styled.div`
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:after {
      position: absolute;
      top: 8px;
      left: -8px;
      content: "";
      display: inline-block;
      width: 1px;
      height: 16px;
      background-color: #56534d;
    }
  `;
  const PriceNumber = styled.div`
    color: rgba(255, 226, 164, 1);
    font-size: 16px;
    //font-weight: 500;
    line-height: 24px;
    @media (max-width: 1424px) {
      width: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;

  const AmountIcon = styled.img`
    width: 16px;
    height: 16px;
    margin-left: 4px;
  `;

  return (
    <AmountBox>
      <CashAmount>
        <PriceNumber>{isBlance}</PriceNumber>
        <AmountIcon src="../../static/index/cash.svg"></AmountIcon>
      </CashAmount>
      <TelepathyAmount>
        <PriceNumber>{info.Telepathy}</PriceNumber>
        <AmountIcon src="../../static/index/telepathy.svg"></AmountIcon>
      </TelepathyAmount>
    </AmountBox>
  );
}
