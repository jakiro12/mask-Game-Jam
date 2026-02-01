import { useColor } from "../../context/colorContext"
import demonPhrases from '../../utils/demon-phrases.json';
import '../../App.css'
const ModalToShowCurrentPhrase=()=>{
    const phrases = demonPhrases as Record<string, string>;

    const {setShowProverb,targetHash,resetGame}=useColor()
    const handleResetGameFromModal=()=>{
        setShowProverb(false)
        resetGame()
    }
    return(        
        <div className="modal-overlay">
          <div className="modal-proverb">
            <p>{phrases[targetHash]}</p>

            <button onClick={handleResetGameFromModal}>
              &#8635;
            </button>
          </div>
        </div>      
    )
}
export default ModalToShowCurrentPhrase