/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./DStyles.css";

// The React component, DNotesContent, is responsible for rendering a single note in the DNotes component.

const DNotesContent = ({ note }) => {
  return (
    // It displays the date, time, and content of the note.
    <div className="desk_notes_content_note">
      <div className="desk_notes_content_date_time_details">
        <div className="desk_notes_content_date">{note.date}</div>
        <div className="desk_notes_content_time">{note.time}</div>
      </div>
      <div className="desk_notes_content_details">
        <p>{note.content}</p>
      </div>
    </div>
  );
};

export default DNotesContent;
