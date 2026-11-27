import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {DestinationsPage} from '@/components/travel/catalog-pages';
export const Route=createFileRoute('/destinations')({head:()=>pageHead('Destinations — Le monde vous attend','Découvrez Madagascar, Maurice, Seychelles, La Réunion et nos destinations à travers le monde.'),component:Page});
function Page(){return <DestinationsPage/>;}
