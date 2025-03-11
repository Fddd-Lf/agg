import { create } from "zustand";

const initData = {
  showLoginBox: false,
  userInfo: null,
  token: "",
  walletInfo: 0,
};

const useStore = create((set, get) => ({
  ...initData,
  changeShowLoginBox(visible) {
    set({ showLoginBox: visible });
  },
  setToken(token) {
    set({ token });
  },
  setUserInfo(userInfo) {
    set({ userInfo });
  },
  setWalletInfo(walletInfo) {
    set({ walletInfo });
  },
}));

export default useStore;
