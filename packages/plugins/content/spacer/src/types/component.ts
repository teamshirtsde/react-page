import { ContentPluginProps } from '@teamshirts/core/lib/service/plugin/classes';
import { SpacerState } from './state';
import { SpacerSettings } from './settings';

export type SpacerProps = ContentPluginProps<SpacerState> & SpacerSettings;
