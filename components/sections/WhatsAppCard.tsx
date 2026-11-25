import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
export function WhatsAppCard(){return <div className="whatsapp-card"><div><span className="eyebrow">Fastest route</span><h3>Send your bill on WhatsApp.</h3><p>Start the conversation with your approximate monthly bill and location.</p></div><a className="btn primary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp</a></div>}
