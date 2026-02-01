import { useEffect, useState } from 'react'
import '../../App.css'
import { useColor } from '../../context/colorContext'

function compareHash(current: string, target: string) {
  return Array.from({ length: target.length }, (_, i) => {
    const char = current[i];

    return {
      char: char ?? "_",
      status:
        char === undefined
          ? "empty"
          : char.toUpperCase() === target[i]
          ? "ok"
          : "bad"
    };
  });
}
const LegendAboutCurrentMask=()=>{
    const {activeColor,message,targetHash,setShowProverb} =useColor()
    const [viewPhrase,setViewPhrase]=useState<boolean>(false)
   useEffect(() => {
    console.log(targetHash)
  if (message.toUpperCase() === targetHash.toUpperCase()) {
    console.log("HASH CORRECTO 🎭");
    setViewPhrase(true)    
  }
}, [message, targetHash]);
      const comparison = compareHash(message, targetHash);

    return(
        <header 
        style={{height:120}}
        className='header_legend_about'>           
            <p
            className='message_hash'
            >
                 {comparison.map((c, i) => (
          <span
            key={i}
            className={`hash-char ${c.status}`}
          >
            {c.char}
          </span>
        ))}        
            </p>           
            {viewPhrase ? 
            <button
            onClick={()=>setShowProverb(true)}
            className='btn_coin'>                
            </button>
            : null
            }
            <div
            className='color_btn_pick'
            style={{margin:0}}
            >{
                activeColor === "#ffffff" ?null:

                <span
                style={{backgroundColor:activeColor}}
                ></span>
            }
            </div>
        </header>
    )
}
export default LegendAboutCurrentMask