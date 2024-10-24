export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key, isParse = false) => {
  try {
    const storedValue = localStorage.getItem(key) ?? null;
    return isParse ? JSON.parse(storedValue) : storedValue;
  } catch (error) {
    console.error("Error retrieving data from localStorage:", error);
    return null;
  }
};

export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
