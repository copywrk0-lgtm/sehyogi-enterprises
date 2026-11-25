"use client";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
export function Navigation(){
 const [open,setOpen]=useState(false);
 const links=[["/","Home"],["/solutions","Solutions"],["/projects","Projects"],["/calculator","Calculator"],["/about","About"],["/contact","Contact"]];
 return <header className={`nav ${open?"nav-open":""}`}><div className="nav-inner"><a className="logo" href="/">SEHYOGI<span>●</span></a><nav className="desktop-nav" aria-label="Primary navigation">{links.map(([href,label])=><a key={href} href={href}>{label}</a>)}</nav><a className="nav-cta" href="/contact">Get a quote <ArrowUpRight size={15}/></a><button className="menu-btn" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<div className="mobile-nav">{links.map(([href,label])=><a onClick={()=>setOpen(false)} key={href} href={href}>{label}<ArrowUpRight size={16}/></a>)}<a className="mobile-quote" onClick={()=>setOpen(false)} href="/contact">Start a solar enquiry <ArrowUpRight size={16}/></a></div>}</header>
}
