/**
 * Customer component to use ios UserDeafults
 * @see https://facebook.github.io/react-native/docs/native-modules-ios.html#exporting-swift
 */

'use strict'

import { RNUserDefaults } from 'NativeModules'

//TODO: Create a package for all situation

const userDefaults = {
  set: (key, value) => {
    return new Promise((resolve, reject) => {
      const jsonValue = JSON.stringify(value)
      RNUserDefaults.setObject(key, jsonValue, (data) => {
        resolve(data)
      })
    })
  },

  get: (key) => {
    return new Promise((resolve, reject) => {
      RNUserDefaults.getString(key, (data) => {
        if (data.length > 0) return resolve(JSON.parse(data))
        resolve(false)
      })
    })
  },

  remove: (key) => {

  },

  removeAll: () => {

  }
}

export default userDefaults