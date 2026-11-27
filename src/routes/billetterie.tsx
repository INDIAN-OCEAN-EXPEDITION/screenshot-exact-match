import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {TicketPage} from '@/components/travel/request-pages';
export const Route=createFileRoute('/billetterie')({head:()=>pageHead('Billetterie aérienne et routière','Préparez une demande de billet d’avion ou de transport routier avec Indian Ocean Expedition.'),component:Page});
function Page(){return <TicketPage/>;}
