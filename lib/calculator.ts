export type SolarInputs = {
  bill: number;
  kw: number;
  roof: number;
  tariff: number;
  generation: number;
  installRate: number;
  subsidy: number;
};

export function estimate(i: SolarInputs) {
  const fixed = 150;
  const safeTariff = Math.max(0.01, i.tariff);
  const safeGeneration = Math.max(1, i.generation);
  const units = Math.max(0, (i.bill - fixed) / safeTariff);
  const made = Math.max(0, i.kw) * safeGeneration;
  const solarUnits = Math.min(units, made);
  const newBill = fixed + Math.max(0, units - solarUnits) * safeTariff;
  const saving = Math.max(0, i.bill - newBill);
  const netCost = Math.max(0, Math.max(0, i.kw) * Math.max(0, i.installRate) - Math.max(0, i.subsidy));
  const required = Math.max(0.5, Math.ceil((units / safeGeneration) * 2) / 2);
  const roofMax = Math.max(0, Math.floor((Math.max(0, i.roof) / 100) * 2) / 2);

  return {
    units,
    made,
    solarUnits,
    newBill,
    saving,
    netCost,
    payback: saving > 0 ? netCost / (saving * 12) : Infinity,
    required,
    roofMax
  };
}
