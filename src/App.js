import Features from "./components/features";
import Header from "./components/header";
import LandingSection from "./components/landingsection";
import  {LanguageProvider}  from "./context";


function ChangeLanguage() {
  return (
    <div>
    <LanguageProvider>
      <Header/>
      <LandingSection/>
      <Features/>
      </LanguageProvider>
     

    </div>
  )
}



export default ChangeLanguage;