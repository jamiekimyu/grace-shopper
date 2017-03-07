const mustBeLoggedIn = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send('You must be logged in');
	}
	next();
};

const selfOnly = action => (req, res, next) => {
	if (req.params.id !== req.user.id) {
		return res.status(403).send(`You can only ${action} yourself.`);
	}
	next();
};

const reqAdmin = message => (req, res, next) => {
	if (!req.user || !req.user.isAdmin) {
		return res.status(403).send(message);
	}
	next();
};

const reqAdminOrSelf = message => (req, res, next) => {
	console.log(req.user.isAdmin, req.user.id, req.params, !req.user, !req.user.isAdmin, +req.params.id !== req.user.id);
	if (!req.user || (!req.user.isAdmin && +req.params.id !== req.user.id)) {
		return res.status(403).send(message);
	}
	next();
};

// Feel free to add more filters here (suggested: something that keeps out non-admins)

module.exports = {mustBeLoggedIn, selfOnly, reqAdmin, reqAdminOrSelf};
