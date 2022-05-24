import styles from '../../styles/Evernote.module.scss'
import { useState } from 'react';
import { app, database } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const dbInstance = collection(database, 'notes');
export default function NoteOperations() {
    const [isInputVisible, setInputVisible] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDesc, setNoteDesc] = useState('')
    const inputToggle = () => {
        setInputVisible(!isInputVisible)
    }

    const addDesc = (value) => {
        setNoteDesc(value)
    }

    const saveNote = () => {
        addDoc(dbInstance, {
            noteTitle: noteTitle,
            noteDesc: noteDesc
        })
            .then(() => {
                setNoteTitle('')
                setNoteDesc('')
            })
    }
    return (
        <>
            <div className={styles.btnContainer}>
                <button
                    onClick={inputToggle}
                    className={styles.button}>
                    Add a New Note
                </button>
            </div>

            {isInputVisible ? (
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        placeholder='Enter the Title..'
                        onChange={(e) => setNoteTitle(e.target.value)}
                        value={noteTitle}
                    />
                    <div className={styles.ReactQuill}>
                        <ReactQuill
                            onChange={addDesc}
                            value={noteDesc}
                        />
                    </div>
                    <button
                        onClick={saveNote}
                        className={styles.saveBtn}>
                        Save Note
                    </button>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
