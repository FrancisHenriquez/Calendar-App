
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Nabar } from "../components/Nabar"
import {addHours, format, parse, startOfWeek, getDay} from "date-fns"
import enUS from "date-fns/esm/locale/en-US"
import { localizer } from "../../helpers/calendarLocalizer"
import { getMessagesEs } from "../../helpers"
import { useState } from "react"
import { CalendarModal } from "../components/CalendarModal"
import { CalendarEvent } from "../components/CalendarEvent"
import { useUiStore, useCalendarStore } from "../../hooks"






export const CalendarPage = () => {

  const { openDateModal, } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();

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

    openDateModal();
    

  }

  const onSelect = (event) => {
    setActiveEvent( event );
    
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
            event: CalendarEvent
          }}
          onDoubleClickEvent = { onDoubleClick }
          onSelectEvent = { onSelect }
          onView = { onViewChanged }
    />
  </div>

    <CalendarModal/>

    </>

  )
}
