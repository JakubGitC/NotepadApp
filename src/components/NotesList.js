import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({
  notes,
  handleEditNote,
  handleAddNote,
  handleDeleteNote,
  handleSetNotes,
  handleChange,
}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text2={note.text}
          date={note.date}
          edit={note.edit}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
          handleSetNotes={handleSetNotes}
          handleChange={handleChange}
        />
      ))}
      <AddNote handleAddNote2={handleAddNote} />
    </div>
  );
};

export default NotesList;
