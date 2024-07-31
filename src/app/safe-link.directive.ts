import { Directive } from "@angular/core";

@Directive({
    //selector:'app-safe-link', no se suele utilizar asi. se usa como un atributo
    selector: 'a[appSafeLink]',
    standalone: true,
})
export class SafeLinkDirective {
    constructor() {
        console.log('SafeLinkDirective is active!');
    }
}