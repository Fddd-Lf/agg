import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Box = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  transition: all 0.3s;
  background: ${(props) =>
    props.scrolled ? "rgba(26, 26, 26, 0.01)" : "transparent"};
  padding: 12px 0;
  backdrop-filter: ${(props) => (props.scrolled ? "blur(80px)" : "blur(0px)")};
`;

const Logo = styled.img`
  width: 82px;
  height: 48px;
  margin-right: 1rem;
  position: absolute;
  left: 24px;
  top: 12px;
  transition: all 0.3s;
  opacity: 0;
`;

const Login = styled.div`
  position: absolute;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  right: 24px;
  top: 18px;
  color: #1a1a1a;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
  background: #ffc14e;
  padding: 8px 12px;
  transition: all 0.3s;
  opacity: 0;
`;

const NavBox = styled.div`
  width: 100vw;
  color: #fff;
  z-index: 999;
  display: flex;
  width: 100%;
  left: 50%;
  justify-content: center;
  opacity: 0;
`;

const NavItem = styled.div`
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  line-height: 20px;
  padding: 14px 12px;
  cursor: pointer;
  &:hover {
    color: #ffc14e;
  }
`;

export default function Nav({ navigation }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    gsap.to("#logo", { duration: 0.2, opacity: 1 });
    gsap.to("#login", { duration: 0.2, opacity: 1 });
    gsap.to("#nav", { duration: 0.5, opacity: 1 });
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box scrolled={scrolled}>
      <Logo id="logo" src="../../static/index/logo.svg" alt="草图里平台" />
      <NavBox id="nav">
        {navigation.map((item) => (
          <NavItem key={item.id}>{item.name}</NavItem>
        ))}
      </NavBox>
      <Login id="login">登录/会员注册</Login>
    </Box>
  );
}
