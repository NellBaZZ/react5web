import React, { useState } from 'react';

function AutoCompleteInput({ options: initialOptions }) {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(initialOptions);
  const [suggestedOptions, setSuggestedOptions] = useState(options);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Фильтруем список вариантов, чтобы оставить только те, которые начинаются с введенной строки
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestedOptions(filteredOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== '') {
      // Проверяем, есть ли введенное значение уже в списке вариантов
      const existingOptionIndex = options.findIndex(
        (option) => option.toLowerCase() === inputValue.toLowerCase()
      );

      if (existingOptionIndex === -1) {
        // Если введенного значения нет в списке, добавляем его
        const newOptions = [...options, inputValue];
        setOptions(newOptions);
      }
    }

    // Очищаем поле ввода после отправки
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите текст"
      />
      <button type="submit">Отправить</button>
      <ul>
        {suggestedOptions.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </form>
  );
}

export default AutoCompleteInput;