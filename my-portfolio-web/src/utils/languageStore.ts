let language = "es";

export const getLanguageCode = () => language;
export const setLanguageCode = (lang : string) => {
    console.log(lang)
  language = lang;
};