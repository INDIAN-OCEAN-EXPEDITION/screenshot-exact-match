import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {CatalogPage,type TravelSearch} from '@/components/travel/catalog-pages';
export const Route=createFileRoute('/voyages')({head:()=>pageHead('Voyages — Votre prochaine évasion','Comparez nos voyages organisés, séjours, circuits et excursions. Recherchez votre prochaine aventure.'),validateSearch:(s:Record<string,unknown>):TravelSearch=>({...(typeof s['q']==='string'?{q:s['q']}:{}),...(typeof s['type']==='string'?{type:s['type']}:{}),...(typeof s['destination']==='string'?{destination:s['destination']}:{}),...(typeof s['date']==='string'?{date:s['date']}:{}),...(Number(s['travelers'])>0?{travelers:Number(s['travelers'])}:{})}),component:Page});
function Page(){const search=Route.useSearch();return <CatalogPage key={JSON.stringify(search)} search={search}/>;}
