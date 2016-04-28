import { Component, OnInit} from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from 'angular2/router';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(private heroservice: HeroService,
        private _router: Router) {

    }
    heroes: Hero[];
    ngOnInit() {
        this.heroservice.getService().then(heroes => this.heroes = heroes.slice(1, 4));
    }
    gotoDetail(hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}