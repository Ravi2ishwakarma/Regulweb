import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';

function Scrollup() {
   const {pathname}=useLocation();
   useLayoutEffect(()=>{
    requestAnimationFrame(()=>{
        window.scrollTo(0,0);
    });
   },[pathname]);
   return null;
}

export default Scrollup
