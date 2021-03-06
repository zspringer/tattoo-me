let Tattoos = require('../models/tattoo')
let User = require('../models/user')
let mongoose = require('mongoose')
let Mailer = require('../config/nodemailer')

module.exports = {
	favorites: {
		path: '/favorites',
		reqType: 'get',
		method(req, res, next) {
			let action = 'Find User favorites'
			User.findById(req.session.uid)
				.then(user => {
					Tattoos.find({ _id: { $in: user.favorites } }).then(tattoos => {
						res.send(handleResponse(action, tattoos))
					})
				}).catch(error => {
					return next(handleResponse(action, null, error))
				})
		}
	},
	getUserDesigns: {
		path: '/my-designs',
		reqType: 'get',
		method(req, res, next) {
			let action = 'Get designs/tattoos that the user (artist) has uploaded'
			// query the tattoos collection to find all tattoos with a creatorId that matches the uid on the session
			Tattoos.find({ creatorId: req.session.uid }).sort('-created').then(tattoos => {
				res.send(handleResponse(action, tattoos))
			})
				.catch(error => {
					return next(handleResponse(action, null, error))
				})
		}
	},
	getUserPurchases: {
		path: '/purchased',
		reqType: 'get',
		method(req, res, next) {
			let action = 'Get designs/tattoos that the user has purchased'
			// find the user object by the id on the request session
			User.findById(req.session.uid)
				.then(user => {  // then look in the purchased array on that user
					// for each id in the array, look up the tattoo
					Tattoos.find({ _id: { $in: user.purchased } })
						.then(tattoos => {
							res.send(handleResponse(action, tattoos))
						})
						.catch(error => {
							return next(handleResponse(action, null, error))
						})
					// send the purchasedTats array to the user
				})
				.catch(error => {
					console.log("something went wrong")
					return next(handleResponse(action, null, error))
				})
		}
	},
	getHdUrl: {
		//This route is to get the HdUrl for a purchased image 
		path: '/tattoos/:tattooId/fullres',
		reqType: 'get',
		method(req, res, next) {
			let action = "get the HdUrl for a purchased image"
			let tattooId = req.params.tattooId
			// find the user
			User.findById(req.session.uid)
				.then(user => {
					let purchased = false
					user.purchased.forEach(id => {
						if (!purchased) {
							if (id.toString() == tattooId) {
								purchased = true
								Tattoos.findById(tattooId).select('hdUrl').exec()
									.then(tattoo => {
										// send hdUrl to user in an email.
										var account = {
											email: user.email,
											hdUrl: tattoo.hdUrl
										}
										Mailer.createMailer(account)
										// console.log("now logging tattoo:")
										// console.log(tattoo.hdUrl)
										res.send(handleResponse(action, tattoo))
									})
									.catch(error => {
										return next(handleResponse(action, null, error))
									})
							}
						}
					})
					if (!purchased) {
						res.send(handleResponse(action, { message: "User has not purchased this item" }))
					}
				})
				.catch(error => {
					return next(handleResponse(action, null, error))
				})
		}
	},
	favorite: {
		path: '/favorites/:tattooId',
		reqType: 'put',
		method(req, res, next) {
			let action = 'Add/remove favorite to user'
			User.findById(req.session.uid)
				.then(user => {
					let index = user.favorites.indexOf(req.params.tattooId);
					if (index == -1) {
						user.favorites.push(req.params.tattooId)
					} else {
						user.favorites.splice(index, 1)
					}
					user.save().then(() => {
						res.send(handleResponse(action, user.favorites))
					})
				})
				.catch(error => {
					return next(handleResponse(action, null, error))
				})
		}
	},
	artistProfile: {
		path: '/artist/:artistId',
		reqType: 'get',
		method(req, res, next) {
			let action = 'View artist public profile'
			User.findOne({ _id: req.params.artistId, accountType: 'artist' }).select('name')
				.then(artist => {
					Tattoos.find({ creatorId: artist._id }).sort('-created')
						.then(tattoos => {
							// artist.tattoos = tattoos;
							res.send(handleResponse(action, { artist, tattoos }))
						})
						.catch(error => {
							return next(handleResponse(action, null, error))
						})
				})
				.catch(error => {
					return next(handleResponse(action, null, error))
				})
		}
	}
}

function handleResponse(action, data, error) {
	var response = {
		action: action,
		data: data
	}
	if (error) {
		response.error = error
	}
	return response
}