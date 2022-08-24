import { useEffect, useCallback, useRef, useState } from 'react';

const useObServe = (observTarget, isLoading = false) => {
    let observer = useRef(null);
    const [page, setPage] = useState(0);

    const obsHandler = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        if (observTarget.current && !isLoading) {
            observer = new IntersectionObserver(obsHandler, {
                rootMargin: '80px',
                threshold: 1,
            });
            observer.observe(observTarget.current);
        }
        return () => {
            if (!isLoading) {
                observTarget.current && observer.unobserve(observTarget.current);
            }
        };
    }, [page, isLoading]);

    return page;
};
export default useObServe;
