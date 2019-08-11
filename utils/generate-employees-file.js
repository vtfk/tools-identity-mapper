(async () => {
  const csv = require('csvtojson')
  const { writeFile } = require('fs').promises
  const fixData = require('../lib/fix-data')
  const json = await csv().fromFile('data/employees.csv')
  const extras = {
    isStudent: false,
    isEmployee: true
  }
  console.log(`Got ${json.length} employees`)
  const data = json.map(fixData).map(item => Object.assign({}, item, extras))
  await writeFile('data/employees.json', JSON.stringify(data, null, 2), 'utf-8')
  console.log('Finished')
})()
