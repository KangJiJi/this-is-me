import React from 'react';

import TypographyCirculator from '../../components/TypographyCirculator/TypographyCirculator';
import Typography from '../../atoms/Typography/Typography';

import studying from '../../assets/images/studying/studying.gif';

import './Studying.css';

const Studying = () => {
  return (
    <div className={`studying`}>
      <div className={`studying__inner`}>
        <div>
          <div className={`studying__inner__studying-image`}>
            <img src={studying} alt="studying..." />
          </div>
          <div className={`studying__inner__typography-wrapper`}>
            <Typography size={'medium'} color={'primary'} type={'inlineBlock'}>
              {`새로운 `}
            </Typography>
            <div className={`studying__inner__main-typography`}>
              <TypographyCirculator
                stringList={['도메인', '언어', '지식']}
                size={'medium'}
                color={'subPrimary'}
              />
            </div>
            <Typography size={'medium'} color={'primary'} type={'inlineBlock'}>
              {`공부중...`}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studying;
