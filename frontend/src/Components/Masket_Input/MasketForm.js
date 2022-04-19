import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const MasketForm = () => {
	const [ nombres, setNombres ] = useState('');
	const [ primerapellido, setPrimerapellido ] = useState('');
	const [ fechanacimiento, setFechanacimiento ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ direccion, setDireccion ] = useState('');
	const [ telefono, setTelefono ] = useState('');
	const [ telefonocasa, setTelefonocasa ] = useState('');
	const [ identificacion, setIdentificacion ] = useState('');
	const [ pasaporte, setPasaporte ] = useState('');
	const [ tarjetacredito, setTarjetacredito ] = useState('');
	const [ mesanovencimiento, setMesanovencimiento ] = useState('');
	const [ cvc, setCvc ] = useState('');

	const submit_ = (e) => {
		e.preventDefault();
		window.localStorage.setItem(
			email,
			JSON.stringify({
				nombres,
				primerapellido,
				fechanacimiento,
				email,
				direccion,
				telefono,
				telefonocasa,
				identificacion,
				pasaporte,
				tarjetacredito,
				mesanovencimiento,
				cvc
			})
		);
		alert(`check your localstorage ${email}`);
		setNombres('');
		setPrimerapellido('');
		setFechanacimiento('');
		setEmail('');
		setDireccion('');
		setTelefono('');
		setTelefonocasa('');
		setIdentificacion('');
		setPasaporte('');
		setTarjetacredito('');
		setMesanovencimiento('');
		setCvc('');
	};

	return (
		<div className="App-header">
			<code>Masket Input</code>
			<Form className="rendered-form" onSubmit={submit_}>
				<Form.Group className="formbuilder-text form-group field-Nombres">
					<Form.Label htmlFor="Nombres" className="formbuilder-text-label">
						Nombres<span className="formbuilder-required">* </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setNombres(e.target.value)}
						value={nombres}
						type="text"
						placeholder="Nombres"
						className="form-control"
						name="Nombres"
						access="false"
						id="Nombres"
						required="required"
						aria-required="true"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-text form-group field-primerapellido">
					<Form.Label htmlFor="primerapellido" className="formbuilder-text-label">
						Primer Apellido<span className="formbuilder-required">* </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setPrimerapellido(e.target.value)}
						value={primerapellido}
						type="text"
						placeholder="primer apellido"
						className="form-control"
						name="primerapellido"
						access="false"
						id="primerapellido"
						required="required"
						aria-required="true"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-date form-group field-fechanacimiento">
					<Form.Label htmlFor="fechanacimiento" className="formbuilder-date-label">
						Fecha Nacimiento<span className="formbuilder-required">* </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setFechanacimiento(e.target.value)}
						value={fechanacimiento}
						type="date"
						className="form-control"
						name="fechanacimiento"
						access="false"
						id="fechanacimiento"
						required="required"
						aria-required="true"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-text form-group field-email">
					<Form.Label htmlFor="email" className="formbuilder-text-label">
						Email<span className="formbuilder-required">* </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
						placeholder="email"
						className="form-control"
						name="email"
						access="false"
						id="email"
						required="required"
						aria-required="true"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-text form-group field-direccion">
					<Form.Label htmlFor="direccion" className="formbuilder-text-label">
						Direccion<span className="formbuilder-required">* </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setDireccion(e.target.value)}
						value={direccion}
						type="text"
						placeholder="direccion"
						className="form-control"
						name="direccion"
						access="false"
						id="direccion"
						required="required"
						aria-required="true"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-text form-group field-telefono">
					<Form.Label htmlFor="telefono" className="formbuilder-text-label">
						Telefono<span className="formbuilder-required">* </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setTelefono(e.target.value)}
						value={telefono}
						type="tel"
						placeholder="+502"
						className="form-control"
						name="telefono"
						access="false"
						id="telefono"
						required="required"
						aria-required="true"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-text form-group field-telefonocasa">
					<Form.Label htmlFor="telefonocasa" className="formbuilder-text-label">
						Telefono Casa <span> </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setTelefonocasa(e.target.value)}
						value={telefonocasa}
						type="tel"
						placeholder="+502"
						className="form-control"
						name="telefonocasa"
						access="false"
						id="telefonocasa"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-text form-group field-identificacion">
					<Form.Label htmlFor="identificacion" className="formbuilder-text-label">
						DPI/No. de Identificacion<span className="formbuilder-required">* </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setIdentificacion(e.target.value)}
						value={identificacion}
						type="text"
						placeholder="no. identificacion"
						className="form-control"
						name="identificacion"
						access="false"
						id="identificacion"
						required="required"
						aria-required="true"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-text form-group field-pasaporte">
					<Form.Label htmlFor="pasaporte" className="formbuilder-text-label">
						No. Pasaporte<span> </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setPasaporte(e.target.value)}
						value={pasaporte}
						type="text"
						placeholder="no. pasaporte"
						className="form-control"
						name="pasaporte"
						access="false"
						id="pasaporte"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-text form-group field-terjetacredito">
					<Form.Label htmlFor="terjetacredito" className="formbuilder-text-label">
						No. Tarjeta de Credito<span> </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setTarjetacredito(e.target.value)}
						value={tarjetacredito}
						type="text"
						placeholder="no. tarjeta credito"
						className="form-control"
						name="terjetacredito"
						access="false"
						id="terjetacredito"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-text form-group field-mesanovencimiento">
					<Form.Label htmlFor="mesanovencimiento" className="formbuilder-text-label">
						Mes / Año vencimiento<span> </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setMesanovencimiento(e.target.value)}
						value={mesanovencimiento}
						type="text"
						placeholder="00/00"
						className="form-control"
						name="mesanovencimiento"
						access="false"
						id="mesanovencimiento"
					/>
				</Form.Group>
				<Form.Group className="formbuilder-text form-group field-cvc">
					<Form.Label htmlFor="cvc" className="formbuilder-text-label">
						CVC<span> </span>
					</Form.Label>
					<Form.Control
						onChange={(e) => setCvc(e.target.value)}
						value={cvc}
						type="text"
						placeholder="000"
						className="form-control"
						name="cvc"
						access="false"
						id="cvc"
					/>
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

export default MasketForm;
