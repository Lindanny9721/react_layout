import EmployeeList from "./EmployeeList";
const HomePage = () => {
    return (
        <div class = "home-page">
            <h1>Employee Directory</h1>
            <input type = "Text" style={{ width: "90%" }}/>
            <EmployeeList/>
        </div>
    );
};
export default HomePage