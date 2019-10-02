import { Ch5TriggerView } from "./ch5-triggerview";
import { Ch5TriggerViewChild } from "./ch5-triggerview-child";
export declare class Ch5TriggerViewSlidesManager {
    static TRIGGERVIEW_SLIDER_CONTAINER_CLASS: string;
    static TRIGGERVIEW_SLIDES_WRAPPER_CLASS: string;
    static TRIGGERVIEW_SLIDE_CLASS: string;
    static TRIGGERVIEW_CHILD_SELECTOR: string;
    triggerViewEl: Ch5TriggerView;
    private _wrapperWidth;
    private _slidesGap;
    private _slidesWidth;
    private _swiper;
    private _transitionSpeed;
    private _externalWrapper;
    private _slidesWrapper;
    private _touchMoveListRelatedEventDisabled;
    constructor(el: Ch5TriggerView);
    prepareSwiperSlides(): void;
    initSwiper(): void;
    private eventTargetBelongsToCh5List(el);
    reinitializeSwiper(): void;
    swiperSensitivity: number;
    swiperIsActive(): boolean;
    destroySwiper(): void;
    getSlidesNumber(): number;
    initSlides(slides: HTMLElement[]): void;
    swipeTo(slideBaseOneIndex: number, instantTransition?: boolean, speed?: number): void;
    getChildElSwipeIndex(childView: Ch5TriggerViewChild): number | null;
    slideNext(): void;
    slidePrevious(): void;
    setAllowTouchMove(active: boolean): void;
    refreshSlideSpeed(): void;
    getSwiperParam(paramName: string): any;
    getTriggerviewChildSlides(): HTMLElement[];
    private _createSlidesWrappers();
    private _computeSizes();
    private _getSlidesGap();
    private _getSlideWidth();
    private _updateActiveSlideAttributes();
    private _getSlidingSpeed();
    getSlidesArray(): any[];
}
