import { FC, useContext, useEffect, useRef, useState } from 'react'
import { ModalContext } from '../App';

interface MenuItemProps {
	items: any,
}

const CloseMenuItem: FC<MenuItemProps> = ({ items }) => {
	const { setModalDisplay } = useContext(ModalContext);
	const [dropdown, setDropdown] = useState(false);
	let ref = useRef<HTMLLIElement>(null);
	useEffect(() => {
		const handler = (event: { target: any; }) => {
			if (dropdown && ref.current && !ref.current.contains(event.target)) {
				setDropdown(false);
			}
		};
		const keyHandler = (event: { key: string; }) => {
			if (event.key === 'x' || event.key === 'X') {
				setModalDisplay(false);
			}
		}
		document.addEventListener('keydown', keyHandler)
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
			document.removeEventListener('keydown', keyHandler)
		};
	}, [dropdown, setModalDisplay]);

	return (
		<li className="menu-items" ref={ref}>
			<button onClick={() => { setModalDisplay(false) }} className='close-item'>{items}</button>
		</li>
	)
}

export default CloseMenuItem