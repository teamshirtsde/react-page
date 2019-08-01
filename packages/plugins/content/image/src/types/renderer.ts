import { ImageProps } from './component';
import { ImageLoaded } from '@teamshirts/ui/lib/ImageUpload';

export interface ImageRendererExtraProps {
  imagePreview?: ImageLoaded;
}

export type ImageRendererProps = ImageProps & ImageRendererExtraProps;
