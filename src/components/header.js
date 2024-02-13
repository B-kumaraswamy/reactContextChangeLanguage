import { useLanguageContext } from "../context";

function Header() {
    const {onChangingLanguage} = useLanguageContext()
    const onChange = (event) => {
        onChangingLanguage(event.target.value)
    }
  

    return (
       
            <div>
            <select onChange = {onChange}>
            <option>English</option>
              
                <option>Telugu</option>
                <option>Hindi</option>
               
                
            </select>
        </div>
    
                
            
      
)}


export default Header;