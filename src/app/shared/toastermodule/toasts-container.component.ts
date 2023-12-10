import { ChangeDetectorRef, Component, TemplateRef } from '@angular/core';

import { ToastService } from './_services/toast-service';

@Component({
	selector: 'app-toasts',
	templateUrl: './toasts-container.component.html',
	host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastsContainer {

	show = false;
	constructor(public toastService: ToastService, private cdr: ChangeDetectorRef) {
		let that = this;
		setInterval(() => {
			if (that.toastService.toasts.length > 0) {
				this.show = true;
				this.cdr.detectChanges();
			}
		}, 1000);
	}

	isTemplate(toast:any) {
		return toast.textOrTpl instanceof TemplateRef;
	}

	close() {
		this.show = false;
		this.toastService.toasts.shift();
	}

}

// host: { class: 'toast-container position-fixed p-3 top-50 start-50 translate-middle', style: 'z-index: 1200' },
