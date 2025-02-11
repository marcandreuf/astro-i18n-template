export const showDefaultLang = false;


export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.services': 'Serveis',
        'nav.contact': 'Contact',
        

    },
    es: {
        'nav.services': 'Servicios',
        'nav.contact': 'Contacto',     
    },
    ko: {
        'nav.services': '',
        'nav.contact': ''
    }
} as const;

export const routes = {
    ca: {
        'serveis': 'serveis',
        'api': 'api',
        'pressupost': 'pressupost',
        'contacte': 'contacte',
        'blog': 'blog',
    },
    es: {
        'serveis': 'servicios',
        'api': 'api',
        'pressupost': 'presupuesto',
        'contacte': 'contacto',
        'blog': 'blog',
    },
}
