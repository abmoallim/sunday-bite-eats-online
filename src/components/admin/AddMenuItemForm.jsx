
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Using Textarea for description

const AddMenuItemForm = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      // Basic validation, can be enhanced with toasts
      alert("Name, description, and price are required.");
      return;
    }
    onAddItem({ name, description, price: parseFloat(price), image });
    // Reset form
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg shadow mb-6 border border-border">
      <h4 className="text-lg font-medium text-foreground mb-3">Add New Menu Item</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="itemName" className="text-sm font-medium">Name</Label>
          <Input 
            id="itemName" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="e.g., Classic Burger"
            className="mt-1"
            required
          />
        </div>
        <div>
          <Label htmlFor="itemPrice" className="text-sm font-medium">Price ($)</Label>
          <Input 
            id="itemPrice" 
            type="number" 
            step="0.01" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            placeholder="e.g., 12.99"
            className="mt-1"
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="itemDescription" className="text-sm font-medium">Description</Label>
        <Textarea 
          id="itemDescription" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Detailed description of the item"
          className="mt-1"
          rows={3}
          required
        />
      </div>
      <div>
        <Label htmlFor="itemImage" className="text-sm font-medium">Image URL (Optional)</Label>
        <Input 
          id="itemImage" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          placeholder="https://example.com/image.jpg"
          className="mt-1"
        />
      </div>
      <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90">
        Add Item
      </Button>
    </form>
  );
};

export default AddMenuItemForm;

