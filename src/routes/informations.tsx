import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {LegalPage} from '@/components/travel/content-pages';
export const Route=createFileRoute('/informations')({head:()=>pageHead('Informations et conditions','Mentions légales, confidentialité et conditions de réservation d’Indian Ocean Expedition.'),validateSearch:(s:Record<string,unknown>)=>({section:typeof s['section']==='string'?s['section']:'mentions'}),component:Page});
function Page(){const {section}=Route.useSearch();return <LegalPage section={section}/>;}
