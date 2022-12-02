

export const CalendarEven = ({ event }) => {

    const { title, user } = event;

  return (
    <>
    <strong> { title } </strong>
    <span>- { user.name }</span>
    
    
    </>
  )
}
