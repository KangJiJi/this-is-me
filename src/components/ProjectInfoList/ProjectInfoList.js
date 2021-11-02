import React from 'react';

import ProjectInfo from '../../atoms/ProjectInfo/ProjectInfo';
import Gallery from '../../atoms/Gallery/Gallery';
import ProjectInfoContents from '../../atoms/ProjectInfoContents/ProjectInfoContents';
import Typography from '../../atoms/Typography/Typography';
import Label from '../../atoms/Label/Label';
import List from '../../atoms/List/List';

import electronTomato from '../../assets/images/projects/electronTomato.png';
import flappyBird from '../../assets/images/projects/flappyBird.png';
import foogle from '../../assets/images/projects/foogle.png';
import movieApp from '../../assets/images/projects/movieApp.png';
import mozziFront from '../../assets/images/projects/mozziFront.png';
import thisIsMe from '../../assets/images/projects/thisIsMe.png';
import antiqueUniverse from '../../assets/images/projects/antiqueUniverse.png';

import './ProjectInfoList.css';

const ProjectInfoListVal = (props) => {
  const {
    image,
    imageAlt,
    label,
    projectDescription,
    projectCharacteristic,
    projectGitHubLink,
    projectLink,
  } = props;

  return (
    <ProjectInfo>
      <Gallery image={image} alt={imageAlt} responsive={true} />
      <ProjectInfoContents>
        <Typography size={`large`} color={`primary`}>
          {label}
        </Typography>
        <>
          <p className={`project-info-list__info__p`}>{projectDescription}</p>
          <Label label={`특징`} />
          <div className={`project-info-list__info__characteristic`}>
            <List list={projectCharacteristic} />
          </div>
          <div className={`project-info-list__info__link`}>
            <div className={`project-info-list__info__link-wapper`}>
              <a href={projectGitHubLink}>
                <span className={`font-color--secondary-primary-color`}>
                  GitHub 링크
                </span>
              </a>
            </div>
            <div className={`project-info-list__info__link-wapper`}>
              {projectLink ? (
                <a href={projectLink}>
                  <span className={`font-color--secondary-primary-color`}>
                    웹 링크
                  </span>
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      </ProjectInfoContents>
    </ProjectInfo>
  );
};

const ProjectInfoContentsList = [
  {
    image: antiqueUniverse,
    imageAlt: `antiqueUniverseImage`,
    label: `Antique universe`,
    projectDescription: (
      <>
        <span className={`font-color--primary-color`}>Phaser</span>와{' '}
        <span className={`font-color--primary-color`}>React</span>로 구현한{' '}
        <span className={`font-color--secondary-primary-color`}>
          화상 채팅기반 메타버스 중고거래 웹 플랫폼
        </span>
        입니다. 캡스톤 디자인에서{' '}
        <span className={`font-color--primary-color`}>졸업작품</span>으로 구현한
        프로젝트입니다.{' '}
        <span className={`font-color--secondary-primary-color`}>SFU 구조</span>
        를 <span className={`font-color--primary-color`}>WebRtc</span>로
        구현해서 화상 채팅이 가능합니다.
      </>
    ),
    projectCharacteristic: ['Phaser', 'SocketIo', 'WebRtc', 'Metaverse'],
    projectGitHubLink: `https://github.com/TeamChoiKang`,
  },
  {
    image: thisIsMe,
    imageAlt: `thisIsMeProjectImage`,
    label: `This is me`,
    projectDescription: (
      <>
        <span className={`font-color--primary-color`}>React</span>로 제작한 개인
        포트폴리오 사이트다. 개인정보와 진행했던 프로젝트를 보여준다.{' '}
        <span className={`font-color--primary-color`}>React</span>외 다른
        라이브러리는{' '}
        <span className={`font-color--secondary-primary-color`}>지양</span>했고,
        최대한 깔끔하고{' '}
        <span className={`font-color--primary-color`}>재사용</span>
        가능한 컴포넌트 제작에 노력을 기울였다. 또한{' '}
        <span className={`font-color--secondary-primary-color`}>반응형 웹</span>
        이며,{' '}
        <span className={`font-color--secondary-primary-color`}>디자인</span>도
        직접 구상했다.
      </>
    ),
    projectCharacteristic: [
      'React 사용',
      'Back-end 없음',
      '컴포넌트 재사용',
      '간단한 디자인',
    ],
    projectGitHubLink: `https://github.com/KangJiJi/this-is-me`,
  },
  {
    image: electronTomato,
    imageAlt: `electronPomodoroProjectImage`,
    label: `Electron pomodoro`,
    projectDescription: (
      <>
        <span className={`font-color--primary-color`}>React</span>와{' '}
        <span className={`font-color--primary-color`}>Electron</span>으로 제작한{' '}
        <span className={`font-color--secondary-primary-color`}>
          포모도로 타이머
        </span>
        다. 25분간 집중해서 일을 하고 5분을 쉬게 해주는 타이머로{' '}
        <span className={`font-color--secondary-primary-color`}>
          토마토 신호등
        </span>{' '}
        컨셉을 가지고 있는 어플리케이션이다.{' '}
        <span className={`font-color--primary-color`}>React</span>와{' '}
        <span className={`font-color--primary-color`}>Electron</span> 이외
        라이브러리는 사용하지 않았다. 윈도우에 두 가지 포터블과 설치 버전이 있고
        맥용 버전도 있다.
      </>
    ),
    projectCharacteristic: [
      'React 사용',
      'Electron 사용',
      '간단한 UI',
      '신호등 디자인',
      '시간별 알림',
    ],
    projectGitHubLink: `https://github.com/KangJiJi/electron-pomodoro`,
  },
  {
    image: flappyBird,
    imageAlt: `flappyBirdProjectImage`,
    label: `Flappy bird clone coding`,
    projectDescription: (
      <>
        객체지향프로그래밍 수업시간 개인 프로젝트로 제출한{' '}
        <span className={`font-color--primary-color`}>Java</span>와{' '}
        <span className={`font-color--primary-color`}>JavaFx</span>를 Flappy
        bird 게임{' '}
        <span className={`font-color--secondary-primary-color`}>
          clone coding
        </span>{' '}
        프로젝트. 여러 기능의 구현보다는
        <span className={`font-color--secondary-primary-color`}>
          객체지향적 사고
        </span>
        와 유지 보수 가능한 코드를 만드는 것에 더 노력하며 프로젝트를 진행했다.
        View와 Logic을 분리했고, 상속과 다형성을 이용해
        <span className={`font-color--secondary-primary-color`}>
          객체지향 패러다임
        </span>
        에 충실하게 설계를 했다. 교수님께 좋은 평가를 받을 수 있는 프로젝트였다.
      </>
    ),
    projectCharacteristic: [
      'Java와 JavaFx 사용',
      '상속과 다형성',
      'Marker interface',
      'View와 Logic의 분리',
      'Observable 객체를 이용한 View와 Logic의 연결',
      '간단한 UI',
    ],
    projectGitHubLink: `https://github.com/KangJiJi/flappy-bird-clone-coding`,
  },
  {
    image: mozziFront,
    imageAlt: `mozziFrontProjectImage`,
    label: `Mozzi front-end`,
    projectDescription: (
      <>
        서울과학기술대학교{' '}
        <span className={`font-color--secondary-primary-color`}>
          TCP 동아리
        </span>
        에서 만든 동아리 웹 프로젝트다. 현재 Back-end는 없고,{' '}
        <span className={`font-color--secondary-primary-color`}>Front-end</span>
        만 존재하며, 모든 api 요청에 delay를 통해 로딩 화면을 볼 수 있다.
        <span className={`font-color--primary-color`}>Material-ui</span>,{' '}
        <span className={`font-color--primary-color`}>React router</span>,{' '}
        <span className={`font-color--primary-color`}>Redux</span>,{' '}
        <span className={`font-color--primary-color`}>Redux-saga</span>를
        사용했다. <span className={`font-color--primary-color`}>Redux</span>는
        모든 라우팅 되는 페이지에서 로그인 상태를 알기 위해서 사용했다. 많은
        점을{' '}
        <span className={`font-color--secondary-primary-color`}>리팩토링</span>
        해야 한다.
      </>
    ),
    projectCharacteristic: [
      'React 사용',
      'Material-ui 사용',
      'Redux, Redux-saga 사용',
    ],
    projectGitHubLink: `https://github.com/TeamCrazyPerformance/mozzi_front`,
    projectLink: `https://teamcrazyperformance.github.io/mozzi_front/#/`,
  },
  {
    image: movieApp,
    imageAlt: `movieAppProjectImage`,
    label: `Movie app`,
    projectDescription: (
      <>
        유튜브에서 활동 중인 노마드 코더의{' '}
        <span className={`font-color--primary-color`}>React</span>강의 영상을
        기초로 <span className={`font-color--primary-color`}>Redux</span>와{' '}
        <span className={`font-color--secondary-primary-color`}>
          무한 스크롤
        </span>{' '}
        기능을 추가해서 만든 Movie-app 프로젝트다. 원래는 API를 통해 영화
        리스트를 보여주지만,{' '}
        <span className={`font-color--primary-color`}>Redux</span>를 통해서 영화
        정보를{' '}
        <span className={`font-color--secondary-primary-color`}>Store</span>로
        관리하고{' '}
        <span className={`font-color--secondary-primary-color`}>
          무한 스크롤
        </span>
        이 가능하게 만들었다.
      </>
    ),
    projectCharacteristic: [
      'React 사용',
      '공개 영화 API 사용',
      'Redux, Redux-thunk 사용',
      '무한 스크롤',
    ],
    projectGitHubLink: `https://github.com/KangJiJi/Movie-App`,
    projectLink: `https://kangjiji.github.io/Movie-App/`,
  },
  {
    image: foogle,
    imageAlt: `foogleProjectImage`,
    label: `Foogle`,
    projectDescription: (
      <>
        웹프로그래밍 수업시간에 만든{' '}
        <span className={`font-color--secondary-primary-color`}>
          이스터에그
        </span>
        를 숨기고 있는{' '}
        <span className={`font-color--secondary-primary-color`}>
          웹 프로젝트
        </span>
        다. Fool과 Google의 합성어로{' '}
        <span className={`font-color--secondary-primary-color`}>Foogle</span>
        이라는 이름의 프로젝트를 만들었으며,
        <span className={`font-color--primary-color`}>HTML5</span>의{' '}
        <span className={`font-color--primary-color`}>Canvas</span>를 이용해
        특정 문자열이 입력되면 비가오거나 멈추는 효과를 구현했다.{' '}
        <span className={`font-color--primary-color`}>Vanilla JS</span> 로
        구현을 했으며, 나의 첫번째 웹 프로젝트다.
      </>
    ),
    projectCharacteristic: ['HTML5 canvas 사용', 'Vanilla JS 사용'],
    projectGitHubLink: `https://github.com/KangJiJi/Foogle`,
    projectLink: `https://kangjiji.github.io/Foogle/`,
  },
];

const ProjectInfoList = () => {
  return (
    <div className={`project-info-list`}>
      {ProjectInfoContentsList.map((val) => {
        return (
          <div className={`project-info-list__info`} key={val.label}>
            <ProjectInfoListVal
              image={val.image}
              imageAlt={val.imageAlt}
              label={val.label}
              projectGitHubLink={val.projectGitHubLink}
              projectLink={val.projectLink}
              projectDescription={val.projectDescription}
              projectCharacteristic={val.projectCharacteristic}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectInfoList;
