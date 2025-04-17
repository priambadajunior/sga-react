import './MainFrame.css'; // Assuming you save the CSS in MainFrame.css
import SideBar from './SideBar'; // Importing SideBar
import EmployeeList from './EmployeeList'; // Importing EmployeeList

function MainFrame() {
  return (
    <div className="MainFrame">
        <SideBar />
        <EmployeeList />
    </div>
  );
}

export default MainFrame;