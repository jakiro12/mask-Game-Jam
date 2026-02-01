import '../../App.css'
import { useColor } from '../../context/colorContext'

const ColorsToPickWithMouse=()=>{
    const {setActiveColor}=useColor()

    const kabukiColors :string[] = [
  "#7A0000", 
  "#A10000", 
  "#5A0000", 
  "#2B0000", 
  "#4B0033", 
  "#6A0073", 
  "#4b0f72", 
  "#0F0F0F", 
  "#1A1A1A", 
];

    return(
        <section
        className='palet_sections_colors'
        >
            <p
            className='legend-instruction'
            >Fill the Mask with colors and get the hidden message</p>
        <aside className='colors_container'>
            {kabukiColors.map((e:string,i:number)=>
            <button
            className='color_btn_pick'
            key={i}
            onClick={()=>setActiveColor(e)}
            >
                <span
                style={{backgroundColor:e}}
                ></span>
            </button>)
            }           
        </aside>
        </section>
    )
}

export default ColorsToPickWithMouse