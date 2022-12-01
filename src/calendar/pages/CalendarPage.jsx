import { Nabar } from "../components/Nabar"
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {addHours, format, parse, startOfWeek, getDay} from "date-fns"


const locales = {
  'en-US': 'enUS',
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

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
  return (
    <>
      <Nabar />
      <div>
          <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 80px)' }}
    />
  </div>
    
    </>

  )
}
