import hero from '@/assets/hero.jpg.asset.json';
import madagascar from '@/assets/baobabs.jpg.asset.json';
import inde from '@/assets/inde.jpg.asset.json';
import thailande from '@/assets/thailande.jpg.asset.json';
import maurice from '@/assets/maurice.jpg.asset.json';
import seychelles from '@/assets/seychelles.jpg.asset.json';
import reunion from '@/assets/reunion.jpg.asset.json';
import safari from '@/assets/safari.jpg.asset.json';
import boat from '@/assets/boat.jpg.asset.json';
import dubai from '@/assets/dubai.jpg.asset.json';
import paris from '@/assets/paris.jpg.asset.json';
export const images = {hero:hero.url,madagascar:madagascar.url,maurice:maurice.url,seychelles:seychelles.url,reunion:reunion.url,safari:safari.url,boat:boat.url,dubai:dubai.url,paris:paris.url,inde:inde.url,thailande:thailande.url};
export interface Destination {id:string;name:string;description:string;image:string;region:string;count:number;}
export interface Travel {id:string;name:string;destination:string;destinationId:string;image:string;type:'Voyage organisé'|'Circuit'|'Excursion'|'Séjour';days:number;nights:number;price:number;rating:number;reviews:number;date:string;style:string;description:string;}
export interface Review {name:string;destination:string;rating:number;comment:string;date:string;}
export interface Article {id:string;title:string;image:string;category:string;date:string;excerpt:string;paragraphs:string[];}
export const destinations:Destination[] = [
 {id:'madagascar',name:'Madagascar',description:'Une île, mille aventures',image:images.madagascar,region:'Océan Indien',count:6},
 {id:'ile-maurice',name:'Île Maurice',description:'Le paradis, tout simplement',image:images.maurice,region:'Océan Indien',count:3},
 {id:'seychelles',name:'Seychelles',description:'Des îles hors du temps',image:images.seychelles,region:'Océan Indien',count:3},
 {id:'reunion',name:'La Réunion',description:'Intense par nature',image:images.reunion,region:'Océan Indien',count:2},
 {id:'zanzibar',name:'Zanzibar',description:'Entre épices et eaux turquoise',image:images.hero,region:'Afrique',count:2},
 {id:'kenya',name:'Kenya',description:'Au cœur de la vie sauvage',image:images.safari,region:'Afrique',count:2},
 {id:'tanzanie',name:'Tanzanie',description:'L’Afrique en grand',image:images.safari,region:'Afrique',count:2},
 {id:'afrique-du-sud',name:'Afrique du Sud',description:'Des horizons sans limites',image:images.safari,region:'Afrique',count:1},
 {id:'dubai',name:'Dubaï',description:'L’extraordinaire à chaque instant',image:images.dubai,region:'Moyen-Orient',count:1},
 {id:'france',name:'France',description:'L’art de vivre et de découvrir',image:images.paris,region:'Europe',count:1},
 {id:'inde',name:'Inde',description:'Un voyage qui éveille les sens',image:images.inde,region:'Asie',count:1},
 {id:'thailande',name:'Thaïlande',description:'Le sourire, les îles et l’évasion',image:images.thailande,region:'Asie',count:1},
];
const makeTravel = (id:string,name:string,destinationId:string,type:Travel['type'],days:number,price:number,image:string,style='Découverte'):Travel => {const destination=destinations.find(d=>d.id===destinationId);return {id,name,destinationId,destination:destination?.name??destinationId,type,days,nights:Math.max(0,days-1),price,image,rating:4.8,reviews:24,date:'2027-04-15',style,description:`Découvrez ${destination?.name??destinationId} à travers un itinéraire soigneusement conçu. Entre rencontres locales, paysages remarquables et moments de détente, profitez d’un voyage accompagné qui laisse toute sa place à l’émerveillement.`};};
export const travels:Travel[] = [
 makeTravel('decouverte-madagascar','Découverte de Madagascar','madagascar','Voyage organisé',8,1490,images.madagascar),
 makeTravel('evasion-ile-maurice','Évasion à l’Île Maurice','ile-maurice','Séjour',7,1890,images.maurice,'Détente'),
 makeTravel('seychelles-paradis','Les Seychelles, un autre monde','seychelles','Voyage organisé',9,2490,images.seychelles,'Détente'),
 makeTravel('grand-tour-madagascar','Grand Tour de Madagascar','madagascar','Circuit',14,2290,images.madagascar,'Aventure'),
 makeTravel('madagascar-authentique','Madagascar authentique','madagascar','Circuit',10,1690,images.madagascar),
 makeTravel('aventure-sud','Aventure dans le Sud','madagascar','Circuit',9,1590,images.madagascar,'Aventure'),
 makeTravel('safari-kenya-tanzanie','Safari Kenya & Tanzanie','kenya','Circuit',12,3290,images.safari,'Safari'),
 makeTravel('reunion-intense','La Réunion intense','reunion','Circuit',8,1790,images.reunion,'Randonnée'),
 makeTravel('nosy-be','Les îles secrètes de Nosy Be','madagascar','Excursion',1,85,images.boat,'Bateau'),
 makeTravel('plongee-maurice','Plongée dans le lagon mauricien','ile-maurice','Excursion',1,95,images.boat,'Plongée'),
 makeTravel('randonnee-reunion','Au sommet du Piton de la Fournaise','reunion','Excursion',1,75,images.reunion,'Randonnée'),
 makeTravel('croisiere-seychelles','Croisière aux îles des Seychelles','seychelles','Excursion',1,125,images.seychelles,'Bateau'),
 makeTravel('zanzibar-epices','Zanzibar, l’île aux épices','zanzibar','Séjour',7,1590,images.hero,'Détente'),
 makeTravel('tanzanie-sauvage','Tanzanie sauvage','tanzanie','Voyage organisé',10,2890,images.safari,'Safari'),
 makeTravel('cap-afrique','Cap sur l’Afrique du Sud','afrique-du-sud','Voyage organisé',9,2390,images.safari),
 makeTravel('dubai-escapade','Escapade à Dubaï','dubai','Séjour',5,1190,images.dubai),
 makeTravel('paris-decouverte','Paris, culture et art de vivre','france','Séjour',6,1290,images.paris),
 makeTravel('inde-essentielle','L’Inde essentielle','inde','Circuit',11,1990,images.inde),
 makeTravel('thailande-iles','Les îles de Thaïlande','thailande','Séjour',10,1790,images.thailande),
];
export const reviews:Review[]=[
 {name:'Sophie L.',destination:'Madagascar',rating:5,comment:'Un voyage magnifique, des paysages à couper le souffle et une équipe aux petits soins. Nous sommes rentrés avec des souvenirs inoubliables !',date:'Octobre 2026'},
 {name:'Thomas & Julie',destination:'Île Maurice',rating:5,comment:'Tout était parfaitement organisé, du premier échange au retour. Une vraie parenthèse au paradis. Nous repartirons les yeux fermés.',date:'Septembre 2026'},
 {name:'Marc D.',destination:'Seychelles',rating:5,comment:'Un itinéraire sur mesure qui correspondait exactement à nos envies. De belles rencontres et des endroits que nous n’aurions jamais trouvés seuls.',date:'Août 2026'},
];
export const articles:Article[]=[
 {id:'incontournables-madagascar',title:'Madagascar : 10 merveilles à découvrir',image:images.madagascar,category:'Carnet de voyage',date:'18 novembre 2026',excerpt:'Des baobabs majestueux aux plages de Nosy Be, laissez-vous surprendre par la Grande Île.',paragraphs:['Madagascar est une destination qui ne ressemble à aucune autre. La diversité de ses paysages, sa faune unique et l’accueil chaleureux de ses habitants invitent à prendre le temps.','Commencez par l’allée des Baobabs au coucher du soleil. Poursuivez vers les formations rocheuses des Tsingy, puis les sentiers de l’Isalo. Les parcs de Ranomafana et d’Andasibe permettent de découvrir les lémuriens dans leur habitat naturel.','Au nord, Nosy Be et ses îles voisines offrent des plages lumineuses et des fonds marins remarquables. Dans les Hautes Terres, découvrez les marchés, les villages et les savoir-faire locaux.','Prévoyez un itinéraire réaliste : les trajets peuvent être longs. Un guide local et une organisation adaptée vous permettront de profiter pleinement de chaque étape.']},
 {id:'quand-partir-maurice',title:'Quand partir à l’Île Maurice ?',image:images.maurice,category:'Conseils & inspirations',date:'12 novembre 2026',excerpt:'Soleil, lagons et douceur de vivre : choisissez le meilleur moment pour votre escapade.',paragraphs:['L’île Maurice se découvre toute l’année, avec deux grandes saisons. L’été austral, de novembre à avril, est chaud et humide ; l’hiver austral, de mai à octobre, est plus frais et sec.','Pour profiter des plages et des excursions avec des températures agréables, avril, mai, septembre et octobre sont souvent de très bons choix.','La côte ouest est généralement plus abritée du vent. La côte est offre des lagons splendides, mais peut être plus venteuse pendant l’hiver austral.','Vérifiez toujours les prévisions avant votre départ et adaptez vos activités aux conditions du jour.']},
 {id:'plages-ocean-indien',title:'Les plus belles plages de l’océan Indien',image:images.seychelles,category:'Évasion',date:'5 novembre 2026',excerpt:'Notre sélection de petits coins de paradis, entre sable blanc et eaux cristallines.',paragraphs:['Des Seychelles à Madagascar, l’océan Indien dévoile des plages aux personnalités bien différentes. Chacune promet une autre façon de ralentir.','Aux Seychelles, les rochers de granit dessinent des paysages singuliers. À Maurice, les lagons protégés sont propices à la baignade. À Madagascar, les îlots autour de Nosy Be invitent à l’exploration.','Préservez ces lieux fragiles : ne laissez aucun déchet, respectez les coraux et préférez les opérateurs qui prennent soin de leur environnement.']},
];
export const formatPrice=(price:number)=>new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(price);
