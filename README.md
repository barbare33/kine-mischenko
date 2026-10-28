# kine-mischenko.fr

Site d'Anastasia Mischenko, masseur-kinésithérapeute D.E. à Paris 16e. Site statique [Astro](https://astro.build), FR + EN.

## Développement

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

- Infos du cabinet (téléphone, adresse, tarifs, lien Doctolib) : `src/data/site.ts`, à modifier à un seul endroit.
- Pages : `src/pages/` (FR à la racine, EN dans `en/`). Pour ajouter une page traduite, déclarer la paire dans `routePairs` (`site.ts`) pour les balises hreflang.
- Articles de blog : ajouter un fichier `.md` dans `src/content/blog/` (même en-tête que les articles existants).
- Image de partage : `node scripts/og.mjs` régénère `public/og.jpg`.

## Mise en ligne (Cloudflare Pages, gratuit)

1. Pousser le dépôt sur GitHub.
2. Cloudflare → Workers & Pages → Create → Pages → connecter le dépôt. Build command : `npm run build`, dossier de sortie : `dist`.
3. Acheter `kine-mischenko.fr` (Cloudflare Registrar, OVH ou Gandi) puis l'ajouter en « Custom domain » du projet Pages. Rediriger `www` vers le domaine nu.
4. Google Search Console : ajouter le domaine, puis soumettre `https://kine-mischenko.fr/sitemap-index.xml`.
5. Bing Webmaster Tools : importer depuis Search Console.

## Checklist SEO local (hors site, la plus rentable)

- [ ] **Fiche Google Business Profile** : catégorie principale « Kinésithérapeute », ajouter le site `https://kine-mischenko.fr`, le téléphone, les horaires, les services (sport, post-op, dos, respiratoire), « English spoken », lien de RDV Doctolib.
- [ ] Ajouter des **photos** du cabinet (façade, salle, équipement) sur la fiche Google, puis sur le site.
- [ ] Demander des **avis Google** aux patients satisfaits (sans contrepartie) et y répondre.
- [ ] Doctolib : remplacer la présentation générique, **désactiver la demande de visite à domicile**, ajouter le lien du site.
- [ ] Même nom / adresse / téléphone partout : Pages Jaunes, annuaire Ameli, Doctolib, Apple Plans (Apple Business Connect), Bing Places.
- [ ] Publier 1 à 2 articles par mois dans `src/content/blog/`.

## À compléter

- Tarif des séances de remise en forme (actuellement « sur demande »).
- Photos professionnelles (remplaceront le monogramme « AM »).
- Mentions légales : vérifier l'hébergeur une fois le déploiement choisi.
