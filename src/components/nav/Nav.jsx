import { useNavigate } from "react-router-dom";
import parseImg from "utils/images";

function Nav() {
  const navigate = useNavigate();

  const handleNavigateMypage = () => {
    navigate("/myPage");
  };

  const clickLogo = () => {
    // 현재 페이지로 새로고침
    window.location.reload();
  };

  return (
    <div className="nav">
      <button
        type="button"
        onClick={clickLogo} /*클릭시 새로고침 페이지로 넘어가기*/
        className="nav-logo-btn"
      >
        <img src={parseImg("img_logo.svg")} alt="로고" />
      </button>
      <button  onClick={
          handleNavigateMypage
        } /*클릭시 /mypage로 이동, 프로필 이미지는 자유*/ className="moving-mypage-button">
      <img
        src={parseImg("img_userProfile.svg")}
        alt="내프로필사진"
        className="nav-profile-img"
      />
      </button>
    </div>
  );
}

export default Nav;
