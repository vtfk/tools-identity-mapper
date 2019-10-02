(async () => {
  const csv = require('csvtojson')
  const { writeFile } = require('fs').promises
  const arg = process.argv[2]
  const file = `data/${arg}.csv`
  console.log(`Opening ${file}`)
  const json = await csv().fromFile(file)
  const mapped = json.reduce((accumulator, current) => {
    if (!Object.keys(accumulator).includes(current.fnr)) {
      accumulator[current.fnr] = []
    }
    accumulator[current.fnr].push(current)
    return accumulator
  }, {})
  const duplicates = Object.values(mapped).filter(item => item.length > 1)
  console.log(`Got ${duplicates.length} duplicates`)
  const fileName = `data/duplicates-${arg}.json`
  await writeFile(fileName, JSON.stringify(duplicates, null, 2), 'utf-8')
  console.log('Finished')
})()
