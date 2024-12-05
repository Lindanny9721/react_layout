import EmployeeListItem from './EmployeeListItem';

const EmployeeList = () => {
    const employeeList = [
        { name: "James King", role: "President and Ceo"},
        { name: "Julie Taylor", role: "VP of Marketing" },
        { name: "Eugene Lee", role: "CFO"},
        { name: "John Williams", role: "VP of Engineering"},
        { name: "Ray Moore", role: "VP of Sales"},
        { name: "Paul Jones", role: "VP of Sales"}
    ];
    
    return (
        <div className="employee-list">
            {employeeList.map((employee, index) => (
                <EmployeeListItem
                key={index}
                name={employee.name}
                role={employee.role}
                />
            ))}
        </div>
    );
};

export default EmployeeList;