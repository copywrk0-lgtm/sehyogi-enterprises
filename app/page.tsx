import { ArrowUpRight, Calculator, Sun, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HeroSolar } from "@/components/sections/HeroSolar";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTA } from "@/components/sections/CTA";
import { ProofGrid } from "@/components/sections/ProofGrid";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return <>
    <HeroSolar />
    <section className="section"><div className="container"><Reveal className="section-head"><div><span className="eyebrow">01 / What we solve</span><h2 className="h2">Solar should feel<br/>simple to decide.</h2></div><p className="lead">Start with your electricity bill, understand the right system size, then move toward a site survey and quotation.</p></Reveal><div className="service-grid"><ServiceCard number="01" icon={<Sun size={25}/>} title="On-grid solar" text="Reduce grid electricity consumption with a system sized around your actual requirement." /><ServiceCard number="02" icon={<Zap size={25}/>} title="Off-grid & backup" text="Explore solar-plus-storage setups where backup and energy independence matter." /><ServiceCard number="03" icon={<Calculator size={25}/>} title="Solar planning" text="Use the interactive calculator to turn a monthly bill into a useful starting estimate." /></div></div></section>
    <section className="section dark"><div className="container split"><Reveal><span className="eyebrow">02 / Why Sehyogi</span><h2 className="h2">A local solar partner for Bareilly.</h2></Reveal><Reveal className="dark-copy delay-2"><p className="lead">Sehyogi Enterprises is listed by UPNEDA as an approved vendor and is also profiled by UTL as a Bareilly solar dealer. The website puts that proof closer to the customer.</p><a className="btn light" href="/projects">See project proof <ArrowUpRight size={17}/></a></Reveal></div></section>
    <section className="section"><div className="container"><Reveal className="section-head"><div><span className="eyebrow">03 / Public proof</span><h2 className="h2">Credibility before<br/>claims.</h2></div><p className="lead">Vendor listing, vendor code and installation references are presented without inventing testimonials or project counts.</p></Reveal><ProofGrid/></div></section>
    <section className="section grid-bg"><div className="container"><Reveal className="section-head"><div><span className="eyebrow">04 / Start here</span><h2 className="h2">Know your numbers<br/>before you call.</h2></div><p className="lead">Enter your approximate bill and roof space to get a quick planning estimate.</p></Reveal><Reveal className="calc-teaser delay-1"><div><span className="tag">Interactive tool</span><h3>Solar savings calculator</h3><p>Bill → system size → estimated savings → payback.</p></div><a className="btn darkbtn" href="/calculator">Open calculator <ArrowUpRight size={17}/></a></Reveal></div></section>
    <section className="section"><div className="container"><Reveal className="section-head"><div><span className="eyebrow">05 / Process</span><h2 className="h2">From bill to<br/>installation plan.</h2></div><p className="lead">A clear path keeps the first conversation useful without pretending an online calculator replaces a site survey.</p></Reveal><Process/></div></section>
    <section className="section grid-bg"><div className="container"><Reveal className="section-head"><div><span className="eyebrow">06 / Questions</span><h2 className="h2">Before you<br/>go solar.</h2></div></Reveal><FAQ/></div></section>
    <CTA />
  </>;
}
