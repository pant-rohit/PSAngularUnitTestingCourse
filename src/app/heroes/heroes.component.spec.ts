import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent', () => {
    let component: HeroesComponent
    let heroes;
    let mockHeroService;

    beforeEach(() => {
        heroes = [
            {id:1, name:'test 1', strength: 8},
            {id:2, name:'test 12', strength: 10},
            {id:3, name:'test 3', strength: 12}
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

        component = new HeroesComponent(mockHeroService);
    })

    describe('delete', () => {
        it('remove indicated hero from list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = heroes;

            component.delete(heroes[2]);

            expect(component.heroes.length).toBe(2);
        })

        it('should call deleteHero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = heroes;

            component.delete(heroes[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalled();
        })
    })

})