import React, { useState, useRef } from 'react';
import styles from './Input.module.css';

export default function Input({ title, placeholder, isPassword = false, onChange, value, isRequired = false, inputType = 'text' }) {
  const [passwordValue, setPasswordValue] = useState(''); // Contraseña real
  const [displayValue, setDisplayValue] = useState(''); // Representación visual
  const timeoutRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const lastChar = value.slice(-1);

    // Limpia cualquier timeout previo
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isPassword) {
      // Si el usuario está borrando caracteres
      if (value.length < passwordValue.length) {
        // Actualiza tanto el valor real como el visual
        setPasswordValue(value);
        setDisplayValue('*'.repeat(value.length));
        return;
      }

      // Si el usuario está escribiendo
      setPasswordValue(value); // Actualiza el valor real de la contraseña
      setDisplayValue(
        '*'.repeat(value.length - 1) + lastChar // Muestra todo oculto excepto el último carácter
      );

      // Oculta la última letra después de 1 segundo
      timeoutRef.current = setTimeout(() => {
        setDisplayValue('*'.repeat(value.length));
      }, 1000);
    } else {
      setPasswordValue(value); // Para inputs normales, el valor real es lo que el usuario ve
      setDisplayValue(value); // Muestra todo
    }
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.title}>{title}</label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={isRequired}
          
        />
      </div>
    </div>
  );
}
