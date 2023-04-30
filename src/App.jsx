import { Post } from "./Post"
import  { Header} from "./components/Header"

import './global.css';

function App() {

  return (
    <div>
      <Header/>

      <Post
            author="Mauro"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus debitis dolorem, ipsa eos error eius molestiae perspiciatis accusantium alias doloremque repudiandae consectetur sapiente cupiditate a unde minima, sed quo placeat?"/>
    
      <Post
            author="Diego"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus debitis dolorem, ipsa eos error eius molestiae perspiciatis accusantium alias doloremque repudiandae consectetur sapiente cupiditate a unde minima, sed quo placeat?"/>
    </div>
   
  )
}

export default App
