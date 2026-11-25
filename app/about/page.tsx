import { CheckCircle2, ExternalLink, MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";
import { site } from "@/lib/site";

export default function About() {
  return <>
    <section className="page-hero dark"><div className="container"><span className="eyebrow">About Sehyogi Enterprises</span><h1 className="display">Local presence.<br/>Solar focus.</h1><p className="lead">A Bareilly-based solar business with public vendor information and documented installation activity.</p></div></section>
    <section className="section"><div className="container about-grid"><Reveal><span className="eyebrow">Verified profile</span><h2 className="h2">The facts customers can actually use.</h2><p className="lead">UPNEDA's approved-firms listing identifies Sehyogi Enterprises with vendor code {site.vendorCode}, phone {site.phone} and its Bareilly address. UTL's public dealer profile also describes Sehyogi as an authorized UTL franchise in Bareilly.</p><div className="source-links"><a className="btn darkbtn" href={site.sources.upneda} target="_blank" rel="noreferrer">UPNEDA listing <ExternalLink size={15}/></a><a className="btn" href={site.sources.utl} target="_blank" rel="noreferrer">UTL dealer profile <ExternalLink size={15}/></a></div></Reveal><Reveal className="facts delay-1"><div><ShieldCheck/><span>UPNEDA vendor</span><b>Vendor code: {site.vendorCode}</b></div><div><MapPin/><span>Location</span><b>{site.address}</b></div><div><CheckCircle2/><span>Solutions</span><b>On-grid · Off-grid · Hybrid</b></div><div><CheckCircle2/><span>Public installation references</span><b>10 kVA, 5 kVA HP Petrol Pump and 3 kVA installations</b></div></Reveal></div></section>
    <section className="section green"><div className="container"><span className="eyebrow">How we present the business</span><h2 className="h2">Proof first.<br/>Promises second.</h2><p className="lead">This demo deliberately avoids invented reviews, fake project counts or unsupported guarantees. Real project photos, testimonials and certifications can be added as they are verified.</p></div></section>
    <CTA />
  </>;
}
