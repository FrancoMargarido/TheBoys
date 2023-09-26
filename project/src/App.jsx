import Nav from '../components/pages/nav/Nav.jsx'
import Home from '../components/pages/home/Home'
import Footer from '../components/pages/footer/Footer'
import ItemListContainer from '../components/pages/items/ItemListContainer.jsx'



/*=============== STYLES ===============*/


import '../components/pages/footer/footer.css'
import '../components/pages/home/home.css'
import '../components/pages/nav/nav.css'


function App() {


  let nombre = 'Cuantame lo que haces' 

  return (
    <div>
      <Nav/>
      <Home/> 
      <Footer/>
      {/* <ItemListContaine /> */}
    </div>

  )
}

export default App
