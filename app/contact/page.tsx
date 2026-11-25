"use client";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Contact() {
  const [name,setName]=useState(""),[bill,setBill]=useState("");
  const msg=`Namaste Sehyogi Enterprises. ${name?`Mera naam ${name} hai. `:""}Mera monthly electricity bill approx ₹${bill||"____"} hai. Mujhe solar ke liye requirement aur quotation discuss karna hai.`;
  const wa=whatsappUrl(msg);
  return <><section className="page-hero green"><div className="container"><span className="eyebrow">Contact / 05</span><h1 className="display">Let's talk<br/>solar.</h1><p className="lead">Send your bill, ask a question or request a site discussion.</p></div></section>
    <section className="section"><div className="container contact-grid"><Reveal className="contact-card"><span className="eyebrow">Direct</span><h2>{site.brand}</h2><div className="contact-row"><Phone/><div><span>Phone</span><a href={site.phoneHref}>{site.phone}</a></div></div><div className="contact-row"><Mail/><div><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></div></div><div className="contact-row"><MapPin/><div><span>Address</span><b>{site.address}</b></div></div><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=63+Avas+Vikas+Shopping+Complex+Rajendra+Nagar+Bareilly+Uttar+Pradesh" target="_blank" rel="noreferrer">Open location in Google Maps ↗</a></Reveal>
      <Reveal className="form-card delay-1"><span className="eyebrow">WhatsApp enquiry</span><h2>Send a useful first message.</h2><label>Name<input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/></label><label>Approx monthly bill<input value={bill} onChange={e=>setBill(e.target.value)} placeholder="₹5,000" inputMode="numeric"/></label><a className="btn primary full" href={wa} target="_blank" rel="noreferrer"><MessageCircle/> Open WhatsApp</a><p className="small">Your message includes the information above so the conversation can start with context.</p></Reveal></div></section></>;
}
