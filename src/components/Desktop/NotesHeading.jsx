/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./DStyles.css";

// The NotesHeading component is responsible for displaying and handling user interactions with a notes group title in the sidebar.

const NotesHeading = ({ title, selected, setSelected }) => {
  const nameInitials = title[0].name
    .split(" ")
    .map((word) => word.slice(0, 2))
    .join("")
    .toUpperCase();

  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const handleTitleClick = () => {
    setSelected(title[0].name);
  };
  // It displays the group's initials and name and allows users to select a group by clicking on it.
  return (
    <div
      onClick={handleTitleClick}
      className={`group_title_logo ${
        selected === title[0].name ? "highlighted_title" : null
      }`}
    >
      <div className="title_logo" style={{ backgroundColor: title[0].color }}>
        {nameInitials}
      </div>
      <div className="group_title">{newTitle}</div>
    </div>
  );
};

export default NotesHeading;
// It displays the group's initials and name and allows users to select a group by clicking on it.
