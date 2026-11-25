"use client";
import { ArrowDown, ArrowUpRight, Calculator, IndianRupee, Sun, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "../ui/Reveal";

export function HeroSolar() {
  const [bill, setBill] = useState(5000);

  const estimate = useMemo(() => {
    const monthly = Math.max(500, bill);
    const annualBill = monthly * 12;
    const savings = annualBill * 0.68;
    const systemKw = Math.max(1, Math.min(12, Math.round((monthly / 1150) * 10) / 10));
    return { savings, systemKw };
  }, [bill]);

  return (
    <section className="hero">
      <div className="hero-noise" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow">Solar for Bareilly homes & businesses</span>
            <h1 className="display">Turn your bill<br /><em>into savings.</em></h1>
            <p className="lead">
              Bring us your electricity bill. We’ll help you understand the right solar size,
              likely savings and what to do next.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="/calculator">
                Calculate my solar <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#how-it-works">
                How it works <ArrowDown size={16} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-estimator delay-2">
          <div className="estimator-card">
            <div className="estimator-top">
              <div>
                <span className="tag"><Calculator size={12} /> Quick estimate</span>
                <h2>What does your bill look like?</h2>
              </div>
              <Sun className="estimator-sun" size={24} />
            </div>

            <div className="bill-value">
              <span>Monthly electricity bill</span>
              <strong><IndianRupee size={25} />{bill.toLocaleString("en-IN")}</strong>
            </div>

            <input
              aria-label="Monthly electricity bill"
              type="range"
              min="1000"
              max="25000"
              step="500"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
            />

            <div className="range-labels"><span>₹1k</span><span>₹25k</span></div>

            <div className="estimate-result">
              <div>
                <span>Illustrative annual savings</span>
                <strong>₹{Math.round(estimate.savings).toLocaleString("en-IN")}</strong>
              </div>
              <div>
                <span>Starting system size</span>
                <strong>{estimate.systemKw} kW</strong>
              </div>
            </div>

            <div className="estimate-foot">
              <Zap size={15} />
              <span>Planning estimate only — final sizing follows a site survey.</span>
            </div>

            <a className="btn darkbtn full" href="/calculator">
              See your full estimate <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="hero-bottom">
        <span>SEHYOGI ENTERPRISES · BAREILLY</span>
        <span>Scroll to explore ↓</span>
      </div>
    </section>
  );
}
