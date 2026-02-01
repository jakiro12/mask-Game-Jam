import './App.css'
import DemonMaskNigth from './components/demonMask/mask-demon'
import LegendAboutCurrentMask from './components/legendTasks/legend'
import ModalToShowCurrentPhrase from './components/modalPhrases/phrase-show'
import ColorsToPickWithMouse from './components/paletColors/colorPicker'
import { useColor } from './context/colorContext'

function App() {
  const{showProverb}=useColor()
  return (
      <main className='game_selector_container'>                            
          <nav
          style={{visibility:'hidden'}}
           className='mask_options_container'>mascaras a elegir</nav>
          <section className='display_mask_options'>
            <aside className='show_mask_visualitaion'>
              <LegendAboutCurrentMask/>
              <DemonMaskNigth/>
            </aside>
            {
              showProverb ?
          <ModalToShowCurrentPhrase/>
          :
            <ColorsToPickWithMouse/>
            }
          </section>                  
      </main>
       )
}

export default App
