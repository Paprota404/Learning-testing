import sum from './sum';
import {describe,expect,it} from 'vitest';

describe('#sum',()=>{
    it("returns 0 with no number", () => {
        expect(sum()).toBe(0)
    })

    it("return same number with one number", () => {
        expect(sum(2)).toBe(2);
    })

    it("return number", () => {
        expect(sum(1,2,3)).toBe(6);
    })
  
})