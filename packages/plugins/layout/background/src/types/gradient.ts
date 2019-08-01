import { RGBColor } from '@teamshirts/ui/lib/ColorPicker';

export type Gradient = {
  opacity: number;
  deg: number;
  colors?: { color: RGBColor }[];
};
