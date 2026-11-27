import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {CatalogPage} from '@/components/travel/catalog-pages';
export const Route=createFileRoute('/circuits')({head:()=>pageHead('Circuits — Les chemins de l’aventure','Découvrez nos circuits à Madagascar, à La Réunion et en Afrique. Des itinéraires riches en rencontres.'),component:Page});
function Page(){return <CatalogPage category="Circuit"/>;}
