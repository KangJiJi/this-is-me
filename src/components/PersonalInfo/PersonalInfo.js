import React from "react";

import "./PersonalInfo.css";

import Avatar from "../../atoms/Avatar/Avatar";
import Label from "../../atoms/Label/Label";
import List from "../../atoms/List/List";
import ImageList from "../ImageList/ImageList";
import ImageListRow from "../../atoms/ImageListRow/ImageListRow";
import Gallery from "../../atoms/Gallery/Gallery";

import avatarImage from "../../assets/images/avatar/kang.jpg";
import kakaoTalk from "../../assets/images/icons/kakao-talk.png";
import eMail from "../../assets/images/icons/e-mail.png";
import github from "../../assets/images/icons/github.png";
import blog from "../../assets/images/icons/blog.png";
import html from "../../assets/images/techImage/html.png";
import css from "../../assets/images/techImage/css.png";
import javascript from "../../assets/images/techImage/javascript.png";
import react from "../../assets/images/techImage/react.png";

const PersonalInfo = () => {
  return (
    <div className={`personal-info`}>
      <div className={`personal-info__col`}>
        <div className={`personal-info__avatar personal-info__card`}>
          <Avatar size={`large`} avatarImage={avatarImage} />
        </div>
        <div className={`personal-info__name personal-info__card`}>
          <span className={`personal-info--primary-color`}>강지훈</span> /
          KangJiJi
        </div>
        <div className={`personal-info__greeting personal-info__card`}>
          <p>
            안녕하세요. 만나서 반갑습니다. 저는{" "}
            <span className={`personal-info--secondary-primary-color`}>
              JavaScript
            </span>
            ,{" "}
            <span className={`personal-info--secondary-primary-color`}>
              UI/UX
            </span>
            ,{" "}
            <span className={`personal-info--secondary-primary-color`}>
              언어
            </span>
            를 좋아하는{" "}
            <span className={`personal-info--primary-color`}>Front-end</span>
            개발자입니다.
            <br />
            <br />
            많은 사람들과 논리적으로{" "}
            <span className={`personal-info--secondary-primary-color`}>
              소통
            </span>
            하고 끊임없는
            <span className={`personal-info--secondary-primary-color`}>
              자기 계발
            </span>
            을 <span className={`personal-info--primary-color`}>지향</span>
            합니다.
          </p>
        </div>
      </div>
      <div className={`personal-info__col`}>
        <div className={`personal-info__education personal-info__card`}>
          <Label label={`교육`} />
          <div
            className={`personal-info__education__contents personal-info__card__contents`}
          >
            <List
              list={[
                "2013.03 대화고등학교 입학",
                "2016.02 대화고등학교 졸업",
                "2016.03 서울과학기술대학교 입학",
                "2020.07 서울과학기술대학교 컴퓨터공학 전공",
              ]}
            />
          </div>
        </div>
        <div className={`personal-info__contacts personal-info__card`}>
          <Label label={`연락`} />
          <div
            className={`personal-info__contacts__contents personal-info__card__contents`}
          >
            <ImageList imageSize={`large`}>
              <ImageListRow>
                <img src={kakaoTalk} alt={`kakao-icon`} />
                <span>pandamuslce</span>
              </ImageListRow>
              <ImageListRow>
                <img src={eMail} alt={`email-icon`} />
                <span>kjhmd9726@gmail.com</span>
              </ImageListRow>
              <ImageListRow>
                <img src={github} alt={`github-icon`} />
                <span>github.com/KangJiJi</span>
              </ImageListRow>
              <ImageListRow>
                <img src={blog} alt={`blog-icon`} />
                <span>github.com/KangJiJi/Study</span>
              </ImageListRow>
            </ImageList>
          </div>
        </div>
      </div>
      <div className={`personal-info__col`}>
        <div className={`personal-info__skill personal-info__card`}>
          <Label label={`기술`} />
          <div
            className={`personal-info__skill__contents personal-info__card__contents`}
          >
            <div className={`personal-info__skill__img`}>
              <Gallery image={html} alt={`html-img`} />
            </div>
            <div className={`personal-info__skill__img`}>
              <Gallery image={css} alt={`css-img`} />
            </div>
            <div className={`personal-info__skill__img`}>
              <Gallery image={javascript} alt={`js-img`} />
            </div>
            <div className={`personal-info__skill__img`}>
              <Gallery image={react} alt={`react-img`} />
            </div>
          </div>
        </div>
        <div className={`personal-info__license personal-info__card`}>
          <Label label={`자격증`} />
          <div
            className={`personal-info__license__contents personal-info__card__contents`}
          >
            <List list={["HSK 4级"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
