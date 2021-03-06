import { TSignal } from "./signal.type";
import { IResynchronizationRequestModel } from "../../ch5-resync/models/resynchronization-request-model";
export declare type Ch5SignalUpdateCallback<T extends TSignal> = (value: T) => void;
export declare type Ch5SignalErrorCallback = (err: any) => void;
export declare type TAllSignalSubscriptionUpdateCallbacks = Ch5SignalUpdateCallback<boolean> | Ch5SignalUpdateCallback<number> | Ch5SignalUpdateCallback<string> | Ch5SignalUpdateCallback<object> | Ch5SignalUpdateCallback<IResynchronizationRequestModel>;
