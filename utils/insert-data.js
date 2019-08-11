(async () => {
  require('dotenv').config()
  const sleep = require('then-sleep')
  const mongo = require('../lib/mongo')
  const arg = process.argv[2]
  const file = `../data/${arg}.json`
  const data = require(file)
  console.log(`Got ${data.length} ${arg}`)
  const db = await mongo()
  const identities = db.collection(process.env.MONGODB_COLLECTION)
  while (data.length > 0) {
    const chunk = data.splice(0, 50)
    console.log(`Ready to insert ${chunk.length} ${arg}`)
    const result = await identities.insertMany(chunk)
    console.log(JSON.stringify(result, null, 2))
    console.log(`${data.length} ${arg} remains`)
    await sleep(1000)
  }
  console.log('finished')
  process.exit(0)
})()
