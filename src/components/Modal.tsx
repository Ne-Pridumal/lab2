import React, { useCallback, useState } from 'react'
import RightClickMenu from 'react-right-click-context-menu'

interface IModalForm {
	name: string,
}

const Modal = () => {
	const [modalForm, setModalForm] = useState<IModalForm>({
		name: 'Гаврильков Иван 20-ВТ',
	});
	const [modalSize, setModalSize] = useState(16)
	const change = useCallback((event) => {
		const { name, value } = event.target;
		setModalForm((prevVal: any) => {
			return {
				...prevVal,
				[name]: value ? value.trim() : ''
			}
		})
	}, [modalForm])

	return (
		<div className='modal'>
			<input className='modal__input' name='name' value={modalForm.name} onChange={change} style={{ fontSize: modalSize }} />
			<RightClickMenu
				menuClassName='modal__context-menu'
				liClassName="modal-btn"
				rightClickTargets={
					[
						{
							className: 'modal',
							menuList: [
								<button onClick={() => setModalSize(10)}>
									{modalSize === 10 ? "✓" : null}10</button>,
								<button onClick={() => setModalSize(12)}>
									{modalSize === 12 ? "✓" : null}12</button>,
								<button onClick={() => setModalSize(14)}>
									{modalSize === 14 ? "✓" : null}14</button>,
								<button onClick={() => setModalSize(16)}>
									{modalSize === 16 ? "✓" : null}16</button>,
							]
						}
					]
				}
			/>
		</div>
	)
}

export default Modal