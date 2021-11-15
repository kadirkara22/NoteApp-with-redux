import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addColor, addNote, selectColors, selectNotes } from '../redux/notes/notesSlice';



export const colors = [
    {
        id: 1,
        name: "pembe",
        noteColor: "pink",
    },
    {
        id: 2,
        name: "mor",
        noteColor: "purple",
    },
    {
        id: 3,
        name: "sari",
        noteColor: "yellow",

    },
    {
        id: 4,
        name: "mavi",
        noteColor: "blue",
    },
    {
        id: 5,
        name: "yesil",
        noteColor: "green",
    },
]
const Content = () => {

    const items = useSelector(selectNotes)

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");




    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addNote({ title, color }))

        const notesList = items;

        setTitle("")
        setColor("")

        localStorage.setItem("Notes", JSON.stringify(notesList));
    }

    useEffect(() => {
        const notes = localStorage.getItem("Notes")

        if (notes) {
            const getNotes = JSON.parse(notes)
            setTitle(getNotes)
        }
    }, [])

    return (
        <form className="content" >
            <textarea className="textarea"
                placeholder="Enter your note here..."
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            >

            </textarea>
            <div className="contentColor">
                <div className="color">
                    <>
                        {
                            colors.map(color => (
                                <div key={color.id} className={color.name} onClick={() => { setColor(color) }}>

                                </div>

                            ))

                        }

                    </>
                </div>
                <button className="addButton" onClick={handleClick}>ADD</button>
            </div>
        </form>
    )
}

export default Content
