/// <reference types="vite/client" />
declare interface Window {
    DotNet: {
        invokeMethodAsync(nsName: string, method: string, ...args: any[]): Promise<any>
    }
}