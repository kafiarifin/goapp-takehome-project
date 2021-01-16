import { useState } from "react";

const useBanner = () => {

    const [showSkeleton, setShowSkeleton] = useState(false);
    const handleLoaded = () => setShowSkeleton(true);

    return {
        handleLoaded,
        showSkeleton
    }
}

export default useBanner;