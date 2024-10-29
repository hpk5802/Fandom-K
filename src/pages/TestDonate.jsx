import DonateArtist from 'components/donateArtist/DonateArtist';
import Pagination from 'components/donateArtist/Pagination';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDonations} from 'services/apiSlice';

function TestDonate() {
  const dispatch = useDispatch();
  const {donations} = useSelector(state => state.data);
  const [cursor, setCursor] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (cursor) {
      fetchMoreDonations();
      setCurrentPage(prev => prev + 1);
    } else if (currentPage * 4 + 4 < donations.list.length) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const fetchMoreDonations = useCallback(async () => {
    const result = await dispatch(getDonations({cursor: cursor, pageSize: 4}));
    setCursor(result.payload.nextCursor);
  }, [cursor, dispatch]);

  useEffect(() => {
    const loadInitialData = async () => {
      const result = await dispatch(getDonations({pageSize: 4}));
      setCursor(result.payload.nextCursor);
    };

    loadInitialData();
  }, [dispatch]);

  const canGoPrevious = currentPage > 0;
  const canGoNext = cursor || currentPage * 4 + 4 < donations.list.length;
  const displayedDonations = donations.list.slice(currentPage * 4, (currentPage + 1) * 4);
  return (
    <>
      <Pagination onNext={handleNextPage} onPrevious={handlePreviousPage} canGoNext={canGoNext} canGoPrevious={canGoPrevious}>
        <DonateArtist lists={displayedDonations} />
      </Pagination>
    </>
  );
}

export default TestDonate;
