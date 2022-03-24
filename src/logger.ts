import { Logger } from '@nestjs/common';

export class MyLogger {
    log(className: string, method: string, info?: any) {
        Logger.log(`${className} - ${method} - ${info}`);
    }

    error(className: string, method: string, info?: any) {
        Logger.error(`${className} - ${method} - ${info}`);
    }

    debug?(message: any) {
        Logger.debug(message);
    }
}
