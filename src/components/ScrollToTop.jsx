import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Immediate scroll to top - no animation
        window.scrollTo(0, 0);
        
        // Also reset document scroll
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Force scroll after a tiny delay to override any restoration
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);
        
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 10);
    }, [pathname]);

    return null;
}
