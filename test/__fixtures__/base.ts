import {extendConfig,defineConfig,withSortPlugin} from "../../src/utils"
import {type Options} from 'prettier'
import type{Config} from 'prettier'


const obj=/** @type {    const} */({
  name:"test"
})

const i = 0

const message =
  i % 3 === 0 && i % 5 === 0
    ? "fizzbuzz"
  : i % 3 === 0
    ? "fizz"
  : i % 5 === 0
    ? "buzz"
    : i % 6 === 0 ? "foo": String(i);


const arr = [1,2,3,]


const arr2 = [
  1,2,3]