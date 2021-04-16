import React from "react";

import "./PersonalInfo.css";

import UserBuilder from "../../objects/user/userBuilder";

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
  const user = new UserBuilder()
    .avatarImage(avatarImage)
    .name("강지훈")
    .nickName("KangJiJi")
    .greeting(
      <>
        안녕하세요. 만나서 반갑습니다. 저는{" "}
        <span className={`font-color--secondary-primary-color`}>
          JavaScript
        </span>
        , <span className={`font-color--secondary-primary-color`}>UI/UX</span>,{" "}
        <span className={`font-color--secondary-primary-color`}>언어</span>를
        좋아하는 <span className={`font-color--primary-color`}>Front-end</span>{" "}
        개발자입니다.
        <br />
        <br />
        많은 사람들과 논리적으로{" "}
        <span className={`font-color--secondary-primary-color`}>소통</span>
        하고 끊임없는{" "}
        <span className={`font-color--secondary-primary-color`}>자기 계발</span>
        을 <span className={`font-color--primary-color`}>지향</span>
        합니다.
      </>
    )
    .educationList([
      "2016.02 대화고등학교 졸업",
      "2016.03 서울과학기술대학교 입학",
    ])
    .contactList([
      {
        contactImage: kakaoTalk,
        imageAlt: "kakao-icon",
        contents: "pandamuscle",
      },
      {
        contactImage: eMail,
        imageAlt: "email-icon",
        contents: "kjhmd9726@gmail.com",
      },
      {
        contactImage: github,
        imageAlt: "github-icon",
        contents: "github.com/KangJiJi",
      },
      {
        contactImage: blog,
        imageAlt: "blog-icon",
        contents: "github.com/KangJiJi/Study",
      },
    ])
    .skillList([
      { skillImage: html, imageAlt: "html-img" },
      { skillImage: css, imageAlt: "css-img" },
      { skillImage: javascript, imageAlt: "js-img" },
      { skillImage: react, imageAlt: "react-img" },
    ])
    .license(["HSK 4级"])
    .build();

  return (
    <div className={`personal-info`}>
      <div className={`personal-info__inner`}>
        <div className={`personal-info__col-wrapper`}>
          <div className={`personal-info__col`}>
            <div className={`personal-info__avatar personal-info__card`}>
              <Avatar size={`large`} avatarImage={user.getAvatarImage()} />
            </div>
            <div className={`personal-info__name personal-info__card`}>
              <span className={`font-color--primary-color`}>
                {user.getName()}
              </span>{" "}
              / {user.getNickName()}
            </div>
            <div className={`personal-info__greeting personal-info__card`}>
              <p>{user.getGreeting()}</p>
            </div>
          </div>
          <div className={`personal-info__col`}>
            <div className={`personal-info__education personal-info__card`}>
              <Label label={`교육`} />
              <div
                className={`personal-info__education__contents personal-info__card__contents`}
              >
                <List list={user.getEducation()} />
              </div>
            </div>
            <div className={`personal-info__contacts personal-info__card`}>
              <Label label={`연락`} />
              <div
                className={`personal-info__contacts__contents personal-info__card__contents`}
              >
                <ImageList imageSize={`large`}>
                  {user.getContactList().map((contact) => (
                    <ImageListRow key={contact.contents}>
                      <img src={contact.contactImage} alt={contact.imageAlt} />
                      <span>{contact.contents}</span>
                    </ImageListRow>
                  ))}
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
                {user.getSkillList().map((skill) => (
                  <div
                    className={`personal-info__skill__img`}
                    key={skill.imageAlt}
                  >
                    <Gallery image={skill.skillImage} alt={skill.imageAlt} />
                  </div>
                ))}
              </div>
            </div>
            <div className={`personal-info__license personal-info__card`}>
              <Label label={`자격증`} />
              <div
                className={`personal-info__license__contents personal-info__card__contents`}
              >
                <List list={user.getLicense()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
