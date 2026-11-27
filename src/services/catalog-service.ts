import {destinations, travels, type Travel} from '@/data/catalog';
export interface TravelFilters {query?:string;destination?:string;type?:string;maxPrice?:number;maxDays?:number;date?:string;travelers?:number;}
export const normalize=(value:string)=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
export const travelService={
 list(filters:TravelFilters={}):Travel[]{return travels.filter(t=>(!filters.query||normalize(`${t.name} ${t.destination} ${t.type} ${t.style}`).includes(normalize(filters.query)))&&(!filters.destination||t.destinationId===filters.destination)&&(!filters.type||t.type===filters.type)&&(!filters.maxPrice||t.price<=filters.maxPrice)&&(!filters.maxDays||t.days<=filters.maxDays)&&(!filters.date||t.date>=filters.date)&&(!filters.travelers||filters.travelers>=1&&filters.travelers<=12));},
 get(id:string){return travels.find(t=>t.id===id);}
};
export const destinationService={list(query='',region=''){return destinations.filter(d=>(!query||normalize(`${d.name} ${d.description}`).includes(normalize(query)))&&(!region||d.region===region));},get(id:string){return destinations.find(d=>d.id===id);}};
