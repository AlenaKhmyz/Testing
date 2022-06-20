const validateValue = require('./validateValue')
// первым аргументом передаем названия теста, а вторым коллбэк, в котором будем делать какие-то проверки
test('Валидация значения', () => { 
  // в expect передаем результат вычислений,
  // после того как он отработает мы можем вызвать ряд методов,
  // с помощью которых можем результат проверить
  expect (validateValue(50)).toBe(true)
}) 

//если хотим описать несколько сценариев, то тогда все тесты оборачиваем в describe
//первым оргументом передаем название, вторым функцию коллбэк
describe(validateValue, () => {
  test('Корректное значение', () => { 
    expect (validateValue(50)).toBe(true)
  }) 

  test('Меньше корректного', () => { 
    expect (validateValue(-1)).toBe(false)
  }) 

  test('Больше корректного', () => { 
    expect (validateValue(101)).toBe(false)
  }) 

  test('Пограничное значение снизу', () => { 
    expect (validateValue(0)).toBe(true)
  }) 

  test('Пограничное значение сверху', () => { 
    expect (validateValue(100)).toBe(true)
  }) 
})