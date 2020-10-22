import React, { useState } from 'react';
import NoteDisplay from '../NoteDisplay';


const MarkdownInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveNote = (e) => {
    e.preventDefault();
    localStorage.setItem(title, content);
  }

  return (
    <div>
      <form>
        <div>
          <label>Titre :</label>
          <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Contenu :</label>
          <textarea id="content" onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit" onClick={(e) => saveNote(e)}>Sauvegarder</button>
      </form>
      <NoteDisplay title={title} content={content}/>
    </div>
  )
}

export default MarkdownInput;