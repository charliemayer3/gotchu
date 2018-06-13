const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('../passport')

// this route is just used to get the user basic info

router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { password, first_name, middle_name, last_name, email, country, city, phone_number, postal_code } = req.body
	console.log("ROUROIUROIROIUROIURUORIU" + req.body)
	// ADD VALIDATION
	User.findOne({ 'email': email }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			'local.password': password,
			'first_name': first_name,
			'middle_name': middle_name,
			'last_name': last_name,
			'email': email,
			'country': country,
			'city': city,
			'phone_number': phone_number,
			'postal_code': postal_code
		})
		console.log(newUser);
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

module.exports = router
