
import IntroBanner from './Components/IntroBanner/IntroBanner'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <div className="navbar bg-[#8581eb]">  
  <a className="btn btn-ghost text-xl text-white">Web Developer</a>
</div>
      <IntroBanner></IntroBanner>
      <About></About>
      
      <Projects></Projects>
    </div>
  )
}

export default App
