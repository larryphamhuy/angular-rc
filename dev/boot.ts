///<reference path="../typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {DND_PROVIDERS} from "ng2-dnd/ng2-dnd";

bootstrap(AppComponent, [DND_PROVIDERS]);