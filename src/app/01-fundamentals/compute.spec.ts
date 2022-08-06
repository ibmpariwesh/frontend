import {compute} from './compute'

describe('compute', ()=>{

it('Return 0 in case of negative',()=>{

const result = compute(-1)
expect(result).toBe(0)
})

})

describe('compute', ()=>{

    it('Should increment when numbwr is positive',()=>{
    
    const result = compute(1)
    expect(result).toBe(2)
    })
    
    })