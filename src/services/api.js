// API service to communicate with the backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Fetch all space tech items
export const fetchSpaceTechItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/spacetech`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching space tech items:', error);
    throw error;
  }
};

// Fetch a specific space tech item by ID
export const fetchSpaceTechItem = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/spacetech/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching space tech item:', error);
    throw error;
  }
};

// Create a new space tech item
export const createSpaceTechItem = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/spacetech`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating space tech item:', error);
    throw error;
  }
};

// Update a space tech item
export const updateSpaceTechItem = async (id, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/spacetech/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating space tech item:', error);
    throw error;
  }
};

// Delete a space tech item
export const deleteSpaceTechItem = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/spacetech/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting space tech item:', error);
    throw error;
  }
};