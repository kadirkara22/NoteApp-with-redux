import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filteredNotes } from '../redux/notes/notesSlice';


const Form = () => {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const search = (state) => state.notes.items

    const handleFilter = (e) => {
        setText(e.target.value)
        dispatch(filteredNotes(text.toLowerCase()))
    }


    return (
        <>
            <form>
                <input className="search"
                    placeholder="Search..."
                    autoFocus
                    value={text}
                    onChange={handleFilter}
                />
            </form>

        </>
    )
}

export default Form
