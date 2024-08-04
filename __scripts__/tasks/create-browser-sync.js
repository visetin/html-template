import browserSync from 'browser-sync';
import { gulpGlobs } from '../configs/index.js';

export const browserSyncInstance = browserSync.create();

export default function initBrowserSync() {
  browserSyncInstance.init({
    server: {
      baseDir: gulpGlobs.dest,
      serveStaticOptions: {
        extensions: ['html'],
      },
    },
    startPath: '/index',
    open: false,
    ui: {
      port: 9090,
    },
    logLevel: 'info',
    reloadOnRestart: true,
  });
}
