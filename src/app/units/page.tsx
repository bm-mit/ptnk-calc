"use client";

import { Input } from "@/components/ui/input";
import DropdownSelect from "../../components/DropdownSelect";
import { IoIosSwap } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import {
  Angle,
  Length,
  Temperature,
  Mass,
  Volume,
  Area,
  AngleUnits,
  LengthUnits,
  TemperatureUnits,
  MassUnits,
  VolumeUnits,
  AreaUnits,
  PowerUnits,
  EnergyUnits,
  ForceUnits,
  BitRateUnits,
  PressureUnits,
  AccelerationUnits,
  SpeedUnits,
  FrequencyUnits,
  CapacitanceUnits,
  MagneticFluxUnits,
  IlluminanceUnits,
  LuminanceUnits,
  LuminousFluxUnits,
  LuminousIntensityUnits,
  DensityUnits,
  DurationUnits,
  ElectricCurrentUnits,
  ElectricPotentialUnits,
  ElectricResistanceUnits,
  Pressure,
  Power,
  Energy,
  Force,
  BitRate,
  Acceleration,
  Speed,
  Frequency,
  Capacitance,
  MagneticFlux,
  Illuminance,
  Luminance,
  LuminousFlux,
  LuminousIntensity,
  Density,
  Duration,
  ElectricCurrent,
  ElectricPotential,
  ElectricResistance,
} from "unitsnet-js";

const unitTypes: Record<string, any> = {
  Angle: AngleUnits,
  Length: LengthUnits,
  Temperature: TemperatureUnits,
  Mass: MassUnits,
  Volume: VolumeUnits,
  Area: AreaUnits,
  Power: PowerUnits,
  Energy: EnergyUnits,
  Force: ForceUnits,
  BitRate: BitRateUnits,
  Pressure: PressureUnits,
  Acceleration: AccelerationUnits,
  Speed: SpeedUnits,
  Frequency: FrequencyUnits,
  Capacitance: CapacitanceUnits,
  MagneticFlux: MagneticFluxUnits,
  Illuminance: IlluminanceUnits,
  Luminance: LuminanceUnits,
  LuminousFlux: LuminousFluxUnits,
  LuminousIntensity: LuminousIntensityUnits,
  Density: DensityUnits,
  Duration: DurationUnits,
  ElectricCurrent: ElectricCurrentUnits,
  ElectricPotential: ElectricPotentialUnits,
  ElectricResistance: ElectricResistanceUnits,
};

const converters: Record<string, any> = {
  Angle: Angle,
  Length: Length,
  Temperature: Temperature,
  Mass: Mass,
  Volume: Volume,
  Area: Area,
  Power: Power,
  Energy: Energy,
  Force: Force,
  BitRate: BitRate,
  Pressure: Pressure,
  Acceleration: Acceleration,
  Speed: Speed,
  Frequency: Frequency,
  Capacitance: Capacitance,
  MagneticFlux: MagneticFlux,
  Illuminance: Illuminance,
  Luminance: Luminance,
  LuminousFlux: LuminousFlux,
  LuminousIntensity: LuminousIntensity,
  Density: Density,
  Duration: Duration,
  ElectricCurrent: ElectricCurrent,
  ElectricPotential: ElectricPotential,
  ElectricResistance: ElectricResistance,
};

export default function CurrencyPage() {
  const [value, setValue] = useState<string>("");
  const [unitType, setUnitType] = useState<string>("");
  const [unit1, setUnit1] = useState<string>("");
  const [unit2, setUnit2] = useState<string>("");

  const changeUnitType = (unitType: string) => {
    setUnitType(unitType);
    setUnit1("");
    setUnit2("");
  };

  const swapUnits = () => {
    setUnit1(unit2);
    setUnit2(unit1);
  };

  const units = unitType ? unitTypes[unitType] : [];
  const converter = converters[unitType];

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-2">
      <DropdownSelect
        className="col-span-3"
        label="Unit Types"
        options={Object.keys(unitTypes)}
        onValueChange={changeUnitType}
        value={unitType}
      />

      <Input
        type="number"
        className="col-span-3"
        value={value}
        onInput={(e) => setValue(e.currentTarget.value)}
      />

      <DropdownSelect
        options={Object.keys(units)}
        value={unit1}
        onValueChange={setUnit1}
      />

      <Button variant="outline" onClick={swapUnits}>
        <IoIosSwap />
      </Button>

      <DropdownSelect
        options={Object.keys(units)}
        value={unit2}
        onValueChange={setUnit2}
      />

      <div className="col-span-3 text-center font-semibold">
        {converter &&
          unit1 &&
          unit2 &&
          new converter(
            Number.isNaN(parseFloat(value)) ? 0 : parseFloat(value),
            units[unit1],
          ).convert(units[unit2])}
      </div>
    </div>
  );
}
