import { WebPlugin } from '@capacitor/core';
export class FFMpegWeb extends WebPlugin {
    constructor() {
        super({
            name: 'FFMpeg',
            platforms: ['web'],
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runCmd(_) {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=web.js.map