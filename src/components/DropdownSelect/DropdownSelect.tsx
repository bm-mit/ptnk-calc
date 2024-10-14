import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface CurrencySelectProps {
  onValueChange?: (value: string) => void;
  value?: string;
  options?: string[];
  className?: string;
  label?: string;
}

export default function DropdownSelect({
  onValueChange = undefined,
  value = undefined,
  className = undefined,
  label = undefined,
  options = [],
}: CurrencySelectProps) {
  return (
    <Select onValueChange={onValueChange} value={value} defaultValue="">
      <SelectTrigger className={className}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
