import {useCallback, useEffect, useState} from 'react';
import SpreadCards from './SpreadCards';
import Pagination from './Pagination';
import {useDispatch, useSelector} from 'react-redux';
import {getDonations} from 'services/apiSlice';
import useWindowSize from 'hooks/useWindowSize';

function DonateArtist() {
  const dispatch = useDispatch();
  const {donations} = useSelector(state => state.data);
  const {list, nextCursor} = donations;
  const [currentPage, setCurrentPage] = useState(0);
  const isDesktop = useWindowSize();

  const fetchMoreDonations = useCallback(() => {
    if (nextCursor) dispatch(getDonations({cursor: nextCursor, pageSize: 4}));
  }, [nextCursor, dispatch]);

  useEffect(() => {
    dispatch(getDonations({pageSize: 4}));
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(0);
  }, [isDesktop]);

  const totalPages = Math.ceil(list.length / 4);
  const displayedDonations = isDesktop ? list.slice(currentPage * 4, (currentPage + 1) * 4) : list;
  return (
    <Pagination
      isDesktop={isDesktop}
      cursor={nextCursor}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      fetchMoreDonations={fetchMoreDonations}
    >
      <SpreadCards lists={displayedDonations} isDesktop={isDesktop} fetchMoreDonations={fetchMoreDonations} />
    </Pagination>
  );
}

export default DonateArtist;
