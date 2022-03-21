import { FC } from "react";
import MenuItems from "./MenuItems";

interface DropdownProps {
	submenus: any,
	dropdown: boolean,
	depthLevel: number
}

const Dropdown: FC<DropdownProps> = ({ submenus, dropdown, depthLevel }) => {
	depthLevel = depthLevel + 1;
	const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
	return (
		<ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
			{submenus.map((submenu: any, index: number) => (
				<MenuItems items={submenu} key={index} depthLevel={depthLevel} />
			))}
		</ul>
	);
};

export default Dropdown;