import { apiKey, getGifByIdEndPoint } from "./enpoints";

async function getSingleGifs(id) {
    try {
        const getSingleGifsEndPoint = `${getGifByIdEndPoint}/${id}?api_key=${apiKey}`;
       
        const res = await fetch(getSingleGifsEndPoint);

        if (!res.ok) throw new Error("Something was wrong during the rosources request");

        const { data } = await res.json();
        
        return data;
    }
    catch (err) {
        // throw new Error(err);
        console.log(err)
    }
}

export default getSingleGifs
