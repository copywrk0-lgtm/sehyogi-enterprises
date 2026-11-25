"use client";
import { useEffect, useState } from "react";
export function ScrollProgress(){const [p,setP]=useState(0);useEffect(()=>{const f=()=>{const h=document.documentElement;setP((h.scrollTop/(h.scrollHeight-h.clientHeight))*100)};addEventListener("scroll",f,{passive:true});f();return()=>removeEventListener("scroll",f)},[]);return <div className="scroll-progress" style={{width:`${p}%`}}/>}
