const axios = require('axios')
const DevModel = require('./../models/Dev')

module.exports = {
  async store(req, res) {
    const { username } = req.body

    const response = await axios.get(`https://api.github.com/users/${username}`)

    const { name, bio, avatar_url: avatar } = response.data

    const userExists = await DevModel.findOne({ user: username })

    if (userExists) return res.json(userExists)

    await DevModel.create({
      name,
      user: username,
      bio,
      avatar
    })
      .then(devCreated => res.json(devCreated))
      .catch(err => res.json(err))
  }
}
