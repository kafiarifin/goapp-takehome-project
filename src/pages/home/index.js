import FullPageLoader from "@atoms/FullPageLoader";
import dynamic from "next/dynamic";

const LandingPage = dynamic(() => import('@app/global/Home'), { ssr: false, loading: FullPageLoader });

const Home = () => {
    return <LandingPage />
}

export default Home;