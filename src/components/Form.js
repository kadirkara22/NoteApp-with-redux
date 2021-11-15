import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filteredNotes } from '../redux/notes/notesSlice';


const Form = () => {

    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const search = (state) => state.notes.items

    const handleFilter = (e) => {
        setTitle(e.target.value)
        dispatch(filteredNotes(e.target.value.toLowerCase()))

    }

    console.log(search)
    return (
        <>
            <form>
                <input className="search"
                    placeholder="Search..."
                    autoFocus
                    value={title}
                    onChange={handleFilter}
                />
            </form>

        </>
    )
}

export default Form
