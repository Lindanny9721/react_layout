import EmployeeInfoItem from "./EmployeeInfoItem";
const EmployeeInfo = () => {
    const employeeInfo = [
        { contact: "Call Office", detail: "781-000-0002"},
        { contact: "Call Mobile", detail: "617-000-0002"},
        { contact: "SMS", detail: "617-000-0002"},
        { contact: "Email", detail: "jtaylor@fakeremail.com"},
    ];

    return (
        <div className="employee-info">
            {employeeInfo.map((employee, index) => (
                <EmployeeInfoItem
                key={index}
                contact={employee.contact}
                detail={employee.detail}
                />
            ))}
        </div>
    );
};

export default EmployeeInfo;