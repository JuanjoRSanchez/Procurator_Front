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
    setWithExpiry(key, JSON.stringify(value), 3600000);
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










export function setWithExpiry(key, value, ttl){
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl
  }

  localStorage.setItem(key, JSON.stringify(item))
}

export function getWithExpiry(key){
  const itemStr = localStorage.getItem(key)

  if(!itemStr){
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  if(now.getTime() > item.expiry){
    localStorage.removeItem(key)
    return null
  }
  return item.value
}