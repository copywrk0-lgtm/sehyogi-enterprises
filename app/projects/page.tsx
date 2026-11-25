import { ArrowUpRight, Building2, Gauge, SunMedium } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";

const projects = [
  { capacity:"10 kVA", title:"Solar system installation", type:"Installation reference", icon:<SunMedium/> },
  { capacity:"5 kVA", title:"HP Petrol Pump", type:"Commercial installation", icon:<Building2/> },
  { capacity:"3 kVA", title:"Solar installation", type:"Installation reference", icon:<Gauge/> }
];

export default function Projects(){
 return <><section className="page-hero dark"><div className="container"><span className="eyebrow">Projects / 03</span><h1 className="display">Proof you can<br/>actually see.</h1><p className="lead">Selected installation references associated with Sehyogi Enterprises. Add project photographs, dates and system specifications as they are confirmed.</p></div></section>
 <section className="section"><div className="container"><div className="project-grid">{projects.map((p,i)=><Reveal key={p.capacity} className={`project-card delay-${i}`}><div className="project-visual"><span className="project-capacity">{p.capacity}</span><div className="project-icon">{p.icon}</div><span className="project-sun"/></div><div className="project-body"><span className="eyebrow">{p.type}</span><h2>{p.title}</h2><p>Installation reference published in Sehyogi Enterprises' UTL dealer profile. Final project documentation can be added to the case study when supplied.</p><a href="/contact" className="text-link">Discuss a similar project <ArrowUpRight size={15}/></a></div></Reveal>)}</div></div></section>
 <section className="section dark"><div className="container proof-layout"><Reveal><span className="eyebrow">Public verification</span><h2 className="h2">Don't take the website's word for it.</h2></Reveal><Reveal className="delay-1"><p className="lead">Sehyogi Enterprises appears on the UPNEDA approved-firms list with vendor code BRY2211290200. Its UTL dealer profile also lists 10 kVA, 5 kVA HP petrol pump and 3 kVA installation references.</p><div className="source-links"><a className="btn light" href="https://upnedasolarrooftopportal.com/Approved-Firms" target="_blank" rel="noreferrer">UPNEDA listing ↗</a><a className="btn light" href="https://www.upsinverter.com/utl/bareily/" target="_blank" rel="noreferrer">UTL profile ↗</a></div></Reveal></div></section><CTA /></>;
}
