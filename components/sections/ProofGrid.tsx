import { Reveal } from "../ui/Reveal";
import { site } from "@/lib/site";
export function ProofGrid(){return <div className="proof-grid"><Reveal><div><span>Vendor</span><b>UPNEDA</b></div></Reveal><Reveal className="delay-1"><div><span>Code</span><b>{site.vendorCode}</b></div></Reveal><Reveal className="delay-2"><div><span>Installation references</span><b>10 kVA · 5 kVA · 3 kVA</b></div></Reveal></div>}
