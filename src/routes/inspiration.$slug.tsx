import {createFileRoute} from '@tanstack/react-router';
import {pageHead} from '@/lib/seo';
import {ArticleDetails} from '@/components/travel/content-pages';
import {articles} from '@/data/catalog';
export const Route=createFileRoute('/inspiration/$slug')({head:({params})=>{const entry=articles.find(a=>a.id===params.slug);return pageHead(entry?entry.title:'Page indisponible',entry?entry.excerpt:'Découvrez les voyages et destinations d’Indian Ocean Expedition.');},component:Page});
function Page(){const {slug}=Route.useParams();return <ArticleDetails id={slug}/>;}
