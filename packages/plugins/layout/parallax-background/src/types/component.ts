import { LayoutPluginProps } from '@teamshirts/core/lib/service/plugin/classes';
import { ParallaxBackgroundState } from './state';
import { ParallaxBackgroundSettings } from './settings';

export type ParallaxBackgroundProps = LayoutPluginProps<ParallaxBackgroundState> & ParallaxBackgroundSettings;
