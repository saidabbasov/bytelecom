import { Auth } from './component/Auth/Auth'
import Content from './component/Content/Content'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Katalog from './component/Katalog/Katalog'

export default function Home() {
  return (
    <div>
     <Header />
     <hr />
     <Katalog />
     <br/>
     <Content/>
     <Auth />
     <Footer />
    </div>
  )
}