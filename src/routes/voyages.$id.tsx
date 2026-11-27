import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {TravelDetails} from '@/components/travel/detail-page';
import {travelService} from '@/services/catalog-service';
export const Route=createFileRoute('/voyages/$id')({head:({params})=>{const entry=travelService.get(params.id);return pageHead(entry?entry.name:'Page indisponible',entry?entry.description:'Découvrez les voyages et destinations d’Indian Ocean Expedition.');},component:Page});
function Page(){const {id}=Route.useParams();return <TravelDetails id={id}/>;}
