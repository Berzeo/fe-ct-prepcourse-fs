const retornarPerimetro = require('../ejercicios/30');

test('Debe retornar el área correcta del triángulo', function () {
  expect(retornarPerimetro(10,10,10,10)).toBe(40);
  expect(retornarPerimetro(20,20,20,20)).toBe(80);
  expect(retornarPerimetro(0,0,0,0)).toBe(0);
});
