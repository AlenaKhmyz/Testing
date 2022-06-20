const mapArrToString = require('./mapArrToString')

describe('mapArrToString', () => {
  test('Корректное значение', () => { 
    expect (mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']) //этот метод сравнивает содержимое
  }) 

  test('Мешанина', () => { 
    expect (mapArrToString([1, 2, 3, null, undefined, 'ashas'])).toEqual(['1', '2', '3']) 
  }) 

  test('Пустой массив', () => { 
    expect (mapArrToString([])).toEqual([]) 
  }) 

   test('Отрицание', () => { 
    expect (mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]) 
  }) 
})