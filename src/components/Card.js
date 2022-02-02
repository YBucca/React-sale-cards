import "./Card.scss";
import { useState } from "react";
import { BsCart3 as Carrito } from "react-icons/bs";
import Rating from "@mui/material/Rating";
import Modal from "./Modal";

const Card = ({
	titulo,
	tipo,
	precio,
	imagen,
	isAvailable,
	onSale,
	rating,
}) => {
	const [mostrarModal, setMostrarModal] = useState(false);
	const [mostrarPrecio, setMostrarPrecio] = useState(false);
	const [classAnimacion, setClassAnimacion] = useState(false);
	const [valorCheckbox, setValorCheckbox] = useState("");
	const handleClick = () => {
		setMostrarModal(true);
		console.log("click");
	};
	const handleClickCerrarModal = () => {
		setMostrarModal(false);
	};
	const handleMouseEnter = () => {
		setMostrarPrecio(true);
		setClassAnimacion(true);
	};
	const hadleMouseLeave = () => {
		setMostrarPrecio(false);
		setClassAnimacion(false);
	};
	const handleChangePago = (e) => {
		if (e.target.value === "visa") {
			setValorCheckbox("Visa");
		} else {
			setValorCheckbox("Master");
		}
	};

	return (
		// condicional de isAvailable es segun propiedades del objeto y classAnimacion es segun evento de mouse.
		<div
			className={`card ${isAvailable === false && "no-disponible"} ${
				classAnimacion && "animacion"
			}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={hadleMouseLeave}
		>
			<img src={imagen}></img>
			<div className="titulo">
				<h3>{titulo}</h3>
				{onSale === true && <span>ON SALE!</span>}
			</div>
			<p>{tipo}</p>

			{mostrarPrecio && <p className="precio">${precio}</p>}
			<div className="rating-cards">
				<Rating name="read-only" value={rating} readOnly />
			</div>

			<div className="icono">
				<Carrito onClick={handleClick} />
			</div>

			{/* si , mostrar modal es igual a true- quiero que esto se muestre */}
			{mostrarModal && (
				<Modal
					checkboxTarjetas={handleChangePago}
					valorCheck={valorCheckbox}
					cerrarModal={handleClickCerrarModal}
				/>
			)}
		</div>
	);
};
export default Card;
