// src/components/Expenses.jsx
import React, { useState } from 'react';
import { Card, Button, Modal, TextInput, NumberInput, Group, Select } from '@mantine/core';

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newExpense, setNewExpense] = useState({
    date: '',
    category: '',
    amount: '',
    description: '',
  });

  const categories = ['Food', 'Transport', 'Bills', 'Shopping', 'Entertainment'];

  const handleAddExpense = () => {
    setExpenses([...expenses, newExpense]);
    setNewExpense({ date: '', category: '', amount: '', description: '' });
    setModalOpen(false);
  };
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Expenses</h1>
        <Button onClick={() => setModalOpen(true)} className="bg-blue-500 hover:bg-blue-600">
          Add Expense
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card shadow="sm" padding="lg" className="bg-gray-100">
          <h2 className="text-xl font-semibold">Total Expenses</h2>
          <p className="text-2xl font-bold text-blue-600">
            ${expenses.reduce((total, exp) => total + Number(exp.amount || 0), 0)}
          </p>
        </Card>
        <Card shadow="sm" padding="lg" className="bg-gray-100">
          <h2 className="text-xl font-semibold">Transactions</h2>
          <p className="text-2xl font-bold text-green-600">{expenses.length}</p>
        </Card>
        <Card shadow="sm" padding="lg" className="bg-gray-100">
          <h2 className="text-xl font-semibold">Highest Category</h2>
          <p className="text-lg font-bold">
            {expenses.length > 0 ? expenses[0].category : 'N/A'}
          </p>
        </Card>
      </div>

      {/* Expense Table */}
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2">{expense.date}</td>
                <td className="px-4 py-2">{expense.category}</td>
                <td className="px-4 py-2">${expense.amount}</td>
                <td className="px-4 py-2">{expense.description}</td>
                <td className="px-4 py-2">
                  <Button color="red" size="xs" onClick={() => {
                    setExpenses(expenses.filter((_, i) => i !== index));
                  }}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {expenses.length === 0 && (
          <p className="text-gray-500 text-center py-4">No expenses added yet.</p>
        )}
      </div>

      {/* Add Expense Modal */}
      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add Expense"
      >
        <form onSubmit={(e) => { e.preventDefault(); handleAddExpense(); }}>
          <TextInput
            label="Date"
            placeholder="YYYY-MM-DD"
            value={newExpense.date}
            onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
            required
          />
          <Select
            label="Category"
            placeholder="Select category"
            data={categories}
            value={newExpense.category}
            onChange={(value) => setNewExpense({ ...newExpense, category: value })}
            required
          />
          <NumberInput
            label="Amount"
            placeholder="Enter amount"
            value={newExpense.amount}
            onChange={(value) => setNewExpense({ ...newExpense, amount: value })}
            required
          />
          <TextInput
            label="Description"
            placeholder="Enter description"
            value={newExpense.description}
            onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
          />
          <Group position="right" mt="md">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Add Expense
            </Button>
          </Group>
        </form>
      </Modal>
    </div>
  );
}

export default Expenses;
