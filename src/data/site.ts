// Informations centrales du cabinet : une seule source de vérité pour tout le site.
export const site = {
  name: 'Anastasia Mischenko',
  title: 'Masseur-Kinésithérapeute D.E.',
  titleEn: 'Chartered Physiotherapist (French State Diploma)',
  url: 'https://kine-mischenko.fr',
  phone: '+33766734393',
  phoneDisplay: '07 66 73 43 93',
  phoneDisplayIntl: '+33 7 66 73 43 93',
  doctolib: 'https://www.doctolib.fr/masseur-kinesitherapeute/paris/anastasia-mischenko-paris',
  rpps: '10108070698',
  address: {
    street: '51 boulevard de Beauséjour',
    postalCode: '75016',
    city: 'Paris',
    country: 'FR',
  },
  geo: { lat: 48.8568636, lng: 2.2675493 },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=51+boulevard+de+Beaus%C3%A9jour+75016+Paris',
  prices: { first: 68, session: 45 },
};

export type Lang = 'fr' | 'en';

// Paires de pages FR <-> EN, utilisées pour les balises hreflang et le sélecteur de langue.
export const routePairs: [string, string][] = [
  ['/', '/en/'],
  ['/kine-du-sport-paris-16/', '/en/sports-physiotherapy-paris-16/'],
  ['/reeducation-post-operatoire-paris-16/', '/en/post-surgery-rehabilitation-paris-16/'],
  ['/mal-de-dos-therapie-manuelle-paris-16/', '/en/back-pain-manual-therapy-paris-16/'],
  ['/kine-respiratoire-paris-16/', '/en/respiratory-physiotherapy-paris-16/'],
  ['/remise-en-forme-paris-16/', '/en/fitness-reconditioning-paris-16/'],
  ['/cabinet-acces/', '/en/practice-location/'],
  ['/tarifs-remboursement/', '/en/fees/'],
  ['/a-propos/', '/en/about/'],
  ['/mentions-legales/', '/en/legal-notice/'],
];

export function alternateOf(path: string): { fr?: string; en?: string } {
  const pair = routePairs.find(([fr, en]) => fr === path || en === path);
  return pair ? { fr: pair[0], en: pair[1] } : {};
}

export const services = {
  fr: [
    { href: '/kine-du-sport-paris-16/', label: 'Kinésithérapie du sport', short: 'Entorses, tendinites, déchirures, reprise du sport.' },
    { href: '/reeducation-post-operatoire-paris-16/', label: 'Rééducation post-opératoire', short: 'Genou, épaule, hanche, cheville : après chirurgie orthopédique.' },
    { href: '/mal-de-dos-therapie-manuelle-paris-16/', label: 'Dos & thérapie manuelle', short: 'Lombalgies, cervicalgies, sciatiques, douleurs posturales.' },
    { href: '/kine-respiratoire-paris-16/', label: 'Kiné respiratoire & cardio-vasculaire', short: 'Désencombrement, réentraînement à l’effort.' },
    { href: '/remise-en-forme-paris-16/', label: 'Remise en forme', short: 'Préparation physique et renforcement, hors nomenclature.' },
  ],
  en: [
    { href: '/en/sports-physiotherapy-paris-16/', label: 'Sports physiotherapy', short: 'Sprains, tendinopathies, muscle tears, return to sport.' },
    { href: '/en/post-surgery-rehabilitation-paris-16/', label: 'Post-surgery rehabilitation', short: 'Knee, shoulder, hip, ankle: after orthopaedic surgery.' },
    { href: '/en/back-pain-manual-therapy-paris-16/', label: 'Back pain & manual therapy', short: 'Low back pain, neck pain, sciatica, postural pain.' },
    { href: '/en/respiratory-physiotherapy-paris-16/', label: 'Respiratory & cardiovascular physio', short: 'Airway clearance, exercise retraining.' },
    { href: '/en/fitness-reconditioning-paris-16/', label: 'Fitness & reconditioning', short: 'Strength and conditioning, private sessions.' },
  ],
};

export const nav = {
  fr: [
    { href: '/', label: 'Accueil' },
    { href: '/kine-du-sport-paris-16/', label: 'Soins', children: services.fr },
    { href: '/cabinet-acces/', label: 'Cabinet & accès' },
    { href: '/tarifs-remboursement/', label: 'Tarifs' },
    { href: '/a-propos/', label: 'À propos' },
    { href: '/blog/', label: 'Conseils' },
  ],
  en: [
    { href: '/en/', label: 'Home' },
    { href: '/en/sports-physiotherapy-paris-16/', label: 'Treatments', children: services.en },
    { href: '/en/practice-location/', label: 'Location' },
    { href: '/en/fees/', label: 'Fees' },
    { href: '/en/about/', label: 'About' },
  ],
};

export const ui = {
  fr: {
    book: 'Prendre rendez-vous',
    bookShort: 'Rendez-vous',
    call: 'Appeler',
    bookOn: 'Réservation en ligne sur Doctolib',
    skip: 'Aller au contenu',
    menu: 'Menu',
    langSwitch: 'English',
    address: 'Adresse',
    access: 'Accès',
    legal: 'Mentions légales',
    rpps: 'N° RPPS',
    footerNote: 'Cabinet de kinésithérapie à Paris 16e, quartier de la Muette / Ranelagh.',
    faq: 'Questions fréquentes',
    otherCare: 'Les autres soins du cabinet',
  },
  en: {
    book: 'Book an appointment',
    bookShort: 'Book',
    call: 'Call',
    bookOn: 'Online booking via Doctolib',
    skip: 'Skip to content',
    menu: 'Menu',
    langSwitch: 'Français',
    address: 'Address',
    access: 'Getting here',
    legal: 'Legal notice',
    rpps: 'RPPS no.',
    footerNote: 'English-speaking physiotherapy practice in Paris 16th, La Muette / Ranelagh area.',
    faq: 'Frequently asked questions',
    otherCare: 'Other treatments',
  },
};
