/* eslint-disable no-unused-vars */
export enum Lang {
    en = 'en',
    pl = 'pl',
}

export type CopyDoc = {
    languages: {
        en: string;
        pl: string;
    };
    headings: {
        title: string;
    };
};

export type LangOptions = {
    en: CopyDoc;
    pl: CopyDoc;
};
