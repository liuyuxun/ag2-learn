import {Injectable} from 'angular2/core';
import {HEROES} from './hero.mock';

@Injectable()
export /**
 * HeroService
 */
    class HeroService {
    constructor(parameters) {

    }
    getService() {
        return Promise.resolve(HEROES);
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}