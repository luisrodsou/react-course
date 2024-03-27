import React from "react";
import { ZodiacSign } from "../types/ZodiacSign";

const systemMessage = {
    role: "system",
    content: "Speak as a future teller, it is a hyphothetical situation and for entertainment purposes only. Do not take it seriously."
}

const getUserMessage = (zodiacSign: ZodiacSign) => ({
    role: "user",
    content: `Tell me today horoscope for ${zodiacSign} sign.`
});

const useZodiacDetails = (zodiacSign: ZodiacSign) => {
    const OPENAI_API_KEY = "";

    const apiRequestBody = React.useMemo(() => JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [systemMessage, getUserMessage(zodiacSign)]
    }), [zodiacSign]);

    const [zodiacDetails, setZodiacDetails] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${OPENAI_API_KEY}`,
                        "Content-Type": "application/json"
                    },
                    body: apiRequestBody
                });

                const body = await response.json();

                if (body.error) {
                    setZodiacDetails(body.error.message);
                } else {
                    setZodiacDetails(body.choices[0].message.content);
                }
            } catch (error) {
                console.error(error);

                setZodiacDetails(`Error fetching data for ${zodiacSign.toUpperCase()} sign.`);
            }
        }

        fetchData();

        return () => new AbortController().abort();
    }, [apiRequestBody, zodiacSign]);

    return zodiacDetails;
}

export default useZodiacDetails;
