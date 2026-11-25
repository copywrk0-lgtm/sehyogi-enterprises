"use client";
import { useEffect, useState } from "react";
import { Sun } from "lucide-react";
export function Loader(){
 const [show,setShow]=useState(false);
 useEffect(()=>{
   const seen=sessionStorage.getItem("sehyogi-loader-seen");
   if(seen) return;
   setShow(true);
   sessionStorage.setItem("sehyogi-loader-seen","1");
   const t=window.setTimeout(()=>setShow(false),1600);
   return()=>window.clearTimeout(t);
 },[]);
 if(!show) return null;
 return <div className="loader"><div className="loader-sun"><Sun size={34}/></div><div className="loader-brand">SEHYOGI ENTERPRISES</div><div className="loader-track"><i/></div><div className="loader-sub">SOLAR · BAREILLY</div></div>
}
