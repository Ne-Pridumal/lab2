import { FC, useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import CloseMenuItem from "./CloseMenuItem";
import OpenMenuItem from "./OpenMenuItem";

interface MenuItemsProps {
	items: any,
	depthLevel: number,
}

const MenuItems: FC<MenuItemsProps> = ({ items, depthLevel }) => {
	const [dropdown, setDropdown] = useState(false);
	let ref = useRef<HTMLLIElement>(null);
	useEffect(() => {
		const handler = (event: { target: any; }) => {
			if (dropdown && ref.current && !ref.current.contains(event.target)) {
				setDropdown(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdown]);
	return (
		<li className="menu-items" ref={ref}>
			{items.submenu ? (
				<>
					<button type="button" aria-haspopup="menu"
						onClick={() => setDropdown((prev) => !prev)}
					>
						{items.title}{" "}
						{depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
					</button>
					<Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
				</>
			) : (
				items.title !== 'close' ?
					items.title !== 'open' ?
						<a href="/#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{items.title}
							{items.image ? <img style={{ maxWidth: 25, maxHeight: 35 }} src={items.image} alt='#' /> : null}
						</a>
						:
						<OpenMenuItem items={items.title} />
					:
					<CloseMenuItem items={items.title} />
			)}
		</li>
	);
};

export default MenuItems;