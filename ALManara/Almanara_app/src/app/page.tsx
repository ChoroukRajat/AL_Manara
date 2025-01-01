import dynamic from 'next/dynamic';
import Hero from "./hero";



// Dynamically import the GeoJSONMap component, disabling SSR
const GeoJSONMap = dynamic(() => import('../components/GeoJSONMap'), { ssr: false });

export default function Campaign() {
    return (
        <>
            <Hero />
            {/*<GeoJSONMap/>*/}
        </>
    );
}
