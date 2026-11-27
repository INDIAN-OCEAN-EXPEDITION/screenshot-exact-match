import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {DestinationDetails} from '@/components/travel/catalog-pages';
import {destinationService} from '@/services/catalog-service';
export const Route=createFileRoute('/destinations_/$slug')({head:({params})=>{const entry=destinationService.get(params.slug);return pageHead(entry?entry.name:'Page indisponible',entry?entry.description:'Découvrez les voyages et destinations d’Indian Ocean Expedition.');},component:Page});
function Page(){const {slug}=Route.useParams();return <DestinationDetails id={slug}/>;}
