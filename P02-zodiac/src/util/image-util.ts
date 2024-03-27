import aquariusImg from "../assets/aquarius.png";
import ariesImg from "../assets/aries.png";
import cancerImg from "../assets/cancer.png";
import capricornImg from "../assets/capricorn.png";
import geminiImg from "../assets/gemini.png";
import leoImg from "../assets/leo.png";
import libraImg from "../assets/libra.png";
import piscesImg from "../assets/pisces.png";
import sagittariusImg from "../assets/sagittarius.png";
import scorpioImg from "../assets/scorpio.png";
import taurusImg from "../assets/taurus.png";
import virgoImg from "../assets/virgo.png";
import { ZodiacSign } from "../types/ZodiacSign";

const zodiacImageByTitle: Record<string, string> = {
    aquarius: aquariusImg,
    aries: ariesImg,
    cancer: cancerImg,
    capricorn: capricornImg,
    gemini: geminiImg,
    leo: leoImg,
    libra: libraImg,
    pisces: piscesImg,
    sagittarius: sagittariusImg,
    scorpio: scorpioImg,
    taurus: taurusImg,
    virgo: virgoImg
};

export const getZodiacImageByTitle = (zodiacSign: ZodiacSign) => zodiacImageByTitle[zodiacSign.toLowerCase()];
