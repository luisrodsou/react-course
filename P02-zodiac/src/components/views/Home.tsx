import { useMemo } from "react"
import { ZodiacSign } from "../../types/ZodiacSign"
import ZodiacCard from "../ZodiacCard"

const Home = () => {
    const zodiacCards = useMemo(() => Object.values(ZodiacSign).map(zodiacSign => <ZodiacCard title={zodiacSign} />), []);

    return (
        <div className="overflow-y-auto max-h-full p-12 grid md:grid-cols-3 sm:grid-cols-1 gap-20">
            {zodiacCards}
        </div>
    )
}

export default Home;
