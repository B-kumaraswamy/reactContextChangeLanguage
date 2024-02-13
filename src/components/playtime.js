import { useLanguageContext } from "../context";
const obj = {
    English : "Windows takes gaming to a whole new level with graphic capabilities that rival reality. Discover your next favorite game with Xbox GamePass, giving you access to over 100 high-quality games.",
    Hindi : "विंडोज़ गेमिंग को ग्राफ़िक क्षमताओं के साथ एक नए स्तर पर ले जाता है जो वास्तविकता को टक्कर देता है। एक्सबॉक्स गेम पास के साथ अपना अगला पसंदीदा गेम खोजें, जिससे आपको 100 से अधिक उच्च-गुणवत्ता वाले गेम तक पहुंच मिलती है।",
    Telugu : "రియాలిటీకి ప్రత్యర్థిగా ఉండే గ్రాఫిక్ సామర్థ్యాలతో విండోస్ గేమింగ్‌ను సరికొత్త స్థాయికి తీసుకువెళుతుంది . మీ తదుపరి ఇష్టమైన ఆటను ఎక్స్‌బాక్స్ గేమ్‌పాస్‌తో కనుగొనండి, మీకు 100 కి పైగా అధిక-నాణ్యత ఆటలకు ప్రాప్యతను ఇస్తుంది."
}

function PlayTime() {
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
            <h1>hello PlayTime in {displayingLanguage}</h1>
        </div>
    )
}

export default PlayTime;