import { BatteryCharging, Building2, Home, SunMedium, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SolutionBlock } from "@/components/sections/SolutionBlock";
import { CTA } from "@/components/sections/CTA";

export default function Solutions() {
  return <>
    <section className="page-hero dark"><div className="container"><span className="eyebrow">Solutions / 01</span><h1 className="display">Solar built<br/>around the site.</h1><p className="lead">Residential, commercial and backup-oriented solar options — with final sizing determined after site assessment.</p></div></section>
    <SolutionBlock icon={<Home/>} index="01" title="Residential on-grid" text="For homes looking to reduce recurring electricity costs. Start with your current bill, available roof area and consumption pattern." />
    <SolutionBlock icon={<BatteryCharging/>} index="02" title="Off-grid & backup" text="For locations where backup and energy independence are important. Storage requirements should be evaluated against actual load." dark />
    <SolutionBlock icon={<Building2/>} index="03" title="Commercial solar" text="For shops, offices, petrol pumps and other commercial sites where daytime consumption can make solar especially relevant." />
    <SolutionBlock icon={<SunMedium/>} index="04" title="Hybrid systems" text="Combine solar generation with battery backup and grid supply. The right configuration depends on load profile and backup goals." dark />
    <CTA />
  </>;
}
