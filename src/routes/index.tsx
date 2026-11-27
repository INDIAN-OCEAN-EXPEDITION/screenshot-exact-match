import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/travel/home";
import { pageHead } from "@/lib/seo";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => pageHead("Explorez l’océan Indien autrement", "Indian Ocean Expedition : voyages, circuits, séjours et expériences à Madagascar, Maurice et aux Seychelles. Découvrez votre prochaine évasion."),
  component: Home,
});
