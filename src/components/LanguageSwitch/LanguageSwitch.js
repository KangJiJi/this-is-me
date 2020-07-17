import React from "react";
import PropTypes from "prop-types";

import "./LanguageSwitch.css";

import LanguageButton from "../../atoms/LanguageButton/LanguageButton";

import krFlagImage from "../../assets/images/flags/southKoreaFlag.png";
import cnFlagImage from "../../assets/images/flags/chinaFlag.png";
import usFlagImage from "../../assets/images/flags/unitedStatesOfAmericaFlag.png";

const LanguageSwitch = (props) => {
  const { switchToKorean, switchToChinese, switchToEnglish } = props;

  return (
    <div className={`language-switch`}>
      <div className={`language-switch__language-button-wrapper`}>
        <LanguageButton flagImage={krFlagImage} onClick={switchToKorean} />
      </div>
      <div className={`language-switch__language-button-wrapper`}>
        <LanguageButton flagImage={cnFlagImage} onClick={switchToChinese} />
      </div>
      <div className={`language-switch__language-button-wrapper`}>
        <LanguageButton flagImage={usFlagImage} onClick={switchToEnglish} />
      </div>
    </div>
  );
};

LanguageSwitch.propTypes = {
  switchToKorean: PropTypes.func.isRequired,
  switchToChinese: PropTypes.func.isRequired,
  switchToEnglish: PropTypes.func.isRequired,
};

export default LanguageSwitch;
