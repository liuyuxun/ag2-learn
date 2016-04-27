import {Injectable} from 'angular2/core';
import {HEROES} from './hero.mock';

@Injectable()
export /**
 * HeroService
 */
class HeroService {
    constructor(parameters) {
        
    }
    getService(){
        return Promise.resolve(HEROES);
    }
}