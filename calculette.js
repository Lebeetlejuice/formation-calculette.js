const { error } = require("console")


class Calculette {
    constructor() {
      this.inner_value = 0
    }
  
    // change inner value
    set(value) {
      this.inner_value = value
      return this
    }
  
    reset() {
      this.inner_value = 0
      return this
    }
  
    // return inner value
    value() {
      return this.inner_value
    }
  
    add(value) {
      this.inner_value += value
      return this
    }
  
    multiply(value) {
      this.inner_value *= value
      return this
    }
    substract(value) {
        this.inner_value -= value
        return this
    }
    divide(value) {
        if (value != 0){
            this.inner_value /= value
            return this
        } else {
            throw new Error('0 ne divise pas')
        }
    }
  }
  module.exports = Calculette;