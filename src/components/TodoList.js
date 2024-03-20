import React, { useState } from 'react';

function Todolist(props) {
  const [editedText, setEditedText] = useState(props.item);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.updateItem(props.index, editedText);
    setIsEditing(false);
  };

  return (
    <li className="list-item">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSave();
            }
          }}
        />
      ) : (
        <div>
          {props.item}
          <span className='icons'>
            <i className="fa-solid fa-trash-can icon-delete" onClick={e => props.deleteItem(props.index)}></i>
            <i className="fa-solid fa-pencil icon-edit" onClick={handleEdit}></i>
          </span>
        </div>
      )}
    </li>
  );
}

export default Todolist;
