describe("Сумма", function() {
   it("Значение равно true", function() {
      assert.typeOf(sum(2,2), "boolean")
   })
})

describe("Значение num", function() {
   it("num равна 5", function() {
      assert.equal(num, 5)
   })
})

describe("Функция each", function() {
   it("Тип - массив", function() {
      assert.typeOf(each(array, myFunc), 'array')
   })
   
   it("Возвращает [8,7,6,5,4]", function() {
      assert.deepEqual(each(array, myFunc), [ 8, 7, 6, 5, 4 ])
   })
   
   it("Состоит из 5 элементов", function() {
      assert.equal(each(array, myFunc).length, 5)
   })
})
