
import React from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2 } from 'lucide-react';

const AdminMenuItemList = ({ menuItems, onDeleteItem }) => {
  if (!menuItems || menuItems.length === 0) {
    return <p className="text-muted-foreground">No menu items yet. Add some above!</p>;
  }

  return (
    <div className="bg-card p-0 md:p-2 rounded-lg shadow border border-border overflow-x-auto">
      <h4 className="text-lg font-medium text-foreground mb-3 p-4 md:p-2">Current Menu Items</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] hidden md:table-cell">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menuItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="hidden md:table-cell">
                <img 
                  src={item.image || "https://via.placeholder.com/100x67.png?text=No+Image"} 
                  alt={item.name} 
                  className="h-12 w-20 object-cover rounded" 
                />
              </TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell className="text-right">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => onDeleteItem(item.id)}
                  className="text-destructive hover:text-destructive/80"
                  aria-label={`Delete ${item.name}`}
                >
                  <Trash2 size={18} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminMenuItemList;

