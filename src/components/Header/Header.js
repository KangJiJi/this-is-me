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
          switchToChinese={() => console.log("chinese")}
          switchToEnglish={() => console.log("english")}
        />
      </div>
    </div>
  );
};

export default Header;
