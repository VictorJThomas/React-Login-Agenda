import React from "react";
import { removeEmployee } from "../service/localstorage";
import { getListEmployees } from "../service/localstorage";
import { useNavigate } from "react-router-dom";

export const EmployeeItem = ({ employee, setEmployees }) => {
  const { id, name, last, email, phone } = employee;
  const navigate = useNavigate();

  const deleteEmployee = () => {
    removeEmployee(id);
    setEmployees(getListEmployees());
  };

  return (
    <tr className="table-primasry">
      <th>{name}</th>
      <td>{last}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <div className="d-flex gap-3">
          <span
            type="button"
            className="badge bg-success"
            onClick={() => navigate(`/edit-contact/${id}`)}
          >
            Edit
          </span>
          <span
            type="button"
            className="badge bg-danger"
            onClick={() => deleteEmployee()}
          >
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
};
