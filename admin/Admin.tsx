import { FC } from "react"
import Header from "../pages/component/Header/Header"
import { AdminNavigation } from "./AdminNavigation/AdminNavigation"
import Statistics from "./Statistics/Statistics"

const Admin:FC = () => {
  return <div>
    <Header />
    <AdminNavigation />
    <Statistics />
  </div>
}

export default Admin