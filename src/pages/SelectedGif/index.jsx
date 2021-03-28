import React from 'react';
import singleGifs from "../../hooks/useSingleGif";
import Loader from "../../components/Loader/Loader";
// import Helmet from "react-helmet";


function GifSelected({ params }) {
    const { id } = params;
    const { gif, isLoading, isTheresAnError, errorMessage } = singleGifs(id);

    if (isLoading) return <Loader />
    if (isTheresAnError) return <h3>{errorMessage}</h3>

    const { title, images } = gif
    const image = images.original.webp;

    return (
        <>
            {/* <Helmet>
                <title>{title}</title>
            </Helmet> */}
            <h1>{title}</h1>
            <img src={image} alt={title} />
        </>
    )
}

export default GifSelected