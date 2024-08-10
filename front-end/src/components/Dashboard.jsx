import { useContext } from "react";
import { UserContext } from "./UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user.user_type === 'manager' && (
        <div>
          {/* Manager-specific components */}
          <div>Manager Overview</div>
          <div>Manager Tasks</div>
          <div>Manager Reports</div>
        </div>
      )}
      
      {user.user_type === 'cashier' && (
        <div>
          {/* Cashier-specific components */}
          <div>Cashier Transactions</div>
          <div>Cashier Sales</div>
        </div>
      )}
      
      {user.user_type === 'staff' && (
        <div>
          {/* Staff-specific components */}
          <div>Staff Schedule</div>
          <div>Staff Notifications</div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
