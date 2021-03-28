import React from 'react'
import loaderSVG from "../../assets/oval.svg"
import "./styles.css"
export default function Loader() {
    return (
        <div className="loader">
            <img src={loaderSVG} alt="Oval-Loader" />            
        </div>
    )
}
