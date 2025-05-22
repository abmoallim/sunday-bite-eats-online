
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { Navigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"; // Corrected path
import AddMenuItemForm from '../components/admin/AddMenuItemForm.jsx';
import AdminMenuItemList from '../components/admin/AdminMenuItemList.jsx';

// Mock data for initial menu items, can be fetched from context or API later
const initialMockMenuItems = [
  { id: 1, name: 'Spicy Orange Chicken', description: 'Crispy chicken tossed in a tangy and spicy orange sauce, served with steamed rice.', price: 15.99, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
  { id: 2, name: 'Sunset Pasta Delight', description: 'Creamy tomato pasta with sun-dried tomatoes, spinach, and grilled halloumi.', price: 18.50, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
  { id: 3, name: 'Volcano Veggie Burger', description: 'A fiery veggie patty with jalapenos, spicy mayo, and a toasted brioche bun.', price: 14.00, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
];


const DashboardPage = () => {
  const { user, role } = useAuth();
  const { toast } = useToast();
  const [menuItems, setMenuItems] = useState(initialMockMenuItems);

  useEffect(() => {
    // In a real app, you might fetch menu items if the role is admin
    // For now, we use initialMockMenuItems
    // If you want to persist changes, you might use localStorage or a context
  }, [role]);

  if (!user) {
    // Redirect to home or login if not authenticated
    return <Navigate to="/" replace />;
  }
  
  const addMenuItem = (newItem) => {
    setMenuItems(prevItems => [...prevItems, { ...newItem, id: Date.now() }]); // Simple ID generation
    toast({ title: "Menu Item Added", description: `${newItem.name} has been successfully added to the menu.` });
  };

  const deleteMenuItem = (itemId) => {
    const itemToDelete = menuItems.find(item => item.id === itemId);
    setMenuItems(prevItems => prevItems.filter(item => item.id !== itemId));
    toast({ title: "Menu Item Deleted", description: `${itemToDelete?.name || 'The item'} has been removed from the menu.`, variant: "destructive" });
  };


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
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h2>
            <p className="text-muted-foreground">Welcome, {user.name || user.email}! Manage your restaurant effectively.</p>
          </div>
          
          <section id="manage-menu">
            <h3 className="text-2xl font-semibold text-primary mb-4 border-b pb-2">Manage Menu Items</h3>
            <AddMenuItemForm onAddItem={addMenuItem} />
            <AdminMenuItemList menuItems={menuItems} onDeleteItem={deleteMenuItem} />
          </section>
          
          <section id="reports">
            <h3 className="text-2xl font-semibold text-primary mb-4 border-b pb-2">Reports (Demo)</h3>
            <div className="bg-card p-6 rounded-lg shadow border border-border">
              <p className="text-muted-foreground">
                Sales reports, customer analytics, popular items, and other key metrics will be displayed here. 
                This section can feature charts and data visualizations for insights into restaurant performance.
              </p>
              {/* Placeholder for a chart or more detailed report elements */}
            </div>
          </section>
        </div>
      );
      break;
    default:
      dashboardContent = <p>Invalid role or dashboard not configured.</p>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="bg-background p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
        {dashboardContent}
      </div>
    </div>
  );
};

export default DashboardPage;

