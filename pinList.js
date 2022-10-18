const axios = require('axios')
require('dotenv').config()

const testAuthentication = async () => {
  try {
    const res = await axios.get('https://api.pinata.cloud/data/pinList?includesCount=false&status=pinned', {
      headers: {
        'Authorization': `Bearer ${process.env.PINATA_JWT}`
      }
    })
    const pins = res.data
    console.log(pins.rows)
  } catch(error) {
    console.log(error)
  }
}

testAuthentication()
