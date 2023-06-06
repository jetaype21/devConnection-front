import { tiempoKey } from "./keysSession";

export const useLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key);

  if (!storedValue) {
    return false;
  } else {
    return JSON.parse(storedValue);
  }
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value)); // Convert object to string

  const tiempoActual = new Date().getTime();
  const tiempoLimite = tiempoActual + 5 * 60 * 1000; // 1 hora = 60 minutos * 60 segundos * 1000 milisegundos
  localStorage.setItem(tiempoKey, tiempoLimite);
};

export const verifyTiempo = () => {
  const tiempoActual = new Date().getTime();
  const tiempoLimiteGuardado = localStorage.getItem(tiempoKey);

  if (!tiempoLimiteGuardado) {
    return false;
  }

  if (tiempoActual >= tiempoLimiteGuardado) {
    localStorage.clear();
    return true;
  }

  return false;
};
