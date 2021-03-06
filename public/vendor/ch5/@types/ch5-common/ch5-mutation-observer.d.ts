import { Ch5Common } from "./ch5-common";
export interface IShowStyle {
    visibility: string;
    opacity: string;
}
export declare class Ch5MutationObserver {
    isConnected: boolean;
    private _mutationsObserver;
    private _mutationsObserverConfig;
    private _element;
    static checkElementValidity(target: HTMLElement): boolean;
    constructor(element: Ch5Common);
    observe(target: Node): void;
    disconnectObserver(): void;
    private _updateComponentVisibility(node);
    private _shouldUpdateComponentVisibility(node);
}
