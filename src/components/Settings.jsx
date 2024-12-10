    // src/components/Settings.jsx
import React, { useState } from 'react';
import {
  Card,
  Button,
  TextInput,
  PasswordInput,
  Switch,
  NumberInput,
  Select,
} from '@mantine/core';

function Settings() {
  const [theme, setTheme] = useState('light'); // Theme state

  return (
    <div className="p-6">
      {/* Page Header */}
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Profile Settings */}
      <Card shadow="sm" padding="lg" className="mb-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <TextInput label="Name" placeholder="Your name" className="mb-4" />
        <TextInput label="Email" placeholder="Your email" className="mb-4" />
        <PasswordInput label="Password" placeholder="New password" className="mb-4" />
        <PasswordInput label="Confirm Password" placeholder="Confirm new password" className="mb-4" />
        <Button className="bg-blue-500 hover:bg-blue-600">Save Changes</Button>
      </Card>

      {/* Notification Settings */}
      <Card shadow="sm" padding="lg" className="mb-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
        <Switch label="Receive email notifications" className="mb-4" />
        <Switch label="Receive SMS notifications" className="mb-4" />
        <Switch label="Enable push notifications" className="mb-4" />
      </Card>

      {/* Budget Preferences */}
      <Card shadow="sm" padding="lg" className="mb-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Budget Preferences</h2>
        <Select
          label="Default Currency"
          placeholder="Select currency"
          data={['USD', 'EUR', 'UGX', 'GBP']}
          className="mb-4"
        />
        <NumberInput
          label="Monthly Budget"
          placeholder="Enter your monthly budget"
          className="mb-4"
        />
        <NumberInput
          label="Spending Limit"
          placeholder="Set a spending limit"
          className="mb-4"
        />
        <Button className="bg-blue-500 hover:bg-blue-600">Save Preferences</Button>
      </Card>

      {/* System Settings */}
      <Card shadow="sm" padding="lg" className="mb-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">System Settings</h2>
        <Switch
          label="Enable Dark Mode"
          checked={theme === 'dark'}
          onChange={(event) => setTheme(event.currentTarget.checked ? 'dark' : 'light')}
          className="mb-4"
        />
        <Button className="bg-red-500 hover:bg-red-600">Reset All Data</Button>
      </Card>
    </div>
  );
}

export default Settings;
