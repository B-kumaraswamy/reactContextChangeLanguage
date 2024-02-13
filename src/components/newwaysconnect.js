import { useLanguageContext } from "../context";
const obj = {
    English : "Connect instantly to the people you care about right from your desktop with Microsoft Teams. Call or chat for free, no matter what device they’re on.",
    Hindi : "माइक्रोसॉफ्ट टीमों के साथ सीधे अपने डेस्कटॉप से ​​उन लोगों से तुरंत कनेक्ट हों जिनकी आप परवाह करते हैं। कॉल करें या निःशुल्क चैट करें—चाहे वे किसी भी डिवाइस पर हों।" ,
    Telugu : "మైక్రోసాఫ్ట్ బృందాలతో మీ డెస్క్‌టాప్ నుండి మీరు శ్రద్ధ వహించే వ్యక్తులతో తక్షణమే కనెక్ట్ అవ్వండి. అవి ఏ పరికరంలో ఉన్నా సరే ఉచితంగా కాల్ చేయండి లేదా చాట్ చేయండి"
}

function NewWaysToConnect() {
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
            <h1>hello NewWaysToConnect in {displayingLanguage}</h1>
        </div>
    )
}

export default NewWaysToConnect;