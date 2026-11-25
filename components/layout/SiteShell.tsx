"use client";
import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { Loader } from "./Loader";
import { Footer } from "./Footer";
import { ScrollProgress } from "../ui/ScrollProgress";

export function SiteShell({children}:{children:React.ReactNode}) {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{const t=setTimeout(()=>setLoading(false),1250); return ()=>clearTimeout(t)},[]);
  return <>{loading&&<Loader/>}<ScrollProgress/><Navigation/>{children}<Footer/></>;
}
