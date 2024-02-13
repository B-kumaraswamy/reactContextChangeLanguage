import {createContext, useState, useContext} from 'react'

const LanguageContext = createContext();
export const useLanguageContext = () => {
    return useContext(LanguageContext)
}

export const LanguageProvider = ({children}) => {
    const [activeLanguage, setactiveLanguage] = useState("English")

    const onChangingLanguage = (language) => {
        setactiveLanguage(language)
    }

    const values = {activeLanguage, onChangingLanguage}
        return (
            <LanguageContext.Provider value = {values}>
                {children}
            </LanguageContext.Provider>
        )

}

export default LanguageContext;
