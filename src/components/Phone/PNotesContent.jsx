/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./PStyles.css";

// PNotesContent is a React component responsible for displaying a single note within a notes group in the phone interface.

const PNotesContent = ({ note }) => {
  return (
    // It shows the note's date, time, and content.
    <div className="phone_notes_content_body">
      <div className="phone_notes_content_date_time">
        <div className="phone_notes_content_date">{note.date}</div>
        <div className="phone_notes_content_time">{note.time}</div>
      </div>
      <div className="phone_notes_content_details">
        <p>{note.content}</p>
      </div>
    </div>
  );
};

export default PNotesContent;
