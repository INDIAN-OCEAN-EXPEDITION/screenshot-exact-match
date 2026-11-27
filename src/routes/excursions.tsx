import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {CatalogPage} from '@/components/travel/catalog-pages';
export const Route=createFileRoute('/excursions')({head:()=>pageHead('Excursions — Vivez l’instant','Plongée, croisières, randonnées et découvertes locales : explorez nos expériences dans l’océan Indien.'),component:Page});
function Page(){return <CatalogPage category="Excursion"/>;}
