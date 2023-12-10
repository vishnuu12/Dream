
export class WindowSize {

    static deviceType: boolean = false;

    constructor() { }

    static isMobileInnerWidth(): boolean {
        if (window.innerWidth < 576)
            return this.deviceType = true;
        else
            return this.deviceType = false;
    }

    static isMobileOuterWidth(): boolean {
        if (window.outerWidth < 576)
            return this.deviceType = true;
        else
            return this.deviceType = false;
    }

    static detectDynamicWindowSize(e:any): boolean {
        if (e.innerWidth < 576)
            return this.deviceType = true;
        else
            return this.deviceType = false;
    }
    static isLaptoporDesktop(): boolean {        
        if (window.innerHeight <= 785) {
            return this.deviceType = true;
        }
        else {
            return this.deviceType = false;
        }
    }

    static isIpadDevice(): boolean {
        if (window.outerWidth <= 768 && window.outerHeight <= 1024) {
            return this.deviceType = true;
        }       
        if (window.outerWidth <= 823 && window.outerHeight <= 500) {
            return this.deviceType = true;
        }   
        else {
            return this.deviceType = false;
        }
    }

}