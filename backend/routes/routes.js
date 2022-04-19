const routes = require('express').Router();
const crypto = require('crypto-js');
const url_shortener = [];
// { url: '', key: '' }
const base_url = 'http://localhost:4500';

function generate_encript_(url) {
	return crypto.AES.encrypt(url, '').toString().substr(0, 5);
}

routes.get('/', (req, res) => {
	res.status(200).send(true);
});

routes.get('/allurls', (req, res) => {
	res.status(200).send(url_shortener);
});

routes.post('/createurl', (req, res) => {
	const { url_create } = req.body;
	const pre = url_shortener.find((e) => e.url === url_create);
	// const de = crypto.AES.decrypt(ciphertext, '0').toString(crypto.enc.Utf8);

	if (pre === undefined) {
		const pre_key = generate_encript_(url_create);
		url_shortener.push({ url: url_create, key: pre_key });
		res.status(200).send({ link_new: `${base_url}/redirect/${pre_key}` });
	} else {
		res.status(200).send({ link_new: `${base_url}/redirect/${pre.key}` });
	}
});

routes.get('/redirect/:hash', (req, res) => {
	const { hash } = req.params;
	const pre = url_shortener.find((e) => e.key === hash);
	if (pre === undefined) {
		res.status(400).send('invalid hash');
	} else {
		res.status(200).redirect(pre.url);
	}
});

module.exports = routes;
