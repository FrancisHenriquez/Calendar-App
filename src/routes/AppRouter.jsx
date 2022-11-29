import { Route, Routes } from "react-router"
import { LoginPage } from "../auth/pages"
import { CalendarPage } from "../calendar/pages/CalendarPage"





export const AppRouter = () => {
    const authStatus = 'not-autheticated'
  return (
   <Routes>
    {/* {
        (authStatus === 'not-authenticated')
    } */}
    <Route path="/*" element={ <LoginPage /> } />
    <Route path="/calendar" element={ <CalendarPage /> } />

   </Routes>
  )
}
