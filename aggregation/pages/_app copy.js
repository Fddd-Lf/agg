import React, { useEffect, useState } from "react";
import "../style/index.css";
import "@arco-design/web-react/dist/css/arco.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/style/reactSlick.css";
import "@/style/arcoStyle.css";
import useStore from "../store/index";
import Cookies from "js-cookie";
import Footer from "@/components/index/footer";
import Nav from "@/components/index/nav";
import "@/public/fonts/font.css";

function MyApp({ Component, pageProps }) {
  const { setUserInfo, setToken, setWalletInfo } = useStore();
  const [navigation, setNavigation] = useState([
    {
      name: "首页",
      href:
        process.env.NODE_ENV === "production"
          ? "https://www.aiiiin.com"
          : "http://test.caotanghuali.com",
      isJump: true,
      id: 1,
    },
    {
      name: "智能创作",
      href:
        process.env.NODE_ENV === "production"
          ? "https://www.aiiiin.com/#/newAICreation"
          : "http://test.caotanghuali.com/#/newAICreation",
      isJump: true,
      id: 2,
    },
    {
      name: "模型训练",
      href:
        process.env.NODE_ENV === "production"
          ? "https://www.aiiiin.com/#/modelTrain"
          : "http://test.caotanghuali.com/#/modelTrain",
      isJump: true,
      isVip: true,
      id: 3,
    },
    {
      name: "方案购买",
      href:
        process.env.NODE_ENV === "production"
          ? "https://www.aiiiin.com/#/aiStore"
          : "http://test.caotanghuali.com/#/aiStore",
      isJump: true,
      id: 4,
    },
    {
      name: "设计竞选",
      href:
        process.env.NODE_ENV === "production"
          ? "https://www.aiiiin.com/#/demandDesign"
          : "http://test.caotanghuali.com/#/demandDesign",
      isJump: true,
      id: 5,
    },
    {
      name: "好物商城",
      href:
        process.env.NODE_ENV === "production"
          ? "https://www.aiiiin.com/#/goodsMall"
          : "http://test.caotanghuali.com/#/goodsMall",
      isJump: true,
      id: 6,
    },
    {
      name: "活动专区",
      href:
        process.env.NODE_ENV === "production"
          ? "https://www.aiiiin.com/#/activity"
          : "http://test.caotanghuali.com/#/activity",
      isJump: true,
      id: 7,
    },
    // {
    //   name: "AI工具",
    //   href: "#",
    //   isJump: false,
    //   id: 2,
    //   children: [
    //     {
    //       name: "AI设计",
    //       href: "/newAICreation",
    //       isJump: true,
    //       id: "2a",
    //     },
    //     {
    //       name: "AI绘制",
    //       href: "/newAICreation?jump=drawing",
    //       isJump: true,
    //       id: "2b",
    //     },
    //   ],
    // },
    // {
    //   name: "创作社区",
    //   href:
    //     process.env.NODE_ENV == "production"
    //       ? "https://www.aiiiin.com/#/communal"
    //       : "http://test.caotanghuali.com/#/communal",
    //   isJump: true,
    //   id: 3,
    // },
    // {
    //   name: "设计竞选",
    //   href: "#",
    //   isJump: false,
    //   id: 4,
    //   children: [
    //     {
    //       name: "找模型",
    //       href: "/aiStore",
    //       isJump: true,
    //       id: "4a",
    //     },
    //     {
    //       name: "找需求",
    //       href: "/designCampaign",
    //       isJump: true,
    //       id: "4b",
    //     },
    //     {
    //       name: "找设计师",
    //       href: "/demandDesign",
    //       isJump: true,
    //       id: "4c",
    //     },
    //   ],
    // },
    // {
    //   name: "关于我们",
    //   href: "#",
    //   isJump: false,
    //   id: 5,
    //   children: [
    //     {
    //       name: "公司介绍",
    //       href: "",
    //       isJump: false,
    //       id: "5a",
    //     },
    //     // {
    //     //   name: "帮助中心",
    //     //   href: "/helper",
    //     //   isJump: true,
    //     //   id: "5b",
    //     // },
    //     // { name: "商务合作", href: "#", current: false, id: "5c" },
    //     // { name: "APP下载", href: "#", current: false, id: "5d" },
    //   ],
    // },
  ]);
  const [loginState, setloginState] = useState(Cookies.get("loginState"));

  function checkState() {
    setInterval(() => {
      if (loginState === "logout" && loginState !== Cookies.get("loginState")) {
        setloginState(Cookies.get("loginState"));
        window.location.reload();
      }
    }, 1000);
  }

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

  function getDomain() {
    let url = window.location.hostname;
    if (url === "localhost") {
      return null;
    } else {
      let arr = url.split(".");
      return arr[1] + "." + arr[2];
    }
  }

  useEffect(() => {
    checkState();
    let token = Cookies.get("token");
    let info = Cookies.get("newUserDetail");
    let walletInfo = Cookies.get("walletInfo");
    setCookie("loginState", "logout", "Infinite", "/", getDomain());
    setInterval(() => {
      token = Cookies.get("token");
      info = Cookies.get("newUserDetail");
      walletInfo = Cookies.get("walletInfo");
    }, 2000);

    if (token && info && loginState === "logon") {
      setToken(token);
      setUserInfo(JSON.parse(info));
      setWalletInfo(walletInfo);
      setCookie("loginState", "logon", "Infinite", "/", getDomain());
      let changeImg = setInterval(() => {
        if (
          JSON.parse(info).Avatar !==
          JSON.parse(Cookies.get("newUserDetail")).Avatar
        ) {
          setUserInfo(JSON.parse(Cookies.get("newUserDetail")));
          setWalletInfo(JSON.parse(Cookies.get("walletInfo")));
          clearInterval(changeImg);
        }
      }, 1000);
      let loggedIn = setInterval(() => {
        if (!Cookies.get("token") && !Cookies.get("newUserDetail")) {
          setToken("");
          setUserInfo(null);
          setWalletInfo(null);
          clearInterval(loggedIn);
        }
      }, 1000);
    } else {
      let notLogged = setInterval(() => {
        if (Cookies.get("token") && Cookies.get("newUserDetail")) {
          token = Cookies.get("token");
          info = Cookies.get("newUserDetail");
          setCookie("loginState", "logon", "Infinite", "/", getDomain());
          setToken(Cookies.get("token"));
          setUserInfo(JSON.parse(Cookies.get("newUserDetail")));
          setWalletInfo(JSON.parse(Cookies.get("walletInfo")));
          clearInterval(notLogged);
        }
      }, 1000);
    }
  }, []);
  return (
    <>
      <Nav navigation={navigation}></Nav>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
