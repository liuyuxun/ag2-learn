import { Component } from 'angular2/core';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetail } from './hero-detail.component';
import { HeroService } from './hero.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector:'my-app',
    template:`
        <h1>{{title}}</h1>
        <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers:[HeroService,ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetail
  }
])
export /**
 * AppComponent
 */
class AppComponent {
    constructor() {
      
    }
    title:string = 'Heroes Tour';
}