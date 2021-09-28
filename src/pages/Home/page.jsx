import React from "react";
import Loader from "components/Loader/Loader";
import HomeAside from "components/Aside/HomeAside";
import GifsList from "components/GifsList/GifsList";
// import Helmet from "react-helmet";
import "./styles.css";

function HomePage({ isLoading, reference, nextPage, isNextPageLoading }) {
  return (
    <>
      {/* <Helmet>
        <title>Home | Giffthy</title>
        <meta
          name="description"
          content="Giffthy home page more than 5,000,000 available so on"
        />
      </Helmet> */}
      <div className="layout">
        <main className="main">{isLoading ? <Loader /> : <GifsList />}</main>
        <HomeAside />
      </div>
      <div id="intersectToFetch" ref={reference}>
        {isNextPageLoading && <Loader />}
        <button onClick={nextPage}>Fetch</button>
      </div>
    </>
  );
}
export default HomePage;
