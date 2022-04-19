import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const UrlShortener = () => {
	const base_url = 'http://localhost:4500';
	const [ l_send, setL_send ] = useState('');
	const [ l_receive, setL_receive ] = useState('');

	const submit_ = async (e) => {
		e.preventDefault();
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			url_create: l_send
		});

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		const pre = await fetch(`${base_url}/createurl`, requestOptions);
		const post = await pre.json();
		setL_receive(post.link_new);
	};

	return (
		<div className="App-header">
			<code>Masket Input</code>
			<Form className="rendered-form" onSubmit={submit_}>
				<Form.Group className="formbuilder-text form-group field-Nombres">
					<Form.Label htmlFor="link_send" className="formbuilder-text-label">
						Link for Shortener<span className="formbuilder-required">* </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setL_send(e.target.value)}
						value={l_send}
						type="text"
						placeholder="Link for Shortener"
						className="form-control"
						name="link_send"
						access="false"
						id="link_send"
						required="required"
						aria-required="true"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-text form-group field-link">
					<a href={l_receive}>{l_receive}</a>
				</Form.Group>
				<Form.Group className="formbuilder-button form-group field-submit">
					<button type="submit" className="btn-success btn" access="false" id="submit">
						Submit
					</button>
				</Form.Group>
			</Form>
		</div>
	);
};

export default UrlShortener;
