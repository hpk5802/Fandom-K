import {useCallback, useEffect, useState} from 'react';
import SpreadCards from './SpreadCards';
import Pagination from './Pagination';
import {useDispatch, useSelector} from 'react-redux';
import {getDonations} from 'services/apiSlice';

function DonateArtist() {
  const dispatch = useDispatch();
  const {donations} = useSelector(state => state.data);
  const {list, nextCursor} = donations;
  const [currentPage, setCurrentPage] = useState(0);

  const fetchMoreDonations = useCallback(async () => {
    dispatch(getDonations({cursor: nextCursor, pageSize: 4}));
  }, [nextCursor, dispatch]);

  useEffect(() => {
    dispatch(getDonations({pageSize: 4}));
  }, [dispatch]);

  const totalPages = Math.ceil(list.length / 4);
  const displayedDonations = list.slice(currentPage * 4, (currentPage + 1) * 4);
  return (
    <Pagination
      cursor={nextCursor}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      fetchMoreDonations={fetchMoreDonations}
    >
      <SpreadCards lists={displayedDonations} />
    </Pagination>
  );
}

export default DonateArtist;
