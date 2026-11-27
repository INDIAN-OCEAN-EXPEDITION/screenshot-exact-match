import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {BookingPage} from '@/components/travel/request-pages';
export const Route=createFileRoute('/reservation')({head:()=>pageHead('Demande de réservation','Préparez votre demande de réservation pour un voyage Indian Ocean Expedition.'),validateSearch:(s:Record<string,unknown>):{voyage?:string}=>typeof s['voyage']==='string'?{voyage:s['voyage']}:{},component:Page});
function Page(){const {voyage}=Route.useSearch();return <BookingPage {...(voyage?{travelId:voyage}:{})}/>;}
