import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {QuotePage} from '@/components/travel/request-pages';
export const Route=createFileRoute('/devis')({head:()=>pageHead('Votre devis sur mesure','Imaginez un voyage personnalisé selon vos envies, vos dates et votre budget.'),validateSearch:(s:Record<string,unknown>):{destination?:string}=>typeof s['destination']==='string'?{destination:s['destination']}:{},component:Page});
function Page(){const {destination}=Route.useSearch();return <QuotePage {...(destination?{destination}:{})}/>;}
