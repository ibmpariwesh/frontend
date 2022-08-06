import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('Return vote count', ()=>{

  it('return positive voting',()=>{
  
  const result = new VoteComponent()

  let upvote = result.upvote();
  //expect(upvote).toBe(1)
  })


  it('return negative voting',()=>{
  
    const result = new VoteComponent()
  
    let upvote = result.downvote();
    //expect(upvote).toBe(-1)
    })
  
  })