import {Component,Input} from 'angular2/core';

import {Hero} from './hero';


@Component({selector:'hero-detail',
template:`
<div *ngIf="hero">
      <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name11: </label>
    <input [(ngModel)]="hero.name" placeholder="name" />
  </div>
  </div>
`})
export /**
 * HeroDetail
 */
class HeroDetail {
    @Input() hero:Hero;
    constructor() {
        
    }
}

