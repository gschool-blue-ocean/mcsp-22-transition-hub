import React from "react";
import './SideNavStudentCards.css'

const SidNavStudentCards = ({student, id}) => {
    //Can use id to return different colors
    return (
        <button className="navStudent_cards">
            {student.firstname} {student.lastname}
        </button>
    )
}

export default SidNavStudentCards