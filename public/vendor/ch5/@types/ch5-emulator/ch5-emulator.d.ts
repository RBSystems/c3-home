import { Ch5Signal } from "../ch5-core";
import { TActionLogic, TSignalNonStandardTypeName, TSignalValue, TRepeatDigitalSignalValue } from "../ch5-core";
export declare type TScenarioOnStart = {
    type: TSignalNonStandardTypeName;
    state: string;
    value: TSignalValue;
};
export interface IEmulatorScenario {
    cues: IEmulatorCue[];
    onStart?: TScenarioOnStart[];
}
export interface IEmulatorCue {
    type: TSignalNonStandardTypeName;
    event: string;
    trigger: TSignalValue;
    actions: IEmulatorAction[];
}
export interface IEmulatorAction {
    state: string;
    type: TSignalNonStandardTypeName;
    logic: TActionLogic;
    value?: TSignalValue;
    offset?: number;
    time?: number;
}
export declare class Ch5Emulator {
    private static _instance;
    private static _scenario;
    static getInstance(): Ch5Emulator;
    static clear(): void;
    loadScenario(scenario: IEmulatorScenario): void;
    getScenario(): IEmulatorScenario;
    private processCue(cue, index);
    isTriggered(trigger: boolean | number | string | object, nextSignalValue: boolean | number | string | object | TRepeatDigitalSignalValue, signal: Ch5Signal<boolean> | Ch5Signal<number> | Ch5Signal<string> | Ch5Signal<object> | null): boolean;
    processAction(action: IEmulatorAction, actionIndex: number, actionArray: IEmulatorAction[], cueSignalValue: boolean | number | string | object): void;
    private castToBoolean(val);
    private processBooleanAction(action, cueSignalValue);
    private processNumberAction(action, cueSignalValue);
    private processStringAction(action, cueSignalValue);
    private processObjectAction(action, cueSignalValue);
    run(): void;
}
