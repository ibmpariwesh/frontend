import {getCurrencies} from './getCurrencies'


describe('Return currency', ()=>{

    it('should return list of currency',()=>{
    
    const result = getCurrencies()
    expect(result).toContain("USD")
    expect(result).toContain("AUD")
    expect(result).toContain("EUR")
    })
    
    })