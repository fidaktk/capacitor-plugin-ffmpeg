import { WebPlugin } from '@capacitor/core';
import { FFMpegPlugin } from './definitions';
export declare class FFMpegWeb extends WebPlugin implements FFMpegPlugin {
    constructor();
    run(_: {
        args: string;
    }): Promise<{
        execution_id: number;
    }>;
}
declare const FFMpeg: FFMpegWeb;
export { FFMpeg };
