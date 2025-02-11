import { ui, showDefaultLang, routes } from './ui';

export const Languages = [
    {
        name: "Eng",
        value: "en",
    },
    {
        name: "Esp",
        value: "es",
    },
    {
        name: "Kor",
        value: "ko"
    }
] as const;
export const defaultLanguage = Languages.find(l=>l.name==="Eng")!.value;
export type Lang = (typeof Languages)[number]["value"];

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLanguage;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLanguage]) {
        if (key in ui[lang]) {
            return ui[lang][key as keyof typeof ui[typeof lang]];
        }
        return ui[defaultLanguage][key];
    }
}
