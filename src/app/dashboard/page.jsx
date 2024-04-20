import React from "react";
import SidebarDashboard from "./Sidebar";
import PainelPacientes from "./PainelPacientes";

function Dashboard() {
  return (
    <div className="flex flex-row min-h-screen ">
      <SidebarDashboard />
      <PainelPacientes />
    </div>
  );
}

export default Dashboard;
