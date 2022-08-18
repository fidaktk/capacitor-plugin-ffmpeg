package nepheus.capacitor.ffmpeg;

import com.arthenica.ffmpegkit.FFmpegKitConfig;
import com.arthenica.ffmpegkit.FFmpegKit;
import com.arthenica.ffmpegkit.ReturnCode;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "FFMpeg")
public class FFMpegPlugin extends Plugin {
    @Override
    public void load() {
        FFmpegKitConfig.enableStatisticsCallback(statistics -> {
            JSObject stats = new JSObject();
            stats.put("session_id", statistics.getSessionId());
            stats.put("bitrate", statistics.getBitrate());
            stats.put("size", statistics.getSize());
            stats.put("speed", statistics.getSpeed());
            stats.put("time", statistics.getTime());
            stats.put("video_fps", statistics.getVideoFps());
            stats.put("video_frame_number", statistics.getVideoFrameNumber());
            stats.put("video_quality", statistics.getVideoQuality());
            notifyListeners("statistic", stats);
        });
        FFmpegKitConfig.enableLogCallback(message -> {
            JSObject entry = new JSObject();
            entry.put("session_id", message.getSessionId());
            entry.put("level", message.getLevel());
            entry.put("message", message.getMessage());
            notifyListeners("message", entry);
        });
    }

    @PluginMethod
    public void runCmd(PluginCall call) {
        if (! call.hasOption("args") ) {
            call.reject("args property is missing.");
            return;
        }

        String args = call.getString("args");

        FFmpegKit.executeAsync(args, (session) -> {
            if (ReturnCode.isSuccess(session.getReturnCode())) {
                JSObject result = new JSObject();
                result.put("session_id", session.getSessionId());
                call.resolve(result);
            } else {
                call.reject("process has failed.", String.valueOf(session.getReturnCode()), new Exception("process has failed."));
            }
        });
    }
}
