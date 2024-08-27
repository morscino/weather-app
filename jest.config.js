module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    ".*\\.(vue)$": "@vue/vue3-jest",
    ".*\\.js$":"babel-jest",
   "node_modules/vuetify/.+\\.(j|t)sx?$": "@vue/vue3-jest"
  },
  transformIgnorePatterns: ['/node_modules/(?!(vuetify)/)'],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  testEnvironmentOptions: {
    "customExportConditions": ["node", "node-addons"]
  },
   testEnvironment: 'jsdom'
}
