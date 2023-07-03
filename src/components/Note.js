import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

const Note = ({
  handleSetNotes,
  edit,
  id,
  text2,
  date,
  handleEditNote,
  handleDeleteNote,
  handleChange,
}) => {
  console.log(edit);
  return (
    <div className={edit ? "noteedit" : "note"}>
      {edit ? (
        <textarea
          className="noteinput"
          value={text2}
          rows="8"
          cols="10"
          onChange={(event) => handleChange(id, event.target.value)}
        ></textarea>
      ) : (
        <span>{text2}</span>
      )}
      <div className="note-footer">
        <small>{date}</small>
        <div className="icons">
          <AiOutlineEdit
            className="edit-icon"
            size="1.3em"
            onClick={() => handleEditNote(id)}
          />
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
