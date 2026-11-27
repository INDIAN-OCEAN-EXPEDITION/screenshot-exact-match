import {describe,it,expect} from 'vitest';
import {travelService,destinationService} from '@/services/catalog-service';
import {simulateRequest} from '@/services/request-service';
describe('Travel catalog rules',()=>{
 it('contains the requested Madagascar example at 1490 euros for 8 days and 7 nights',()=>{expect(travelService.get('decouverte-madagascar')).toMatchObject({price:1490,days:8,nights:7,destination:'Madagascar'});});
 it('searches destinations without accent sensitivity',()=>{expect(destinationService.list('ile maurice').map(d=>d.id)).toEqual(['ile-maurice']);});
 it('filters by destination and budget together',()=>{const result=travelService.list({destination:'madagascar',maxPrice:1500});expect(result.map(t=>t.id)).toEqual(['decouverte-madagascar','nosy-be']);});
 it('filters excursions separately',()=>{const result=travelService.list({type:'Excursion'});expect(result).toHaveLength(4);expect(result.every(t=>t.days===1)).toBe(true);});
 it('returns an explicit demonstration receipt rather than a booking',async()=>{const receipt=await simulateRequest({name:'Camille',email:'camille@example.com',message:'Un voyage à Madagascar'});expect(receipt.status).toBe('demo');expect(receipt.reference.startsWith('IOE-')).toBe(true);});
});
