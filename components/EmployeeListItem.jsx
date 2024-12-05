const EmployeeListItem = ({ name, role }) => {
    return (
        <div className="employee-list-item">
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
};

export default EmployeeListItem