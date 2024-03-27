import { useMemo } from "react";
import { getZodiacImageByTitle } from "../util/image-util";
import { Link } from "react-router-dom";
import { ZodiacSign } from "../types/ZodiacSign";


interface ZodiacCardProps {
    title: ZodiacSign;
}

const ZodiacCard = ({title}: ZodiacCardProps) => {
    const zodiacImg = useMemo(() => getZodiacImageByTitle(title), [title]);
    
    return (
        <Link to={title.toLowerCase()} className="w-60 h-60 rounded-lg flex justify-center items-center flex-col border-gray-800 border backdrop-blur-xl shadow-xl m-auto backdrop-brightness-50 hover:scale-125">
            <img src={zodiacImg} alt={title} className="w-36 h-36 rounded-full" />
            <h3 className="text-3xl text-white mt-3 py-2 text-center">{title}</h3>
        </Link>
    )
}

export default ZodiacCard;
