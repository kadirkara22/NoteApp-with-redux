import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectNotes } from '../redux/notes/notesSlice';

const NotesContent = () => {
    const items = useSelector(selectNotes)

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
