import { TranslateService } from "@ngx-translate/core";

export class DataTableUtils {
    static deviceType: boolean = false;

    constructor(private translate: TranslateService) { }

    getHeaderLabelLength(input:any): number {
        if (input != undefined && input != null) {
            let translatedValue = this.translate.instant(input)
            return ((translatedValue.length * 8) + 20);
        }
        return 50;
    }


}