import React, { useState, useEffect } from 'react'
import { getGifsTrending } from '../../services/getGifsTrending';
import { Link } from "wouter";
import  "./styles.css";
const TrendItem = ({title}) => {
  const splited =  title.split(" ")
  const brefTitle = splited[0].length < 6 
    ? `${splited[0]} ${splited[1]}` : splited[0]

  return (
    // <li>
    <Link className="tag" to={brefTitle}>
      {brefTitle}
    </Link>
    /* </li> */
  );
}
export default function TrendsList() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    const trends = getGifsTrending(1,5);
    trends.then(res => {
      setTrends(res)
    });
  }, [])

  return (
    <ul>
      {
        trends.map(item => (
          <TrendItem key={item.id} title={item.title} />
        ))
      }
    </ul>
  )
}
