import React from 'react'
import { useNavigate } from "react-router-dom";

function AgendaButton() {
  const navigate = useNavigate();
  return (
    <button type="button" className="btn btn-primary" onClick={() => navigate("/agenda")}>
        Agenda
    </button>
  )
}

export default AgendaButton