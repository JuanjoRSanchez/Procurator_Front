import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const getActualIdCollective = () => {
  const idCollective = JSON.parse(localStorage.getItem('Collective')).id
  return idCollective 
}

export const getActualIdGame = () => {
  const idCollective = JSON.parse(localStorage.getItem('game')).id
  return idCollective 
}