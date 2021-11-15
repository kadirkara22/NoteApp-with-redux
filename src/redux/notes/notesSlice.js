import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
            {
                id: '',
                title: "",
                color: "",

            },
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
                        selected: false
                    }
                }
            }
        },
        filteredNotes: (state, action) => {
            const filteredNote = state.items.filter((item) => {
                return (item.title.toLowerCase().includes(action.payload))
            })
            state.items = filteredNote
        }


    }
})

export const selectNotes = (state) => state.notes.items;


export const { addNote, filteredNotes } = notesSlice.actions;
export default notesSlice.reducer;