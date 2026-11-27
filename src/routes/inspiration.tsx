import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {InspirationPage} from '@/components/travel/content-pages';
export const Route=createFileRoute('/inspiration')({head:()=>pageHead('Inspiration — Carnets de voyage','Conseils, bonnes adresses et idées pour votre prochain voyage à Madagascar et dans l’océan Indien.'),component:Page});
function Page(){return <InspirationPage/>;}
