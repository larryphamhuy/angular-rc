import {Component} from '@angular/core';
import {DragDropComponent} from "./drag-drop/drag-drop.component";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from "./home/home.component";


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="container">
            <h1>Welcome to Demo</h1>
            <span>There are features implemented on Angular 2:</span>
            <ul>
                <li><a [routerLink]="['Home']">Home</a></li>
                <li><a [routerLink]="['Drag Drop']">Drag-and-Drop</a></li>
            </ul>
        </div>
        <div class="container-fluid">
            <router-outlet></router-outlet>
        </div>
    `,
})
@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/drag-drop', name: 'Drag Drop', component: DragDropComponent }
])
export class AppComponent {

}