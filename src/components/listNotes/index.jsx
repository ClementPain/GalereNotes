import React from 'react';
import Showdown from "showdown";

const ListNotes = () => {
  const converter = new Showdown.Converter();
  
  const createHtmlContent = (content) => {
    return{__html: converter.makeHtml(content) };
  }
  
  const listNotes = [];

  for ( let i=0; i < localStorage.length; i++ ) {
    listNotes.push( [ localStorage.key(i), localStorage[localStorage.key(i)] ] );
  }

  return (
    <div>
      <h2>Notes</h2>
      { listNotes.map( note => (
        <div className="container">
          <h3> { note[0] } </h3>
          <p dangerouslySetInnerHTML = { createHtmlContent(note[1]) } />
        </div>
      ))}  
    </div>
  )
}

export default ListNotes;