import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {HomeComponent} from "./pages/home/home.component";

@Component({
    selector: 'app',
    templateUrl: 'app/app-tpl.html',
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: []
})

// Routes Start
@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
])
// Routes End

export class AppComponent {
    constructor() {

    }
}