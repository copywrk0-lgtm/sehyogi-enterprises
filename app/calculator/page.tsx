"use client";
import { useMemo, useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { estimate } from "@/lib/calculator";
import { whatsappUrl } from "@/lib/whatsapp";

export default function CalculatorPage() {
  const [bill,setBill]=useState(5000), [kw,setKw]=useState(3), [roof,setRoof]=useState(400), [tariff,setTariff]=useState(7), [gen,setGen]=useState(120), [cost,setCost]=useState(60000), [subsidy,setSubsidy]=useState(0);
  const m=useMemo(()=>estimate({bill,kw,roof,tariff,generation:gen,installRate:cost,subsidy}),[bill,kw,roof,tariff,gen,cost,subsidy]);
  const wa=whatsappUrl(`Namaste Sehyogi Enterprises. Mera monthly bill approx ₹${Math.round(bill).toLocaleString("en-IN")} hai. Calculator ke hisaab se mujhe approx ${kw.toFixed(1)} kW solar dekhna hai. Please suitable size aur quotation share kijiye.`);
  return <><section className="page-hero green"><div className="container"><span className="eyebrow">Solar calculator</span><h1 className="display">Turn your bill<br/>into a plan.</h1><p className="lead">Indicative estimate only. Final sizing and savings depend on site survey, tariff, system specifications and applicable scheme rules.</p></div></section>
    <section className="section"><div className="container calc-layout"><Reveal className="calc-panel">
      <div className="calc-head"><div><span className="eyebrow">Inputs</span><h2>Tell us about your site.</h2></div><Calculator/></div>
      <label>Monthly electricity bill <b>₹{bill.toLocaleString("en-IN")}</b><input type="range" min="1000" max="50000" step="250" value={bill} onChange={e=>setBill(+e.target.value)}/></label>
      <label>Solar system size <b>{kw.toFixed(1)} kW</b><input type="range" min="0.5" max="10" step=".5" value={kw} onChange={e=>setKw(+e.target.value)}/></label>
      <label>Available roof area <b>{roof} sq ft</b><input type="range" min="100" max="2000" step="25" value={roof} onChange={e=>setRoof(+e.target.value)}/></label>
      <div className="input-grid"><label>Tariff ₹/unit<input type="number" min="0.01" step=".1" value={tariff} onChange={e=>setTariff(Math.max(.01,+e.target.value||0))}/></label><label>Generation / kW / month<input type="number" min="1" value={gen} onChange={e=>setGen(Math.max(1,+e.target.value||0))}/></label><label>Install rate ₹/kW<input type="number" min="0" value={cost} onChange={e=>setCost(Math.max(0,+e.target.value||0))}/></label><label>Subsidy ₹<input type="number" min="0" value={subsidy} onChange={e=>setSubsidy(Math.max(0,+e.target.value||0))}/></label></div>
      <p className="calculator-note">Planning assumptions are editable. This tool is not a tariff quote, subsidy guarantee or engineering calculation.</p>
    </Reveal><Reveal className="result-panel delay-1"><span className="eyebrow">Estimate</span><div className="result-big">₹{Math.round(m.newBill).toLocaleString("en-IN")}<small> estimated monthly bill</small></div><div className="metric"><span>Monthly saving</span><strong>₹{Math.round(m.saving).toLocaleString("en-IN")}</strong></div><div className="metric"><span>Estimated payback</span><strong>{isFinite(m.payback)?m.payback.toFixed(1)+" years":"—"}</strong></div><div className="metric"><span>Bill-based size</span><strong>{m.required.toFixed(1)} kW</strong></div><div className="metric"><span>Roof capacity at 100 sq ft/kW</span><strong>{m.roofMax.toFixed(1)} kW</strong></div><a className="btn primary full" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Send this estimate on WhatsApp</a></Reveal></div></section></>;
}
