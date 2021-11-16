import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
            /*   {
                  id: "",
                  title: "",
                  color: "",
  
              }, */
        ]
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: ({ title, color }) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        color,
                    }
                }
            }
        },
        filteredNotes: (state, action) => {
            const notes = localStorage.getItem("Notes")
            const getNotes = JSON.parse(notes)
            const filteredNote = getNotes.filter((item) => {
                return (item.title.toLowerCase().includes(action.payload))
            })
            if (filteredNote) {
                state.items = filteredNote;
            }



        },
        deleteNotes: (state, action) => {
            const notes = localStorage.getItem("Notes")
            const getNotes = JSON.parse(notes)
            const id = action.payload;
            const filtered = getNotes.find((item) => item.id !== id);
            if (filtered) {
                state.items = filtered;
            }
        }


    }
})

export const selectNotes = (state) => state.notes.items;


export const { addNote, filteredNotes, deleteNotes } = notesSlice.actions;
export default notesSlice.reducer;