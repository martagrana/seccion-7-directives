import { Directive } from "@angular/core";

@Directive({
    //selector:'app-safe-link', no se suele utilizar asi. se usa como un atributo
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    constructor() {
        console.log('SafeLinkDirective is active!');
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('Do you want to leave the app?');
        if (wantsToLeave) {
            return;
        }
        event.preventDefault();
    }
}