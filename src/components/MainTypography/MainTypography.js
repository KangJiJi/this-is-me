import React from "react";

import "./MainTypography.css";

import TypographyCirculator from "../../components/TypographyCirculator/TypographyCirculator";
import Typography from "../../atoms/Typography/Typography";

const MainTypography = () => {
  return (
    <div className={`main-typography`}>
      <div className={`main-typography__inner`}>
        <div className={`main-typography__inner__typography-wrapper`}>
          <div
            className={`main-typography__inner__typography-wrapper__typography-circulator-wrapper`}
          >
            <TypographyCirculator
              stringList={["JavaScript", "UI/UX", "언어"]}
              size={"large"}
              color={"subPrimary"}
            />
          </div>
          {"를 좋아하는 Front-end 개발자"
            .split(" ")
            .map((val, index, array) => (
              <Typography
                size={"large"}
                color={"primary"}
                type={"inlineBlock"}
                key={val}
              >
                {`${val}${index === array.length - 1 ? "" : "\u00A0"}`}
              </Typography>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainTypography;
