import React, { useState } from 'react';
import ContentDev from './ContentDev';
import ContentLife from './ContentLife';
import ContentFuture from './ContentFuture';

const SectionBar = () => {
	/**
	 * Creo una referencia al  li (devRef) correspondiente al tab DEV, para que cuando se cargue la página esté seleccionado
	 */
	let devRef = React.useRef();
	let oRef = React.useRef();
	let [selectedTab, setSelectedTab] = useState({
		activeObjet: { id: 1, name: 'Santi Developer', tab: 'DEV' },
		objects: [
			{ id: 1, name: 'Santi Developer', tab: 'DEV' },
			{ id: 2, name: 'La vida de Santi', tab: 'LIFE' },
			{ id: 3, name: 'El futuro de Santi', tab: 'FUTURE' },
		],
	});
	/**
	 *
	 * @param {*} index Es la posición del elemento al que se le dio click}
	 */
	function toggleActive(index) {
		/**
		 * ...selectedTab hace referencia a todos los elementos del objeto de useState(activeObject,objects)
		 * Luego se le asigna a activeObject el valor del objeto que está activo, utilizado el index para encontrarlo
		 */
		setSelectedTab({ ...selectedTab, activeObjet: selectedTab.objects[index] });
	}

	function toggleActiveStyles(index) {
		/**
		 * Si el objeto seleccionado es igual al objeto activo , se retorna las clases de elemento activo
		 * Si no , se retorna la clase de Inactivo
		 */
		if (selectedTab.objects[index] === selectedTab.activeObjet) {
			return 'itemSection active';
		} else {
			return 'itemSection inactive';
		}
	}

	/**
	 *
	 * @param {*} selected Es el tab seleccionado
	 * @returns Retorna el componente específico , según el tab seleccionado
	 */
	function renderContent(selected) {
		try {
			switch (selected.activeObjet.tab) {
				case 'DEV':
					return <ContentDev />;
				case 'LIFE':
					return <ContentLife />;
				case 'FUTURE':
					return <ContentFuture />;
				default:
					return '';
			}
		} catch (error) {}
	}
	return (
		<>
			<ul className="text-center inactive flex rounded-lg justify-center w-4/6 mb-7">
				{selectedTab.objects.map((elements, index) => (
					<li
						/**
						 * Si el tab del elemento creado es DEV, entonces se hace refencia al li de DEV. Si no al tab creado
						 */
						ref={elements.tab === 'DEV' ? devRef : oRef}
						key={index}
						className={
							elements.tab === 'DEV'
								? 'itemSection active'
								: toggleActiveStyles(index)
						}
						onClick={(e) => {
							if (elements.tab !== 'DEV') {
								devRef.current.classList.add('inactive');
							} else {
								devRef.current.classList.remove('inactive');
							}
							toggleActive(index);
						}}
					>
						{elements.name}
					</li>
				))}
			</ul>
			{renderContent(selectedTab)}
		</>
	);
};

export default SectionBar;
