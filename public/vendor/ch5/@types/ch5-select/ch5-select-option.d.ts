import "hammerjs";
import { Ch5Common } from "../ch5-common/ch5-common";
export declare class Ch5SelectOption extends Ch5Common {
    static ICON_POSITION_VALUES: string[];
    static ITEM_STYLE_CLASS: string;
    static ITEM_STYLE_DEFAULT_TMPL_CLASS: string;
    private _idx;
    receiveStateSelectedSubscription: string;
    private _iconPosition;
    private _receiveStateSelected;
    private _receiveStateLabel;
    private _receiveStateLabelSubscription;
    _optLabel: string;
    private _receiveStateUrl;
    private _receiveStateScriptLabelHTML;
    private _sendEventOnClick;
    private _parentCh5Select;
    private _optionHammer;
    private _ch5Toggle;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    unsubscribeFromSignals(): void;
    intializations(): void;
    static readonly observedAttributes: string[];
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
    private initializeAttributes();
    protected attachEventListeners(): void;
    protected removeEventListeners(): void;
    protected repaint(): void;
    private _initDefaultTemplate();
    private _isParentMultiselect();
    private _parentHasFeedbackModeSubmit();
    private _getParentSyncTimeout();
    private _getDefaultTmplLabelId();
    private _getDefaultTemplate();
    iconPosition: string;
    receiveStateSelected: string | null;
    receiveStateLabel: string | null;
    receiveStateUrl: string | null;
    receiveStateScriptLabelHTML: string | null;
    sendEventOnClick: string | null;
    idx: number;
    optLabel: string;
    defaultTmplIsUsed(): boolean;
    triggerToggleClickSignal(expectedOptSelectedState: boolean): void;
    private _clickReceivedFromCh5Toggle(targetEl);
    setToggleValue(val: boolean): void;
    private _onClick(e);
    sendClickSignal(): void;
    private _getOptionSelectedEvent(setAction?, confirmed?);
    applySelectedStyleClass(): void;
    removeSelectedStyleClass(): void;
    private _handleReceiveSignalSelected();
    private _handleReceiveSignalLabel();
    getCssClassDisabled(): string;
    private _onPress();
    private _onPressUp();
}
