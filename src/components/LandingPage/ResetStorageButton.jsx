import {useNavigate} from 'react-router-dom';
import GradientButton from 'components/common/GradientButton';
import {useDispatch} from 'react-redux';
import {resetFavorite} from 'services/apiSlice';

// React 컴포넌트로 변경
function ResetStorageButton({children}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStartClick = () => {
    // localStorage 초기화
    localStorage.clear();
    localStorage.setItem('myCredits', '0');
    dispatch(resetFavorite());
    // 페이지 이동
    navigate('/list');
  };

  return (
    <GradientButton name="go-to-list-button" handleClick={handleStartClick}>
      {children}
    </GradientButton>
  );
}

export default ResetStorageButton;
