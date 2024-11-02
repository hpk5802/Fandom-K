import React from 'react';
import Intro from '../components/LandingPage/Intro';
import parseImg from 'utils/images';
import GradientButton from 'components/common/GradientButton';

//front는 앞쪽 이미지, back은 백그라운드 이미지를 의미
const mainLogo = parseImg('ic_fandom_k.svg');
const backMain = parseImg('img_intro_main.svg');

const frontDonation = parseImg('img_intro_front_donate_artist.svg');
const backDonation = parseImg('img_intro_back_donate_artist.svg');

const frontMonthly = parseImg('img_intro_front_monthly_artist.svg');
const backMonthly = parseImg('img_intro_back_monthly_artist.svg');

const frontMyArtist = parseImg('img_intro_front_my_artist.svg');
const backMyArtist = parseImg('img_intro_back_my_artist.svg');

function LandingPage() {
  return (
    <>
      <div className="main-container">
        <div className="main-texts">
          <div className="main-title">
            내가 좋아하는 아이돌을
            <br />
            가장 <span className="main-title-highlight">쉽게 덕질</span> 하는 방법
          </div>

          <div className="main-logo-container">
            <img src={mainLogo} alt="목록으로 가기" className="main-logo" />
          </div>
        </div>
        <GradientButton
          name="go-to-list-button"
          /* handleClick={} */
        >
          지금 시작하기
        </GradientButton>
        <img src={backMain} alt="메인 백그라운드 이미지" className="main-back-img" />
        <div className="main-gradient" />
      </div>

      <Intro
        title="후원하기"
        subtitle={
          <>
            좋아하는 아이돌에게
            <br />
            쉽게 조공해보세요
          </>
        }
        frontImage={frontDonation}
        backImage={backDonation}
      />

      <Intro
        title="이달의 아티스트"
        subtitle={
          <>
            내 아티스트에게 1등의
            <br /> 영예를 선물하세요
          </>
        }
        frontImage={frontMonthly}
        backImage={backMonthly}
      />

      <Intro
        title="나만의 아티스트"
        subtitle={
          <>
            좋아하는 아티스트들의
            <br /> 소식을 모아보세요
          </>
        }
        frontImage={frontMyArtist}
        backImage={backMyArtist}
      />
    </>
  );
}

export default LandingPage;