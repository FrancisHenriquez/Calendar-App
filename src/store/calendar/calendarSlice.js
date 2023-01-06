import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent =
{
    _id: new Date().getTime(),
    title: 'Ragnarok',
    notes: 'Lest brign destruction',
    start: new Date,
    end: addHours( new Date() , 2),
    bgColor: '#afaf',
    user: {
      _id: '0795',
      name: ' LordConfle '
    }
  
  }

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null
    },
    reducers: {
       onSetActiveEvent: (state, { payload }) => {
        state.activeEvent = payload;
       }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;
