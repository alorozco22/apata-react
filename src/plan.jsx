import React, { useState, useEffect } from 'react';
import { firestore } from './firebase-config.js';
import { getDoc, collection, doc } from 'firebase/firestore';
import { InstagramEmbed } from 'react-social-media-embed';

export function Plan(props) {

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

	}

	useEffect(() => {
		fetchDataFromFirestore();
	}, []);

	return (
		<div>
			<img className="w-48" src="./Apata - Logo - Negro.png" alt="Logo de APATA"/>
			<section className="bg-gradient-to-r from-cyan-500 to-blue-500">
				<div className="w-full flex justify-center items-center pt-10">
						<h1 className="text-5xl text-white mb-2 pb-0">{docData.titulo}</h1>
				</div>
				<div className="w-full flex justify-center items-center p-10 sm:pb-10 ">
					<h1 className="text-2xl text-white mt-20 italic pt-0 mt-0">{docData.subtitulo}</h1>
				</div>
			</section>

			<section className="">
				<div className="flex flex-col items-center justify-center w-2/3 sm:w-1/2 md:px-6 m-0 pt-10 pb-10 sm:p-10 mx-auto">
					<p>{docData.descripcionP1}</p>
				</div>
				
				
			</section>

			<section className="">
				<div className="flex flex-col items-center justify-center w-2/3 sm:w-1/2 md:px-6 m-0 pt-10 pb-10 sm:p-10 mx-auto">
					<p className="">{docData.descripcionP2}</p>
				</div>
				
				
			</section>


			<section className="pt-20 pb-20 bg-gradient-to-b from-slate-700 via-slate-800 to-current">
				<div className="grid grid-cols-4 gap-10">
					<div className="grid grid-cols-1">
						<div className="flex justify-center items-center">
							<h1 className="text-5xl text-white mb-2 pb-0">Dificultad</h1>
						</div>
						<div className="flex justify-center items-center">
							<p className="text-white">{docData.dificultad}</p>
						</div>
					</div>


					<div className="grid grid-cols-1">
						<div className="flex justify-center items-center">
							<h1 className="text-5xl text-white mb-2 pb-0">Altitud</h1>
						</div>
						<div className="flex justify-center items-center">
							<p className="text-white">{docData.altitud}</p>
						</div>
					</div>


					<div className="grid grid-cols-1">
						<div className="flex justify-center items-center">
							<h1 className="text-5xl text-white mb-2 pb-0">Tiempo de caminata</h1>
						</div>
						<div className="flex justify-center items-center">
							<p className="text-white">{docData.tiempoCaminata}</p>
						</div>
					</div>


					<div className="grid grid-cols-1">
						<div className="flex justify-center items-center">
							<h1 className="text-5xl text-white mb-2 pb-0">Longitud</h1>
						</div>
						<div className="flex justify-center items-center">
							<p className="text-white">{docData.longitud}</p>
						</div>
					</div>
					
				</div>
				
			</section>

				

			

			<div className="pt-20">
				

				<div>
				
					
						<div>
						
							
							
							{
								props.id == '00'?
								<div style={{ display: 'flex', justifyContent: 'center' }}>
							  <InstagramEmbed url='https://www.instagram.com/p/CzH20taqXic/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' width={328} />
							</div>:null
							}
							{
								props.id == '01'?
								<div style={{ display: 'flex', justifyContent: 'center' }}>
							  <InstagramEmbed url='https://www.instagram.com/reel/Crt58nzPTAN/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' width={328} />
							</div>:null
							}
							{
								props.id == '02'?
								<div style={{ display: 'flex', justifyContent: 'center' }}>
							  <InstagramEmbed url='https://www.instagram.com/reel/CsKOOsOMvHG/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' width={328} />
							</div>:null
							}
							{
								props.id == '03'?
								<div style={{ display: 'flex', justifyContent: 'center' }}>
							  <InstagramEmbed url='https://www.instagram.com/reel/CxEQtcAPQrq/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' width={328} />
							</div>:null
							}
							{
								props.id == '04'?
								<div style={{ display: 'flex', justifyContent: 'center' }}>
							  <InstagramEmbed url='https://www.instagram.com/reel/CxbqhGWpREm/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' width={328} />
							</div>:null
							}
							{
								props.id == '05'?
								<div style={{ display: 'flex', justifyContent: 'center' }}>
							  <InstagramEmbed url='https://www.instagram.com/p/CzH20taqXic/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' width={328} />
							</div>:null
							}



							
							


							
						</div>
						
					
				</div>

				</div>


				<section className="">
				<div className="flex flex-col items-center justify-center w-1/2 px-6 py-8 mx-auto lg:py-0"><p className="text-2xl">Precio</p><br />
				<p>{docData.precio}</p><br />
				</div>
				<div className="flex flex-col items-center justify-center w-1/2 px-6 py-8 mx-auto lg:py-0"><p className="text-2xl">Próxima fecha</p>
				<br />
				<p>{docData.dia}/{docData.mes}/2023 </p>
				<br />
				</div>
			</section>

		</div>
		

		
		);
}