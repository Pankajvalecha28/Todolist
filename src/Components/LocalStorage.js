// LocalStorage.js

const LOCAL_STORAGE_KEY = 'todoList';

export const saveToLocalStorage = (data) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const getFromLocalStorage = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
