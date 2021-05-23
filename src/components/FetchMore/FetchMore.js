import { useRef, useEffect } from 'react';

const FetchMore = ({ setPage }) => {
  const fetchMoreRef = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage(page => page + 1);
  });

  useEffect(() => {
    const fetchMore = fetchMoreRef.current;

    fetchMoreObserver.observe(fetchMore);

    return () => {
      fetchMoreObserver.unobserve(fetchMore);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={fetchMoreRef} />;
};

export default FetchMore;
