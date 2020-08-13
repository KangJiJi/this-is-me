import React from "react";

import "./Header.css";

import Logo from "../../atoms/Logo/Logo";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const Header = () => {
  return (
    <div className={`header`}>
      <div className={`header__logo-wrapper`}>
        <Logo />
      </div>
      <div className={`header__language-switch-wrapper`}>
        {/* TODO */}
        {/* 다국어 변경 버튼 로직 추가 */}
        <LanguageSwitch
          switchToKorean={() => console.log("korean")}
          switchToChinese={() => alert("正在准备功能编程。")}
          switchToEnglish={() => alert("Preparing to develop the function.")}
        />
      </div>
    </div>
  );
};

export default Header;
