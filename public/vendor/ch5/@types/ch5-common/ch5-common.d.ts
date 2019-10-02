import { Ch5Signal } from '../ch5-core';
import { Subject } from 'rxjs';
import { TCh5ShowType } from '../_interfaces/ch5-common/types/t-ch5-show-type';
import { ICh5CommonAttributes } from '../_interfaces/ch5-common/i-ch5-common-attributes';
export declare class Ch5Common extends HTMLElement implements ICh5CommonAttributes {
    static DIRECTION: string[];
    static ELEMENTS_MO_EXCEPTION: string[];
    private showTypes;
    primaryCssClass: string;
    cssClassPrefix: string;
    currentLanguage: string | null;
    translatableObjects: any;
    childrenOfCurrentNode: [HTMLElement] | null;
    _class: string;
    _style: string;
    protected _id: string;
    protected _customClass: string;
    protected _prevAddedCustomClasses: string[];
    protected _customStyle: string;
    protected _prevAddedStyle: string;
    protected _show: boolean;
    protected _noshowType: TCh5ShowType;
    protected _disabled: boolean;
    private _gestureable;
    protected _receiveStateCustomClass: string;
    protected _subKeySigReceiveCustomClass: string;
    protected _receiveStateCustomStyle: string;
    protected _subKeySigReceiveCustomStyle: string;
    protected _receiveStateShow: string;
    protected _subKeySigReceiveShow: string;
    protected _receiveStateShowPulse: string;
    protected _subKeySigReceiveShowPulse: string;
    protected _receiveStateHidePulse: string;
    protected _subKeySigReceiveHidePulse: string;
    protected _receiveStateEnable: string;
    protected _subKeySigReceiveEnable: string;
    protected _sigNameSendOnShow: string;
    protected _sigSendOnShow: Ch5Signal<boolean> | null;
    protected _onrelease: {};
    protected _onpress: {};
    protected _isDebugEnabled: boolean;
    protected _listOfAllPossibleComponentCssClasses: string[];
    protected _crId: string;
    protected _visibilityCssClassPrefix: string;
    protected _cssClassHideVisibility: string;
    protected _cssClassHideDisplay: string;
    protected _cachedParentEl: Node | null;
    protected _cachedNextSibling: Node | null;
    protected _isDetachedFromDom: boolean;
    protected _keepListeningOnSignalsAfterRemoval: boolean;
    protected _targetElementForCssClassesAndStyle: HTMLElement | null;
    observableGestureableProperty: Subject<boolean>;
    protected _wasInstatiated: boolean;
    protected _appendClassWhenInViewPort: string;
    elementIsInViewPort: boolean;
    elementIsVisible: boolean;
    private _commonMutationObserver;
    constructor();
    static getMeasurementUnitFromSizeValue(sizeValue: string): string;
    static extractMeasurementNumber(sizeValue: string): number;
    static getMeasurementPxNumber(sizeValue: string): number;
    static convertAltUnitsToPx(sizeValue: string): number;
    static convertPxUnitToAlt(px: number, measurementUnit: string): number;
    static convertVhUnitsToPx(vh: number): number;
    static convertVwUnitsToPx(vw: number): number;
    static convertPxUnitToVh(px: number): number;
    static convertPxUnitToVw(px: number): number;
    static handlingTextTransformValue(value: string, textTransform: string): string;
    _t(valueToTranslate: string): string;
    resolveTemplateChildren(template: HTMLTemplateElement): void;
    _getTranslatedValue(valueToSave: string, valueToTranslate: string): string;
    static readonly observedAttributes: string[];
    getCrId(): string;
    info(message?: any, ...optionalParams: any[]): void;
    isDebug(): boolean;
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
    protected cacheComponentChildrens(): void;
    protected repaint(): void;
    protected updateCssClasses(el?: HTMLElement): void;
    protected updateForChangeInCustomCssClass(): void;
    protected updateForChangeInStyleCss(): void;
    protected updateForChangeInShowStatus(): void;
    protected handleHide(targetElement: HTMLElement): void;
    protected handleShow(targetElement: HTMLElement): void;
    protected beforeHandlingShow(): void;
    protected afterHandlingShow(): void;
    protected beforeHandlingHide(): void;
    protected afterHandlingHide(): void;
    protected updateForChangeInDisabledStatus(): void;
    protected getTargetElementForCssClassesAndStyle(): HTMLElement;
    protected initAttributes(): void;
    protected attachEventListeners(): void;
    protected removeEventListeners(): void;
    protected _checkAndSetStringValue(value: any, defaultValue?: string): string;
    protected clearStringSignalSubscription(sigName: string | null | undefined, subscriptionKey: string): void;
    protected clearBooleanSignalSubscription(sigName: string | null | undefined, subscriptionKey: string): void;
    protected clearNumberSignalSubscription(sigName: string | null | undefined, subscriptionKey: string): void;
    protected sendShowSignal(value: boolean): void;
    protected attributeChangeHandler(attr: string, oldValue: string, newValue: string): string;
    protected applyPreconfiguredAttributes(): void;
    protected _attributeValueAsString(attrName: string): string;
    protected contentCleanUp(): void;
    getCssClassDisabled(): string;
    unsubscribeFromSignals(): void;
    customClass: string;
    customStyle: string;
    show: boolean;
    noshowType: TCh5ShowType;
    disabled: boolean;
    gestureable: boolean | string;
    receiveStateCustomClass: string;
    receiveStateCustomStyle: string;
    receiveStateEnable: string;
    receiveStateHidePulse: string;
    receiveStateShowPulse: string;
    receiveStateShow: string;
    sendEventOnShow: string;
    sigNameSendOnShow: string;
    onrelease: {};
    onpress: {};
    appendClassWhenInViewPort: string;
    readonly appendClassWhenInViewport: string;
    protected _toBoolean(val: any): boolean;
    protected translateCallback(section: string): void;
    protected updateInViewPortClass(): void;
    updateElementVisibility(visible: boolean): void;
    initCommonMutationObserver(element: Ch5Common): void;
    updateElementVisibilityInViewport(visibility: boolean): void;
    disconnectCommonMutationObserver(): void;
}
