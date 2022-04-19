import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Parser } from 'json2csv';

const JsonToCsv = () => {
	const [ tjson, setTjson ] = useState('');
	const [ tcsv, setTcsv ] = useState('');

	const submit_ = (e) => {
		e.preventDefault();
		const pre = JSON.parse(tjson);
		try {
			const parser = new Parser();
			const csv = parser.parse(pre);
			setTcsv(csv);
		} catch (err) {
			alert(err);
			setTcsv('');
		}
		setTjson('');
	};

	const reset_ = (e) => {
		e.preventDefault();
		setTjson('');
		setTcsv('');
	};

	return (
		<div className="App-header">
			<code>Json t Cvs</code>
			<Form className="rendered-form" onSubmit={submit_}>
				<Form.Group className="formbuilder-textarea form-group field-json">
					<Form.Label htmlFor="json" className="formbuilder-textarea-label">
						Json<span className="formbuilder-required">* </span>
					</Form.Label>
					<textarea
						onChange={(e) => setTjson(e.target.value)}
						value={tjson}
						type="textarea"
						placeholder="json"
						className="form-control"
						name="json"
						access="false"
						id="json"
						required="required"
						aria-required="true"
						rows="10"
						cols="100"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-textarea form-group field-csv">
					<Form.Label htmlFor="csv" className="formbuilder-textarea-label">
						Csv<span> </span>
					</Form.Label>
					<textarea
						onChange={(e) => setTcsv(e.target.value)}
						value={tcsv}
						type="textarea"
						placeholder="csv"
						className="form-control"
						name="csv"
						access="false"
						id="csv"
						rows="10"
						cols="100"
						readOnly
					/>
				</Form.Group>
				<Form.Group className="formbuilder-button form-group field-submit">
					<button type="submit" className="btn-success btn" access="false" id="submit">
						Submit
					</button>
					<button
						type="reset"
						className="btn-default btn"
						name="reset"
						access="false"
						id="reset"
						onClick={reset_}
					>
						Reset
					</button>
				</Form.Group>
			</Form>
		</div>
	);
};

export default JsonToCsv;
