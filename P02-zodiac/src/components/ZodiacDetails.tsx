import { Link, useParams } from "react-router-dom";
import { getZodiacImageByTitle } from "../util/image-util";
import { useMemo } from "react";
import { ZodiacSign } from "../types/ZodiacSign";
import useZodiacDetails from "../hooks/getZodiacDetails";
import Loading from "./Loading";


const ZodiacDetails = () => {
    const {zodiacSign} = useParams();
    const zodiacImage = useMemo(() => getZodiacImageByTitle(zodiacSign as ZodiacSign), [zodiacSign]);
    const zodiacDetails = useZodiacDetails(zodiacSign as ZodiacSign);

    return (
        <div className="w-3/4 p-12 rounded-lg flex justify-center items-center flex-col border-gray-800 border backdrop-blur-xl backdrop-brightness-50 shadow-xl m-auto">
            <img src={zodiacImage} alt={zodiacSign} className="w-36 h-36 rounded-full" />
            {zodiacDetails ? <p className="text-xl text-white w-full mt-3 py-2 text-center">{zodiacDetails}</p> : <Loading />}
            <Link to="/" className="text-xl text-white my-5">Back to home</Link>
        </div>
    );
}

export default ZodiacDetails;