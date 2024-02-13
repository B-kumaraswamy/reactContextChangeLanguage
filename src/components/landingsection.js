import { useLanguageContext } from "../context";
const obj = {
    English : "Windows 11 provides a calm and creative space where you can pursue your passions through a fresh experience. From a rejuvenated Start menu to new ways to connect to your favorite people, news, games, and content. Windows  is the place to think, express, and create in a natural way.",
    Hindi : "विंडोज 11 एक शांत और रचनात्मक स्थान प्रदान करता है जहां आप एक नए अनुभव के माध्यम से अपने जुनून को आगे बढ़ा सकते हैं। अपने पसंदीदा लोगों, समाचारों, गेमों और सामग्री से जुड़ने के नए तरीकों से एक नए सिरे से शुरू किए गए स्टार्ट मेनू से विंडोज एक प्राकृतिक तरीके से सोचने, व्यक्त करने और बनाने का स्थान है।" ,
    Telugu : "విండోస్ 11 ప్రశాంతమైన మరియు సృజనాత్మక స్థలాన్ని అందిస్తుంది, ఇక్కడ మీరు మీ అభిరుచులను తాజా అనుభవం ద్వారా కొనసాగించవచ్చు. పునరుజ్జీవింపబడిన ప్రారంభ మెను నుండి మీకు ఇష్టమైన వ్యక్తులు, వార్తలు, ఆటలు మరియు కంటెంట్‌తో కనెక్ట్ అవ్వడానికి కొత్త మార్గాల వరకు విండోస్ అనేది సహజంగా ఆలోచించే, వ్యక్తీకరించే మరియు సృష్టించే ప్రదేశం."
}
function LandingSection() {
    const display = (lan) => {
        switch(lan){
            case "English":
                return obj.English
            case "Hindi":
                return obj.Hindi 
            case "Telugu":
                return obj.Telugu
            default:
                return obj.English
            
        }

    }
    const {activeLanguage} = useLanguageContext()
    const displayingLanguage = display(activeLanguage)
    return (
        <div>
            <h1>hello landingsection in {displayingLanguage}</h1>
        </div>
    )
}

export default LandingSection;