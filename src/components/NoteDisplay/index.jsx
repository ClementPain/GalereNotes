import React from 'react';
import Showdown from "showdown";

const NoteDisplay = ({title, content}) => {
    const converter = new Showdown.Converter();
    
    const createHtmlContent = () => {
        return{__html: converter.makeHtml(content) };
    }

    return (
        <section>
            <h3 className="title">Titre : {title}</h3>
            <p className="content">Contenu : <span dangerouslySetInnerHTML={createHtmlContent()}/> </p>
        </section>
    )        
}

export default NoteDisplay