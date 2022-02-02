import "./Modal.scss"

const Modal = ({ checkboxTarjetas, cerrarModal, valorCheck }) => {
	return (
		<article className="modal">
			<button onClick={cerrarModal}>x</button>
			<label>
				Elige tu medio de pago : Visa
				<input
					type="checkbox"
					name="visa"
					value="visa"
					onChange={checkboxTarjetas}
				/>
				Master
				<input
					type="checkbox"
					name="master"
					value="master"
					onChange={checkboxTarjetas}
				/>
			</label>
			Elegiste tu tarjeta:
			<span>{valorCheck}</span>
		</article>
	);
};

export default Modal;