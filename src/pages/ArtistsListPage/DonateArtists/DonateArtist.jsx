import React, {useState} from 'react';
import SpreadCards from './Components/SpreadCards';
import Pagination from './Components/Pagination';
import mockData from 'utils/mockData';

function DonateArtist() {
  const itemsPerPage = 4;
  const dataLength = mockData.length;

  // Pagination 관련 상태를 상위 컴포넌트에서 관리
  const [startIndex, setStartIndex] = useState(0);

  return (
    <Pagination dataLength={dataLength} setStartIndex={setStartIndex} itemsPerPage={itemsPerPage}>
      <SpreadCards startIndex={startIndex} itemsPerPage={itemsPerPage} />
    </Pagination>
  );
}

export default DonateArtist;
