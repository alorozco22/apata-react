import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase-config.js';
import React, { useState, useEffect } from 'react';

export function Admin(props) {

	
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function estaActivado(){
		return Math.floor(Math.random() * 2)==1;
	}

	const [visible1, setVisible1] = useState(estaActivado());
	const [visible2, setVisible2] = useState(estaActivado());
	const [visible3, setVisible3] = useState(estaActivado());
	const [visible4, setVisible4] = useState(estaActivado());
	const [visible5, setVisible5] = useState(estaActivado());

	const [visible6, setVisible6] = useState(estaActivado());
	const [visible7, setVisible7] = useState(estaActivado());
	const [visible8, setVisible8] = useState(estaActivado());
	const [visible9, setVisible9] = useState(estaActivado());
	const [visible10, setVisible10] = useState(estaActivado());

	const [visible11, setVisible11] = useState(estaActivado());
	const [visible12, setVisible12] = useState(estaActivado());
	const [visible13, setVisible13] = useState(estaActivado());
	const [visible14, setVisible14] = useState(estaActivado());
	const [visible15, setVisible15] = useState(estaActivado());

	const [visible16, setVisible16] = useState(estaActivado());
	const [visible17, setVisible17] = useState(estaActivado());
	const [visible18, setVisible18] = useState(estaActivado());
	const [visible19, setVisible19] = useState(estaActivado());
	const [visible20, setVisible20] = useState(estaActivado());

	const [visible21, setVisible21] = useState(estaActivado());
	const [visible22, setVisible22] = useState(estaActivado());
	const [visible23, setVisible23] = useState(estaActivado());
	const [visible24, setVisible24] = useState(estaActivado());
	const [visible25, setVisible25] = useState(estaActivado());

	const [visible26, setVisible26] = useState(estaActivado());
	const [visible27, setVisible27] = useState(estaActivado());
	const [visible28, setVisible28] = useState(estaActivado());
	const [visible29, setVisible29] = useState(estaActivado());
	const [visible30, setVisible30] = useState(estaActivado());
	
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

	//console.log(auth);
	


	const submit = async () => {
		// Login:
		//console.log(email,password);
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			console.log(userCredential.user);
			console.log('Se inició sesión correctamente.');
			window.alert("Inicio de sesión exitoso");
		} catch {
			// Credenciales incorrectas
			window.alert("El usuario o contraseña son incorrectos.");
			console.log('Usuario o contraseña incorrectos.');
		}
		
	}

	const logout = async () => {
		await signOut(auth);
		window.alert('Sesión cerrada');
	}

	const guardar = () => {
		let mensaje = '';
		for (let i = 0; i<30; i++){
			mensaje = mensaje+String(i)+': '+String(estados[i])+'; ';
		}
		window.alert(mensaje);
	}



	const funciones = [setVisible1, setVisible2, setVisible3, setVisible4, setVisible5,
		setVisible6, setVisible7, setVisible8, setVisible9, setVisible10,
		setVisible11, setVisible12, setVisible13, setVisible14, setVisible15,
		setVisible16, setVisible17, setVisible18, setVisible19, setVisible20,
		setVisible21, setVisible22, setVisible23, setVisible24, setVisible25,
		setVisible26, setVisible27, setVisible28, setVisible29, setVisible30];

	const estados = [visible1, visible2, visible3, visible4, visible5,
		visible6, visible7, visible8, visible9, visible10,
		visible11, visible12, visible13, visible14, visible15,
		visible16, visible17, visible18, visible19, visible20,
		visible21, visible22, visible23, visible24, visible25,
		visible26, visible27, visible28, visible29, visible30];

	

	function controladores(){
		
		let lista = [];

		for (let i = 0; i<30; i++){
			
			// Datos de activo/inactivo
			let num = Math.floor(Math.random() * 2);
			

			lista.push({'listener':funciones[i], 'estado':estados[i], 'titulo':'Plan '+String(i), 'id':'switch'+String(i), 'ruta':'/update-plan-'+(i<10?'0'+String(i):String(i))});
		}
		return lista;
	}

	
	


	const rows = controladores().map((val, i)=>(
		<tr key={val.id}>
		    <td>{val.titulo}</td>
		    <td><a href={val.ruta} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar plan</a></td>
		    <td><label className="relative inline-flex items-center cursor-pointer">
		            <input type="checkbox" id={val.id} value="" className="sr-only peer" onChange={(e)=> {val.listener(e.target.checked)}} checked={val.estado} />
		            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
		            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Visible</span>
		        </label></td>
		</tr>

		));

	

	return (
		<div>
		{
			user?
				<section className="bg-gray-50 dark:bg-gray-900">
				    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
				        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
				            Master de planes
				        </a>
				        <a href="./admin" onClick = {logout} className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Cerrar sesión</a>

				        <div className="w-2/3 bg-white rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700 pt-4 pb-4 pr-4 pl-4">
				            <table className="md:table-auto md:w-full">
				                <thead>
				                    <tr>
				                        <th>Título</th>
				                        <th>Editar</th>
				                        <th>Visible</th>
				                    </tr>
				                </thead>
				                <tbody>


				                    { rows }

				                </tbody>
				                <tfoot>
				                    <tr>
				                        <td colSpan="3">
				                            <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={guardar}>Guardar cambios</button>
				                        </td>
				                    </tr>
				                </tfoot>
				            </table>
				        </div>
				    </div>
				</section>
				:
				<section className="bg-gray-50 dark:bg-gray-900">
				    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
				            <img className="w-8 h-8 mr-2" src="./logo1.svg" alt="logo" />
				            APATA Colombia
				        </a>
				        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
				                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				                    Iniciar sesión como admin
				                </h1>
				                <div>
				                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
				                    <input onChange={(e)=> {setEmail(e.target.value)}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="correo@empresa.com" required="" />
				                </div>
				                <div>
				                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
				                    <input onChange={(e)=> {setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
				                </div>
				                <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={submit}>Iniciar sesión</button>
				                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
				                    Este es un espacio para administradores de APATA, si buscas información como usuario/a o aliado/a por favor vuelve a la <a href="./" className="font-medium text-primary-600 hover:underline dark:text-primary-500">página principal</a> o bien escríbenos un <a href="https://api.whatsapp.com/send?phone=573244529945" className="font-medium text-primary-600 hover:underline dark:text-primary-500">mensaje</a>
				                </p>
				            </div>
				        </div>
				    </div>
				</section>
		}
		</div>
	);


	








	

	
}