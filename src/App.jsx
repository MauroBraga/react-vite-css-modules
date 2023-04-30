import { Post } from "./Post"
import  { Header} from "./components/Header"
import styels from './App.module.css';

import './global.css';
import { SideBar } from "./components/SideBar";


function App() {

  return (
    <div>
      <Header/>

      <div className={styels.wrapper}>
            <SideBar/>
            <main>
                <Post
                author="Mauro"
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus debitis dolorem, ipsa eos error eius molestiae perspiciatis accusantium alias doloremque repudiandae consectetur sapiente cupiditate a unde minima, sed quo placeat?"/>
    
                <Post
                    author="Diego"
                    content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus debitis dolorem, ipsa eos error eius molestiae perspiciatis accusantium alias doloremque repudiandae consectetur sapiente cupiditate a unde minima, sed quo placeat?"/>
            </main>
      </div>

      
    </div>
   
  )
}

export default App
