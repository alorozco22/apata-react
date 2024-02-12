import { useFirebaseApp } from 'reactfire';
import React, { useState, useEffect } from 'react';

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from './firebase-config.js';
import { setDoc, doc, collection, getDoc } from 'firebase/firestore';

export function UpdatePlan(props) {

	// MÉTODOS DE AUTENTICACIÓN
	const [user, setUser] = useState('');


	useEffect(() => {
		onAuthStateChanged(auth, (authUser)=> {
			if (authUser){
				console.log('Usuario inició sesión');
				
			} else {
				console.log('No hay sesión iniciada');
			}
			setUser(authUser);
		});
	}, [])


	

	


	

	const logout = async () => {
		await signOut(auth);
		window.alert('Sesión cerrada');
	}


	// MÉTODOS DE BASE DE DATOS
	const firebase = useFirebaseApp();
	console.log(firebase);

	let [docData, setDocData] = useState('');

	const fetchDataFromFirestore = async () => {
		const docRef = doc(firestore, "planes", String(props.id));
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
		  console.log("Document data:", docSnap.data());

		} else {
		  // docSnap.data() will be undefined in this case
		  console.log("No such document!");
		}
		
		setDocData(docSnap.data());
		setTitulo(docSnap.data().titulo);
		setSubtitulo(docSnap.data().subtitulo);
		setDescripcionP1(docSnap.data().descripcionP1);
		setDescripcionP2(docSnap.data().descripcionP2);
		setDificultad(docSnap.data().dificultad);
		setAltitud(docSnap.data().altitud);
		setTiempoCaminata(docSnap.data().tiempoCaminata);
		setLongitud(docSnap.data().longitud);
		setFoto1(docSnap.data().foto1);
		setFoto2(docSnap.data().foto2);
		setFoto3(docSnap.data().foto3);
		setFoto4(docSnap.data().foto4);
		setInstaLink(docSnap.data().instaLink);
		setFotoRecomendaciones(docSnap.data().fotoRecomendaciones);
		setCronograma(docSnap.data().cronograma);
		setPrecio(docSnap.data().precio);
		setDia(docSnap.data().dia);
		setMes(docSnap.data().mes);
		setCuposDisponibles(docSnap.data().cuposDisponibles);

	}


	/*useEffect(()=>{
		fetchDataFromFirestore();
	}, []);*/

	
	const [dropDificultadVisible, setDropDificultadVisible] = useState(false);
	const [dropCuposVisible, setDropCuposVisible] = useState(false);

	
	const [idPlan, setIdPlan] = useState(props.id); // Va en el form, pero no es editable

	const [titulo, setTitulo] = useState('Sendero del Oso');
	const [subtitulo, setSubtitulo] = useState('Chingaza');
	const [descripcionP1, setDescripcionP1] = useState('El Sendero del Oso sobresale precisamente por el magnífico estado de sus ecosistemas, ubicado en Chingaza, es una de las pocas regiones donde aún se conservan grandes extensiones de páramo y bosque alto andino. Nuestro recorrido de un día por este sector del Chingaza, es una oportunidad para verlo en su estado más puro. Es de esperar el avistamiento de peñas majestuosas, lagunas azul oscuro, sabanas interminables de frailejones, pájaros de colores, venados y, con algo de suerte, osos.');
	const [descripcionP2, setDescripcionP2] = useState('');
	const [dificultad, setDificultad] = useState('media');

	const [altitud, setAltitud] = useState('3.335 - 3.750 msnm');
	const [tiempoCaminata, setTiempoCaminata] = useState('5-6 h');
	const [longitud, setLongitud] = useState('7 Km');
	const [foto1, setFoto1] = useState('6EA8B757-F10B-4648-800E-198B9FE9DABE.jpeg');
	const [foto2, setFoto2] = useState('7C5C78E6-8DE7-416F-858E-AD7A943A5872.jpeg');
	const [foto3, setFoto3] = useState('7C8AC929-13C0-4EC7-87FD-00D65087C83F.jpeg');
	const [foto4, setFoto4] = useState('8E3C1B9E-4197-4219-A9A8-36B75DD953BD (1).jpeg');

	const [instaLink, setInstaLink] = useState('https://www.instagram.com/p/CzH20taqXic/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==');
	const [fotoRecomendaciones, setFotoRecomendaciones] = useState('recomendaciones.png');
	const [cronograma, setCronograma] = useState('{"6:25":"Salida de Bogotá", "6:25 - 8:15":"Trayecto en bus", "8:30-12:30":"Primera caminata", "12:30-13:30":"Almuerzo", "13:30-16:00":"Visita a las ruinas Mina Palacio + segunda caminata", "16:00-19:00":"Regreso a Bogotá"}'); // Formato {"12:15": "Comer", "12:30": "Reposar"}

	const [precio, setPrecio] = useState('$198.000');
	const [dia, setDia] = useState('26');
	const [mes, setMes] = useState('12');
	const [cuposDisponibles, setCuposDisponibles] = useState(true);
	

	

	
	// Este va a ser el update
	const guardar = () => {
		window.alert('Dificultad '+dificultad);
	}


	const controladorDrop = () => {
		if (dropDificultadVisible) {
	      setDropDificultadVisible(false);
	    } else {
	      setDropDificultadVisible(true);
	    }
	}

	const controladorDropCupos = () => {
		if (dropCuposVisible){
			setDropCuposVisible(false);
		} else {
			setDropCuposVisible(true);
		}
	}
	
	const savePlanToFirestore = async () => {
		const docRef = await setDoc(doc(firestore, "planes", String(idPlan)),{
			idPlan:idPlan,
			titulo: titulo,
			subtitulo: subtitulo,
			descripcionP1: descripcionP1,
			descripcionP2: descripcionP2, 
			dificultad: dificultad,
			altitud: altitud,
			tiempoCaminata: tiempoCaminata,
			longitud: longitud,
			foto1: foto1,
			foto2: foto1,
			foto3: foto3,
			foto4: foto3,
			instaLink: instaLink,
			fotoRecomendaciones: fotoRecomendaciones,
			cronograma: cronograma,
			precio: precio,
			dia: dia,
			mes: mes,
			cuposDisponibles: cuposDisponibles
		});
		window.alert('Registro agregado a la base de datos:', titulo);
	}

	return (

		<div className="">
		{
			user?
			

			<section className="bg-gray-50 dark:bg-gray-900">
				    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
				        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
				            Actualizar información de plan con id: {props.id}
				        </a>
				        <a href="./admin" onClick = {logout} className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Cerrar sesión</a>
				        <a href="./admin" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Volver al Master</a>

				        <div className="w-5/6 bg-white rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700 pt-4 pb-4 pr-4 pl-4">


				        <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={fetchDataFromFirestore}>Cargar datos </button>
				        <br /><br />


				        <label htmlFor="idPlan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identificador del plan (no editable)</label>
				                    <input onChange={(e)=> {setIdPlan(e.target.value)}} type="text" value={idPlan} name="idPlan" id="idPlan" className="bg-gray-50 border border-gray-300 text-gray-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Identificador para la base de datos" required="" readonly="true" />
				        				<br />

				        <label htmlFor="titulo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título del plan</label>
				                    <input onChange={(e)=> {setTitulo(e.target.value)}} type="text" value={titulo} name="titulo" id="titulo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Título del plan" required="" />
				        				<br />

				        <label htmlFor="subtitulo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subtítulo del plan</label>
				                    <input onChange={(e)=> {setSubtitulo(e.target.value)}} type="text" value={subtitulo} name="subtitulo" id="subtitulo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subtítulo del plan" required="" />
				        				<br />

				        <label htmlFor="descripcionP1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción (párrafo 1)</label>
				                    <textarea onChange={(e)=> {setDescripcionP1(e.target.value)}} type="text" value={descripcionP1} name="descripcionP1" id="descripcionP1" className="h-32 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Primer párrafo de descripción" required="" />
				        				<br />


				        <label htmlFor="descripcionP2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción (párrafo 2)</label>
				                    <textarea onChange={(e)=> {setDescripcionP2(e.target.value)}} type="text" value={descripcionP2} name="descripcionP2" id="descripcionP2" className="h-32 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Segundo párrafo de descripción (opcional)" required="" />
				        				<br />

				        <button onClick={controladorDrop} id="dropdownRadioBgHoverButton" data-dropdown-toggle="dropdownRadioBgHover" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">Dificultad <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
						        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
						    </svg>
						</button>
						{ dropDificultadVisible? (

							<div id="dropdownRadioBgHover" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
						    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
						        <li>
						            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
						                <input onChange={(e)=> {setDificultad('alta')}} id="radio-dificultad-alta" type="radio" value="" name="radio-dificultad-" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
						                <label htmlFor="radio-dificultad-alta" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Alta</label>
						            </div>
						        </li>
						        <li>
						            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
						                <input onChange={(e)=> {setDificultad('media')}} id="radio-dificultad-media" type="radio" value="" name="radio-dificultad-" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
						                <label htmlFor="radio-dificultad-media" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Media</label>
						            </div>
						        </li>
						        <li>
						            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
						                <input onChange={(e)=> {setDificultad('baja')}} id="radio-dificultad-baja" type="radio" value="" name="radio-dificultad-" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
						                <label htmlFor="radio-dificultad-baja" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Baja</label>
						            </div>
						        </li>
						    </ul>
						</div>

							):null
						 }
						<br /><br />



						

						<label htmlFor="altitud" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Altitud</label>
				                    <input onChange={(e)=> {setAltitud(e.target.value)}} type="text" value={altitud} name="altitud" id="altitud" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Texto de altitud con 'msnm'" required="" />
				        				<br />



				        <label htmlFor="tiempoCaminata" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiempo de caminata</label>
				                    <input onChange={(e)=> {setTiempoCaminata(e.target.value)}} type="text" value={tiempoCaminata} name="tiempoCaminata" id="tiempoCaminata" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Texto de tiempo de caminata" required="" />
				        				<br />



				        <label htmlFor="longitud" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Longitud de caminata</label>
				                    <input onChange={(e)=> {setLongitud(e.target.value)}} type="text" value={longitud} name="longitud" id="longitud" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Longitud del plan o la caminata" required="" />
				        				<br />

				        <label htmlFor="foto1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la foto 1 de la caminata</label>
				                    <input onChange={(e)=> {setFoto1(e.target.value)}} type="text" value={foto1} name="foto1" id="foto1" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del archivo de foto 1 del plan o la caminata (Ej. foto.jpg)" required="" />
				        				<br />

				        <label htmlFor="foto2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la foto 2 de la caminata</label>
				                    <input onChange={(e)=> {setFoto2(e.target.value)}} type="text" value={foto2} name="foto2" id="foto2" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del archivo de foto 2 del plan o la caminata (Ej. foto.jpg)" required="" />
				        				<br />


				        <label htmlFor="foto3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la foto 3 de la caminata</label>
				                    <input onChange={(e)=> {setFoto3(e.target.value)}} type="text" value={foto3} name="foto3" id="foto3" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del archivo de foto 3 del plan o la caminata (Ej. foto.jpg)" required="" />
				        				<br />


				        <label htmlFor="foto4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la foto 4 de la caminata</label>
				                    <input onChange={(e)=> {setFoto4(e.target.value)}} type="text" value={foto4} name="foto4" id="foto4" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del archivo de foto 4 del plan o la caminata (Ej. foto.jpg)" required="" />
				        				<br />

				        <label htmlFor="instaLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL de post de instagram</label>
				                    <input onChange={(e)=> {setInstaLink(e.target.value)}} type="text" value={instaLink} name="instaLink" id="instaLink" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL del post para incrustar" required="" />
				        				<br />


				        <label htmlFor="fotoRecomendaciones" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL de imagen de ficha de recomendaciones</label>
				                    <input onChange={(e)=> {setFotoRecomendaciones(e.target.value)}} type="text" value={fotoRecomendaciones} name="fotoRecomendaciones" id="fotoRecomendaciones" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="URL de la imagen con recomendaciones generales para el plan" required="" />
				        				<br />


				        <label htmlFor="cronograma" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cronograma</label>
				                    <textarea onChange={(e)=> {setCronograma(e.target.value)}} type="text" value={cronograma} name="cronograma" id="cronograma" className="h-32 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Formato: {'10:00': 'Caminar', '12:00': 'Almorzar', '2:00':'Inicia regreso del pico'} " required="" />
				        				<br />

				        <label htmlFor="precio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
				                    <input onChange={(e)=> {setPrecio(e.target.value)}} type="text" value={precio} name="precio" id="precio" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Texto completo indicando el precio (Ej. $180.000)" required="" />
				        				<br />

				        <label htmlFor="dia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Día programado</label>
				                    <input onChange={(e)=> {setDia(e.target.value)}} type="text" value={dia} name="dia" id="dia" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Próxima fecha programada (Ej. 15)" required="" />
				        				<br />

				        <label htmlFor="mes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mes programado</label>
				                    <input onChange={(e)=> {setMes(e.target.value)}} type="text" value={mes} name="mes" id="mes" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Próxima fecha programada en número (Ej. 12)" required="" />
				        				<br />







				        <button onClick={controladorDropCupos} id="dropdownRadioBgHoverButton" data-dropdown-toggle="dropdownRadioBgHover" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">Cupos disponibles <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
						        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
						    </svg>
						</button>
						{ dropCuposVisible? (

							<div id="dropdownRadioBgHover" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
						    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
						        <li>
						            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
						                <input onChange={(e)=> {setCuposDisponibles(true)}} id="radio-dificultad-alta" type="radio" value="" name="radio-dificultad-" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
						                <label htmlFor="radio-dificultad-alta" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Cupos disponibles</label>
						            </div>
						        </li>
						        <li>
						            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
						                <input onChange={(e)=> {setCuposDisponibles(false)}} id="radio-dificultad-media" type="radio" value="" name="radio-dificultad-" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
						                <label htmlFor="radio-dificultad-media" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Agotado</label>
						            </div>
						        </li>
						        
						    </ul>
						</div>

							):null
						 }
						<br /><br />





				        <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={savePlanToFirestore}>Guardar cambios</button>
				        



				            
				        </div>
				    </div>
				</section>
			
			:
			<div>
				<a href='./admin' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Para acceder a este contenido debes iniciar sesión por favor haz click aquí.</a>
			</div>

	}
		</div>
		);
}