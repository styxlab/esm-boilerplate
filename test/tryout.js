import assert from 'assert'
import { banner } from 'esm-boilerplate'

assert.strict.match(banner(), /white/)

console.log(banner('white'))
