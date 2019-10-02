import { Ch5Common } from "../ch5-common/ch5-common";
import { Ch5Signal } from "../ch5-core/index";
import { TCh5OverlayPanelStretch, TCh5OverlayPanelOverflow, TCh5OverlayPanelPositionOffset } from '../_interfaces/ch5-overlay-panel/types';
import { ICh5OverlayPanelAttributes } from "../_interfaces/ch5-overlay-panel/i-ch5-overlay-panel-attributes";
export declare class Ch5OverlayPanel extends Ch5Common implements ICh5OverlayPanelAttributes {
    static POSITION_OFFSETS: TCh5OverlayPanelPositionOffset[];
    static STRETCHES: TCh5OverlayPanelStretch[];
    static OVERFLOWS: TCh5OverlayPanelOverflow[];
    primaryCssClass: string;
    cssClassPrefix: string;
    protected _elContainer: HTMLElement;
    protected _elContents: HTMLElement;
    protected _elCloseIcon: HTMLElement;
    protected _elCloseIconBtn: HTMLElement;
    protected _dismissable: boolean;
    protected _closable: boolean;
    protected _closeIcon: string;
    protected _stretch: TCh5OverlayPanelStretch;
    protected _overflow: TCh5OverlayPanelOverflow;
    protected _positionTo: string;
    protected _positionOffset: TCh5OverlayPanelPositionOffset;
    protected _sigNameReceivePositionTo: string;
    protected _subReceivePositionTo: string;
    protected _sigNameReceivePositionOffset: string;
    protected _subReceivePositionOffset: string;
    protected _sigNameSendOnBeforeShow: string;
    protected _sigSendOnBeforeShow: Ch5Signal<boolean> | null;
    protected _sigNameSendOnAfterShow: string;
    protected _sigSendOnAfterShow: Ch5Signal<boolean> | null;
    protected _sigNameSendOnBeforeHide: string;
    protected _sigSendOnBeforeHide: Ch5Signal<boolean> | null;
    protected _sigNameSendOnAfterHide: string;
    protected _sigSendOnAfterHide: Ch5Signal<boolean> | null;
    protected _wasInstatiated: boolean;
    protected _isShown: boolean;
    protected _ready: Promise<any>;
    protected _show: boolean;
    protected _showEvent: Event;
    protected _hideEvent: Event;
    protected _beforeShowEvent: Event;
    protected _afterShowEvent: Event;
    protected _beforeHideEvent: Event;
    protected _afterHideEvent: Event;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    getListOfAllPossibleComponentCssClasses(): string[];
    protected _initialize(): void;
    protected generateListOfAllPossibleComponentCssClasses(): string[];
    unsubscribeFromSignals(): void;
    protected createInternalHtml(): void;
    protected refreshComponent(): void;
    protected updateCssClasses(): void;
    static readonly observedAttributes: string[];
    protected initAttributes(): void;
    protected attachEventListeners(): void;
    protected removeEventListeners(): void;
    protected _rebindEventCallbacks(): void;
    protected getTargetElementForCssClassesAndStyle(): HTMLElement;
    protected _clickedOnClose(inEvent: Event): void;
    protected _getReadyCheckPromise(): Promise<any>;
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
    getCssClassDisabled(): string;
    protected updateForChangeInDismissable(): void;
    protected updateForChangeInStretch(): void;
    protected updateForChangeInPositionTo(): void;
    protected updateForChangeInPositionOffset(): void;
    protected updatePosition(): void;
    protected _dismissElement(inEvent: Event): void;
    protected _clickAndTouchEvent(event: Event): void;
    protected updateForChangeInClosable(): void;
    protected beforeHandlingShow(): void;
    protected afterHandlingShow(): void;
    protected beforeHandlingHide(): void;
    protected afterHandlingHide(): void;
    dismissable: boolean;
    closable: boolean;
    closeIcon: string;
    stretch: TCh5OverlayPanelStretch;
    overflow: TCh5OverlayPanelOverflow;
    positionTo: string;
    positionOffset: TCh5OverlayPanelPositionOffset;
    receiveStatePositionTo: string;
    receiveStatePositionOffset: string;
    sendEventOnBeforeShow: string;
    sendEventOnAfterShow: string;
    sendEventOnBeforeHide: string;
    sendEventOnAfterHide: string;
    protected _onShow(inEvent: Event): void;
    protected _onHide(inEvent: Event): void;
    protected _onBeforeShow(inEvent: Event): void;
    protected _onAfterShow(inEvent: Event): void;
    protected _onBeforeHide(inEvent: Event): void;
    protected _onAfterHide(inEvent: Event): void;
    protected _sendPulse(sigName: string): void;
    private _insertAfter(el, referenceNode);
}