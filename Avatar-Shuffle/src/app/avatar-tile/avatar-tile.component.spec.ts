import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarTileComponent } from './avatar-tile.component';

describe('AvatarTileComponent', () => {
  let component: AvatarTileComponent;
  let fixture: ComponentFixture<AvatarTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
