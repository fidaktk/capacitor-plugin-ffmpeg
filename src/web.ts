import { WebPlugin } from '@capacitor/core';

import type { FFMpegPlugin } from './definitions';

export class FFMpegWeb extends WebPlugin implements FFMpegPlugin {
  constructor() {
    super({
      name: 'FFMpeg',
      platforms: ['web'],
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  runCmd(_: { args: string }): Promise<{ execution_id: number }> {
    throw new Error('Method not implemented.');
  }
}
