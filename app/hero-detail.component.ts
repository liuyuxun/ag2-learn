import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { HeroService } from './hero.service';

import {Hero} from './hero';


@Component({
  selector: 'hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})
export /**
 * HeroDetail
 */
  class HeroDetail {
  hero: Hero;
  constructor(private _heroService: HeroService,
    private _routeParams: RouteParams) {

  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}

