import React from 'react'
import { useSelector } from 'react-redux';
import { selectNotes } from '../redux/notes/notesSlice';

const NotesContent = () => {
    const items = useSelector(selectNotes)
    console.log(items)
    return (
        <div className="notesContent">
            {
                items.map(item => (
                    <div key={item.id} className={item.color.noteColor}>{item.title}</div>
                ))
            }

        </div>
    )
}

export default NotesContent;
