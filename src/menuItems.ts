const komp2 = 'https://upload.wikimedia.org/wikipedia/commons/0/02/Circle-icons-computer.svg'
const komp = 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Computer_crash.svg'
interface IMenuItems {
	title: string,
	image?: string,
	submenu?: Array<IMenuItems>
}

export const menuItems: Array<IMenuItems> = [
	// ...
	{
		title: "Центральный процессор",
		submenu: [
			{
				title: "АЛУ",
				image: komp2,
			},
			{
				title: "CU",
				image: komp,
			},
			{
				title: "первичная КЭШ-память",
			},
			{
				title: "блок плавающей точки",
			},
			{
				title: "Кнвейер команд",
			},
		],
	},
	{
		title: 'Оперативная память',
		submenu: [
			{
				title: "Динамическая",
			},
			{
				title: "Статическая",
			},
			{
				title: "Постоянная",
			},
		]
	},
	{
		title: 'Интерфейсы',
		submenu: [
			{
				title: "Внутренние",
				submenu: [
					{
						title: 'ISA/EISA'
					},
					{
						title: 'IDE/ATA'
					},
					{
						title: 'AGP'
					},
				]
			},
			{
				title: "Внешние",
				submenu: [
					{
						title: 'последовательный'
					},
					{
						title: 'парралельный'
					},
					{
						title: 'USB'
					},
				]
			},
		]
	},
	{
		title: 'Внешние устройства',
		submenu: [
			{
				title: "Ввод-вывод",
				submenu: [
					{
						title: 'Терминал'
					},
					{
						title: 'Манипулятор'
					},
					{
						title: 'Звуковая карта'
					},
				]
			},
			{
				title: "Массовая память",
				submenu: [
					{
						title: 'Магнитные'
					},
					{
						title: 'Оптические'
					},
					{
						title: 'Флэш-накопители'
					},
				]
			},
		]
	},
	{
		title: 'Options',
		submenu: [
			{
				title: 'open'
			},
			{
				title: 'close'
			}
		]
	},
	// ...
];