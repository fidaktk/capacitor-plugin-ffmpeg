import { registerPlugin } from '@capacitor/core';
const FFMpeg = registerPlugin('FFMpeg', {
    web: () => import('./web').then(m => new m.FFMpegWeb()),
});
export * from './definitions';
export { FFMpeg };
//# sourceMappingURL=index.js.map