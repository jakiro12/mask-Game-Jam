import './App.css'
import DemonMaskNigth from './components/demonMask/mask-demon'
import ColorsToPickWithMouse from './components/paletColors/colorPicker'

function App() {

  return (
      <main className='game_selector_container'>
        <nav className='mask_options_container'>mascaras a elegir</nav>
        <section className='display_mask_options'>
          <aside className='show_mask_visualitaion'>
            <DemonMaskNigth/>
          </aside>
          <ColorsToPickWithMouse/>
        </section>
      </main>
       )
}

export default App
