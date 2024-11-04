import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Intro from '../components/LandingPage/Intro';
// import ResetStorageButton from '../components/LandingPage/ResetStorageButton';
import parseImg from 'utils/images';

//front는 앞쪽 이미지, back은 백그라운드 이미지를 의미
const mainLogo = parseImg('ic_fandom_k.svg');
const backMain = parseImg('img_intro_main.svg');

const frontDonation = parseImg('img_intro_front_donate_artist.svg');
const backDonation = parseImg('img_intro_back_donate_artist.svg');

const frontMonthly = parseImg('img_intro_front_monthly_artist.svg');
const backMonthly = parseImg('img_intro_back_monthly_artist.svg');

const frontMyArtist = parseImg('img_intro_front_my_artist.svg');
const backMyArtist = parseImg('img_intro_back_my_artist.svg');

const getArtists = [
  {
    id: 1,
    profilePicture: 'img_idol_minJi_example.svg',
    name: '민지',
    group: '뉴진스',
  },
  {
    id: 2,
    profilePicture: 'img_idol_minJi_example.svg',
    name: '민지',
    group: '뉴진스',
  },
  {
    id: 3,
    profilePicture: 'img_idol_minJi_example.svg',
    name: '민지',
    group: '뉴진스',
  },
  {
    id: 4,
    profilePicture: 'img_idol_minJi_example.svg',
    name: '민지',
    group: '뉴진스',
  },
  {
    id: 5,
    profilePicture: 'img_idol_minJi_example.svg',
    name: '민지',
    group: '뉴진스',
  },
  {
    id: 6,
    profilePicture: 'img_idol_minJi_example.svg',
    name: '민지',
    group: '뉴진스',
  },
  {
    id: 7,
    profilePicture: 'img_idol_minJi_example.svg',
    name: '민지',
    group: '뉴진스',
  },
  {
    id: 8,
    profilePicture: 'img_idol_minJi_example.svg',
    name: '민지',
    group: '뉴진스',
  },
  {
    id: 9,
    profilePicture: 'img_idol_minJi_example.svg',
    name: '민지',
    group: '뉴진스',
  },
  {
    id: 10,
    profilePicture: 'img_idol_minJi_example.svg',
    name: '민지',
    group: '뉴진스',
  },
];

function LandingPage() {
  // 첫 렌더링 시 myCredits라는 key가 없거나, key에 대응되는 value가 없다면 초기값 설정
  useEffect(() => {
    const currentCredits = localStorage.getItem('myCredits');
    const favoriteArtists = JSON.parse(localStorage.getItem('myFavoriteArtists'));

    if (currentCredits === null) {
      localStorage.setItem('myCredits', '0');
    }

    if (!favoriteArtists) localStorage.setItem('myFavoriteArtists', JSON.stringify(getArtists));
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="main-texts">
          <div className="main-title">
            내가 좋아하는 아이돌을
            <br />
            가장 <span className="main-title-highlight">쉽게 덕질</span> 하는 방법
          </div>

          <Link to="/list">
            <img src={mainLogo} alt="목록으로 가기" className="main-logo" />
          </Link>
        </div>
        {/* local storage 리셋 및 /list page 이동 */}
        {/* <ResetStorageButton>지금 시작하기</ResetStorageButton> */}

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
