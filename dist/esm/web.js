import { WebPlugin, registerWebPlugin } from '@capacitor/core';
export class FFMpegWeb extends WebPlugin {
    constructor() {
        super({
            name: 'FFMpeg',
            platforms: ['web'],
        });
    }
    run(_) {
        throw new Error('Method not implemented.');
    }
}
const FFMpeg = new FFMpegWeb();
registerWebPlugin(FFMpeg);
export { FFMpeg };
//# sourceMappingURL=web.js.map