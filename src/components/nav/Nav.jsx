import { useNavigate } from "react-router-dom";
import parseImg from "utils/images";

function Nav() {
  const navigate = useNavigate();

  const clickUserProfile = () => {
    navigate("/myPage");
  };

  const clickLogo = () => {
    // 현재 페이지로 강제 새로고침
    window.location.href = "/";
  };

  return (
    <div className="nav">
      <button
        type="reset"
        onClick={clickLogo} /*클릭시 새로고침 페이지로 넘어가기*/
        className="nav-logo-btn"
      >
        <img src={parseImg("img_logo.svg")} alt="로고" />
      </button>
      <img
        onClick={
          clickUserProfile
        } /*클릭시 /mypage로 이동, 프로필 이미지는 자유*/
        src={parseImg("img_userProfile.svg")}
        alt="내프로필사진"
        className="nav-profile-img"
      />
    </div>
  );
}

export default Nav;
