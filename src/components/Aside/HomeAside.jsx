import React, {Suspense,lazy} from 'react';
import useObjserver from '../../hooks/useObjserver';
import Loader from '../Loader/Loader';

const GifsTrendsList = lazy(()=> import("../TrendsList/TrendsList"));

export default function HomeAside() {
  const {isNeerScreen,fromRef} = useObjserver({once:true});
  return (
    <aside className="aside" ref={fromRef} >
      {
        <Suspense fallback={<Loader />}>
          {
            isNeerScreen && <GifsTrendsList />
          }
        </Suspense>
      }
    </aside>
  )
}
