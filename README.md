# Villa Cuatro Vientos

Website for [Villa Cuatro Vientos](https://www.villacuatrovientos.com), a private hilltop holiday home near Comares in Andalusia. Bookings go through [Airbnb](https://www.airbnb.com/rooms/631518594031529862).

Built with Next.js (App Router), Tailwind CSS and next-intl, in English, Spanish and German.

## Development

```sh
pnpm install
pnpm dev
```

## Where things live

- `app/[locale]/` — the four pages: home, `house`, `comares`, `stay`
- `components/` — shared UI; `components/nav/` holds the site nav and menu
- `messages/{en,es,de}.json` — all page copy
- `lib/villa.ts` — rooms, places, reviews and the Airbnb link
- `public/editorial/` — photographs; `public/video/` — the home film

## Deployment

Pushes to `main` deploy to production on Vercel. Other branches get preview deployments.
