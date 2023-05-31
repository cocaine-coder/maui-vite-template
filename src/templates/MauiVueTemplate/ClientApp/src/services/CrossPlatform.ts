import { App, inject } from "vue";

const token = "cross-platform-service";

interface ICrossPlatformService {
}

class DotNetService implements ICrossPlatformService {

}

class JSService implements ICrossPlatformService {
}

export function provideCrossPlatformService(app: App<Element>) {
    if (import.meta.env.MODE === 'mobile')
        app.provide(token, new DotNetService());
    else
        app.provide(token, new JSService());
}

export function injectCrossPlatformService(): ICrossPlatformService {
    return inject(token) as ICrossPlatformService;
}