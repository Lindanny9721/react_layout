const EmployeeInfoItem = ({ contact, detail }) => {
    return (
      <div className="employee-info-item">
        <h3>{contact}</h3>
        <p>{detail}</p>
      </div>
    );
  };
  
  export default EmployeeInfoItem