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
<<<<<<< HEAD
            observer = new IntersectionObserver(obsHandler, {
                rootMargin: '80px',
                threshold: 1,
            });
            observer.observe(observTarget.current);
        }
        return () => {
            if (!isLoading) {
                observTarget.current && observer.unobserve(observTarget.current);
=======
            observer.current = new IntersectionObserver(obsHandler, {
                rootMargin: '80px', 
                threshold: 1,
            });
            observer.current.observe(observTarget.current);
        }
        return () => {
            if (!isLoading) {
                observTarget.current && observer.current.unobserve(observTarget.current);
>>>>>>> 397754e (feat: netflify)
            }
        };
    }, [page, isLoading]);

    return page;
};
export default useObServe;
