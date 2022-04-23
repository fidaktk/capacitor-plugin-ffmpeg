export var Level;
(function (Level) {
    /**
     * This log level is defined by MobileFFmpeg. It is used to specify logs printed to stderr by
     * ffmpeg. Logs that has this level are not filtered and always redirected.
     *
     * @since 4.3.1
     */
    Level[Level["AV_LOG_STDERR"] = -16] = "AV_LOG_STDERR";
    /**
     * Print no output.
     */
    Level[Level["AV_LOG_QUIET"] = -8] = "AV_LOG_QUIET";
    /**
     * Something went really wrong and we will crash now.
     */
    Level[Level["AV_LOG_PANIC"] = 0] = "AV_LOG_PANIC";
    /**
     * Something went wrong and recovery is not possible.
     * For example, no header was found for a format which depends
     * on headers or an illegal combination of parameters is used.
     */
    Level[Level["AV_LOG_FATAL"] = 8] = "AV_LOG_FATAL";
    /**
     * Something went wrong and cannot losslessly be recovered.
     * However, not all future data is affected.
     */
    Level[Level["AV_LOG_ERROR"] = 16] = "AV_LOG_ERROR";
    /**
     * Something somehow does not look correct. This may or may not
     * lead to problems. An example would be the use of '-vstrict -2'.
     */
    Level[Level["AV_LOG_WARNING"] = 24] = "AV_LOG_WARNING";
    /**
     * Standard information.
     */
    Level[Level["AV_LOG_INFO"] = 32] = "AV_LOG_INFO";
    /**
     * Detailed information.
     */
    Level[Level["AV_LOG_VERBOSE"] = 40] = "AV_LOG_VERBOSE";
    /**
     * Stuff which is only useful for libav* developers.
     */
    Level[Level["AV_LOG_DEBUG"] = 48] = "AV_LOG_DEBUG";
    /**
     * Extremely verbose debugging, useful for libav* development.
     */
    Level[Level["AV_LOG_TRACE"] = 56] = "AV_LOG_TRACE";
})(Level || (Level = {}));
//# sourceMappingURL=definitions.js.map