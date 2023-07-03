import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
      edit: false,
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  // To update state
  const addNote = (texttoadd) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: texttoadd,
      date: date.toLocaleDateString(),
      edit: false,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // To change state
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const editNote = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, edit: !note.edit };
      }
      return note;
    });
    setNotes(updatedNotes);
  };
  const changeNote = (id, newText) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };
  // To save state in local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
          handleSetNotes={setNotes}
          handleChange={changeNote}
        />
      </div>
    </div>
  );
};

export default App;
