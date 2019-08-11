(async () => {
  const csv = require('csvtojson')
  const { writeFile } = require('fs').promises
  const fixData = require('../lib/fix-data')
  const json = await csv().fromFile('data/students.csv')
  const extras = {
    isStudent: true,
    isEmployee: false
  }
  console.log(`Got ${json.length} students`)
  const data = json.map(fixData).map(item => Object.assign({}, item, extras))
  await writeFile('data/students.json', JSON.stringify(data, null, 2), 'utf-8')
  console.log('Finished')
})()
