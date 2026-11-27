import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {AboutPage} from '@/components/travel/content-pages';
export const Route=createFileRoute('/a-propos')({head:()=>pageHead('À propos — Notre passion du voyage','Découvrez Indian Ocean Expedition, agence de voyages et tour opérateur spécialiste de l’océan Indien.'),component:Page});
function Page(){return <AboutPage/>;}
