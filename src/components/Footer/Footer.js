import React from "react";

import TypographyCirculator from "../TypographyCirculator/TypographyCirculator";

import "./Footer.css";

const Footer = () => {
  return (
    <div className={`footer`}>
      <div className={`footer__inner`}>
        <div className={`footer__typography-circulator-wrapper`}>
          <div>
            <TypographyCirculator
              stringList={["감사합니다.\u00A0", "Thank you.\u00A0", "谢谢你。"]}
              size={"large"}
              color={"subPrimary"}
            />
          </div>
          <div>
            <TypographyCirculator
              stringList={[
                "좋은 하루 보내세요!",
                "Have a nice day!",
                "祝你度过愉快的一天！",
              ]}
              size={"large"}
              color={"primary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
