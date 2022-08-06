import {greet} from './greet'


describe('Should return name when pass it to functi', ()=>{

    it('Return name when passing name value',()=>{
    
    const result = greet('mosh')
    expect(result).toBe("Welcome mosh")
    })
    
    })