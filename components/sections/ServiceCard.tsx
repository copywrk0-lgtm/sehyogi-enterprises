import { ArrowUpRight } from "lucide-react";
export function ServiceCard({number,icon,title,text}:{number:string,icon:React.ReactNode,title:string,text:string}){return <article className="service-card card"><div className="service-top"><span>{number}</span><div>{icon}</div></div><h3>{title}</h3><p>{text}</p><a href="/solutions">Explore <ArrowUpRight size={15}/></a></article>}
