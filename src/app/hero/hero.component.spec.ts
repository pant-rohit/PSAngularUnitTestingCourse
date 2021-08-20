import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component";

describe('Hero component', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    })

    it('Should have the correct hero', () => {
        fixture.componentInstance.hero = {id: 1, name: 'New hero', strength: 8};

        expect(fixture.componentInstance.hero.name).toEqual('New hero');
    })

    it('anchor tage should contain hero name', () => {
        fixture.componentInstance.hero = {id: 1, name: 'New hero', strength: 8};
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('a').textContent).toContain('New hero');
    })
})