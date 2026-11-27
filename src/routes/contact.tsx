import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {ContactPage} from '@/components/travel/request-pages';
export const Route=createFileRoute('/contact')({head:()=>pageHead('Contact — Parlons de votre voyage','Contactez Indian Ocean Expedition pour préparer votre prochaine destination.'),component:Page});
function Page(){return <ContactPage/>;}
