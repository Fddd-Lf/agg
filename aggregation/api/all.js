import request from "../utils/requestALl";
import axios from "axios";

function getBaseUrl() {
  const env = process.env.NEXT_PUBLIC_ALL_URL;
  const urls = {
    test: "https://passport-dev.shixianjia.com/connect/token",
    development: "https://passport-dev.shixianjia.com/connect/token",
    production: "https://passport.shixianjia.com/connect/token",
  };
  return urls[env] || urls.production;
}

function getCdBaseUrl() {
  const env = process.env.NEXT_PUBLIC_ALL_URL;
  const urls = {
    test: "https://api-dev.shixianjia.com/api/app/sms/send-sms",
    development: "https://api-dev.shixianjia.com/api/app/sms/send-sms",
    production: "https://api.shixianjia.com/api/app/sms/send-sms",
  };
  return urls[env] || urls.production;
}

// 获取验证码
export function getCode(params) {
  return axios.post(getCdBaseUrl(), params, {
    headers: {
      "X-Api-Client": `Web`,
      CTL_VERSION: `1.0`,
      CTL_CLIENT: `WEB`,
      CTL_DEVID: "74992a6736657f114e36e3fe1925786e",
      CTL_CHANNEL: `NATURE`,
      CTL_APP: `AICOTTAGE`,
    },
  });
}

// 拿token
export function login(params) {
  return axios.post(getBaseUrl(), params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Api-Client": `Web`,
      CTL_VERSION: `1.0`,
      CTL_CLIENT: `WEB`,
      CTL_DEVID: "74992a6736657f114e36e3fe1925786e",
      CTL_CHANNEL: `NATURE`,
      CTL_APP: `AICOTTAGE`,
    },
  });
}

// 获取用户详细信息
export function getUserDetailGz(params) {
  return request.post("/app/userinfoauth/getcurrentuserauth", params);
}

//获取首页列表
export function getHomeList(params) {
  return request.post("/api/app/content/getall", params);
}

//获取模型列表
export function getModelListApi(params) {
  return request.post(
    "/gpt/api/app/ai-model-data/get-model-square-list",
    params
  );
}

// 用户基础信息之埋点
export function getuserlogin(params) {
  return request.post("/app/userinfoauth/userlogin", params);
}

// 获取聚合页指定键的值
export function getAggregationPageKey(params) {
  return request.post("/cms/aggregation/getaggregationdata", params);
}

// 获取钱包信息
export function getWalletInfo(params) {
  return request.post("/app/walletauth/getmywalletinfo", params);
}
