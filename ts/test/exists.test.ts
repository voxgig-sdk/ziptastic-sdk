
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ZiptasticSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ZiptasticSDK.test()
    equal(testsdk instanceof ZiptasticSDK, true,
      'ZiptasticSDK.test() must return a client synchronously')
  })

})
