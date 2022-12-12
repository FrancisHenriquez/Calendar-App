import { Nabar } from "../components/Nabar"
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {addHours, format, parse, startOfWeek, getDay} from "date-fns"
import enUS from "date-fns/esm/locale/en-US"
import { localizer } from "../../helpers/calendarLocalizer"
import { getMessagesEs } from "../../helpers"
import { CalendarEven } from "../components/CalendarEven"
import { useState } from "react"

const events = [{
  title: 'Ragnarok',
  notes: 'Lest brign destruction',
  start: new Date,
  end: addHours( new Date() , 2),
  bgColor: '#afaf',
  user: {
    _id: '0795',
    name: ' LordConfle '
  }

}]

export const CalendarPage = () => {

  const [ lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {
  

    const style = {
      backgroundColor: '#afaf',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return{
        style
    }
  }

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event })

  }

  const onSelect = (event) => {
    console.log({ click: event })
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastView( event )
  }

  return (
    <>
      <Nabar />
      <div>
          <Calendar
          localizer={ localizer }
          events={events}
          defaultView = { lastView }
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 80px)' }}
          // messages = { getMessagesEs()} For spanish translating 
          eventPropGetter={ eventStyleGetter}
          components= {{
            event: CalendarEven
          }}
          onDoubleClickEvent = { onDoubleClick }
          onSelectEvent = { onSelect }
          onView = { onViewChanged }
    />
  </div>
    
    </>

  )
}
