import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes/AppRouter"


export const CalendarApp = () => {
  return (
    <>
    <BrowserRouter>
     
        <AppRouter />
   
    </BrowserRouter>


    </>
  )
}
