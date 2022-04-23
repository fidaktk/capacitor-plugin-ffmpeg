import { registerPlugin } from '@capacitor/core';

import type { FFMpegPlugin } from './definitions';

const FFMpeg = registerPlugin<FFMpegPlugin>('FFMpeg', {
  web: () => import('./web').then(m => new m.FFMpegWeb()),
});

export * from './definitions';
export { FFMpeg };
