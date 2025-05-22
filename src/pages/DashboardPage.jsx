
import React from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

const DashboardPage = () => {
  const { user, role } = useAuth();

  if (!user) {
    // Redirect to home or login if not authenticated
    return <Navigate to="/" replace />;
  }

  // Mock data/components based on role
  let dashboardContent;
  switch (role) {
    case 'customer':
      dashboardContent = (
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Customer Dashboard</h2>
          <p>Welcome, {user.name || user.email}!</p>
          <p>Order summary, status, tracking, and favorites will appear here.</p>
        </div>
      );
      break;
    case 'staff':
      dashboardContent = (
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Staff Dashboard</h2>
          <p>Manage customer orders, reservations, and table availability here.</p>
        </div>
      );
      break;
    case 'admin':
      dashboardContent = (
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Admin Dashboard</h2>
          <p>Access all reports, manage menu, tables, staff, and system controls here.</p>
        </div>
      );
      break;
    default:
      dashboardContent = <p>Invalid role or dashboard not configured.</p>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Dashboard</h1>
      <div className="bg-card p-8 rounded-lg shadow-md">
        {dashboardContent}
      </div>
    </div>
  );
};

export default DashboardPage;
