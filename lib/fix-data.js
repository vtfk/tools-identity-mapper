function fixOrigin (origin) {
  origin = origin.toLowerCase()
  origin = origin.replace(/[^A-Za-z\s!?]/g, '')
  return origin
}

function generateOldSam (upnOld) {
  return upnOld.split('@')[0]
}

module.exports = data => {
  data.origin = fixOrigin(data.origin)
  data.samOld = generateOldSam(data.upnOld)
  return data
}
