import { useCFBContext } from '../context/context-user';
import { Lang } from '../context/langs/types';
import { fonts } from '../styles/styles';

export const Test = () => {
    const { theme, setTheme, palette, copyDoc, lang, setLang } =
        useCFBContext();

    const onTogglePalette = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const onChangeLang = (lang: Lang) => {
        setLang(lang);
    };

    return (
        <div
            style={{
                backgroundColor: palette.background,
                height: '100vh',
            }}>
            <p style={{ ...fonts.heading, color: palette.primary }}>
                {copyDoc.headings.title}
            </p>
            <p style={{ ...fonts.subheading, color: palette.secondary }}>
                {'Subheading style'}
            </p>
            <p style={{ ...fonts.body, color: palette.primary }}>
                {'Body style'}
            </p>
            <button
                id={'toggle-palette'}
                onClick={onTogglePalette}
                onSelect={() => {
                    console.log('hello');
                    document.getElementById(
                        'toggle-palette'
                    )!.style.backgroundColor = palette.primary_highlight;
                }}
                style={{
                    ...fonts.body,
                    color: palette.primary,
                    backgroundColor: palette.background,
                    border: '1px solid',
                    borderColor: palette.primary,
                    inset: 0,
                }}>
                {'Toggle Pallete'}
            </button>
            <br />
            <label
                htmlFor='langs'
                style={{ ...fonts.subheading, color: palette.secondary }}>
                {'Select a Language'}
            </label>
            <br />
            <select
                id='langs'
                defaultValue={lang}
                onChange={e => onChangeLang(e.target.value as Lang)}>
                {Object.values(Lang)
                    .sort()
                    .flatMap(langOption => (
                        <option value={langOption} key={langOption}>
                            {copyDoc.languages[langOption]}
                        </option>
                    ))}
            </select>
        </div>
    );
};
