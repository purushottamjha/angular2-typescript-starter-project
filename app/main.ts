import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS} from "angular2/router";
import {AppComponent} from "./app.component";

declare var $:any;

// Enable prod mode
//enableProdMode();

// Bootstrap the app
bootstrap(AppComponent, [ROUTER_PROVIDERS]);