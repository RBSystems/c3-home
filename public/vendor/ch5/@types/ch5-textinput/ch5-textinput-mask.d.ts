export declare class Ch5tTextInputMask {
    prefix: string;
    modifierSeparator: string;
    blockSeparator: string;
    private _didMounted;
    private _wasWrapped;
    private _wrapperId;
    private _input;
    private _maskElement;
    private _maskValue;
    private _lastValueLength;
    private _inputType;
    private _alwaysShow;
    private _show;
    private _placeholder;
    private _inputListener;
    private _inputKeyUpListener;
    private _inputKeyDownListener;
    private _inputBlurListener;
    private _inputFocusListener;
    constructor(input: HTMLInputElement, pattern: string, alwaysShow?: boolean);
    init(): void;
    stop(): void;
    dispatchMaskErrorEvent(errorType?: string): void;
    dispatchMaskUpdateEvent(): void;
    dispatchMaskCompleteEvent(): void;
    didMounted: boolean;
    input: HTMLInputElement;
    wasWrapped: boolean;
    wrapperId: number;
    maskElement: HTMLElement;
    maskValue: string;
    getInputStyles(): CSSStyleDeclaration;
    lastValueLength: number;
    inputType: string;
    alwaysShow: boolean;
    show: boolean;
    placeholder: string;
    _makeMaskElementLookAsInputPlaceholder(): void;
    addStaticCharactersToInputValue(letterIndex: number): void;
    _updateCharactersInMask(): void;
    togglePlaceholder(): void;
    _attachEventListeners(): void;
    _detachEventListeners(): void;
    private _mount(wrapper);
    private _wrap();
    private _createTheWrapper();
    private _createTheMaskElement();
    private _cleanTheInput();
    private _wrapEachCharacter();
    private _createMaskUpdateEvent(message);
    private _createInputMaskErrorEvent(errorType);
    private _createInputMaskCompleteEvent();
    private _maskCharacterOnTyping(letterIndex);
    private _unmaskCharacterOnTyping(letterIndex);
    private _isUserTyping();
    private _isKeyAllowed(key);
    private _isValueLengthValid();
    private _getDataType(character);
    private _getCapsType(character);
    private _transformLetterCapsType(letterIndex);
    private _onInputKeyDown(inEvent);
    private _onInput(inputEvent);
    private _onInputKeyUp(inEvent);
    private _onInputFocus(inEvent);
    private _onInputBlur(inEvent);
    private _onMaskUpdate(inEvent);
}
