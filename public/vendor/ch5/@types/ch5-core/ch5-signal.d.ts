import { TSignal } from './types/signal.type';
import { Ch5SignalErrorCallback, Ch5SignalUpdateCallback } from './types/callbacks';
export declare class Ch5Signal<T extends TSignal> {
    private static _resetEventsInitialized;
    private static _receivedClearEvent;
    private static _initialSubscriptionToResyncEvents;
    private _name;
    private _subject;
    private _uninitializedValue;
    private _lastSubId;
    private _subscriptions;
    private _signalBridge;
    private _hasChangedSinceInit;
    private _ch5Resync;
    static isIntegerSignalName(name: string): boolean;
    static getJoinNumberSignalName(name: string): string;
    static getSubscriptionSignalName(name: string): string;
    private static _resetEventsInitialization();
    constructor(name: string, typeInstance: T);
    subscribeToStates(): void;
    private uninitializedCreate(typeInstance);
    readonly name: string;
    readonly type: string;
    readonly value: T;
    readonly prevValue: T;
    hasChangedSinceInit(): boolean;
    publish(value: T): void;
    fromSignalBridge(value: T): void;
    subscribe(updatecb: Ch5SignalUpdateCallback<T>, errorcb?: Ch5SignalErrorCallback): string;
    unsubscribe(subKey: string): void;
}