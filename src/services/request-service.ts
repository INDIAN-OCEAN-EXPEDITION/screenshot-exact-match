export interface BookingRequest {firstName:string;lastName:string;email:string;phone:string;travel:string;date:string;travelers:number;message:string;preferences:string;}
export interface QuoteRequest {destination:string;departure:string;returnDate:string;adults:number;children:number;budget:number;type:string;accommodation:string;transport:string;activities:string;email:string;message:string;}
export interface ContactRequest {name:string;email:string;message:string;}
export interface TicketRequest {departure:string;destination:string;date:string;returnDate:string;travelers:number;travelClass:string;mode:'air'|'road';roundTrip:boolean;}
export interface DemoReceipt {reference:string;status:'demo';}
// Intentionally no persistence and no network: replace this adapter when a live API is connected.
export async function simulateRequest(_request:BookingRequest|QuoteRequest|ContactRequest|TicketRequest):Promise<DemoReceipt>{return {reference:`IOE-${Date.now().toString(36).toUpperCase()}`,status:'demo'};}
