'use strict';
const app = require('APP'), {env} = app;
const sendgrid = require('sendgrid');

const sender = sendgrid(env.SENDGRID_API_KEY);

module.exports = {
	sendMail: ({to, subject, html}) => {
		console.log({to, subject, html});
		const from = new sendgrid.mail.Email('VYNL <waterfoul+vynl@gmail.com>');
		to = new sendgrid.mail.Email(to);
		html = new sendgrid.mail.Content('text/html', html);
		const mail = new sendgrid.mail.Mail(from, subject, to, html);

		var request = sender.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: mail.toJSON()
		});

		return new Promise((resolve, reject) => {
			sender.API(request, function(error, response) {
				console.log(response);
				if(error) reject(error);
				else resolve(response);
			});
		});
	}
};
