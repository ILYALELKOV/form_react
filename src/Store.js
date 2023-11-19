import { useState } from 'react'

const initialState = {
	email: '',
	password: '',
	repeatPassword: ''
}

export const useStore = () => {
	const [error, setError] = useState({
		errorPassword: '',
		errorRepeatPassword: ''
	})
	const [state, setState] = useState(initialState)

	return {
		getState: () => state,
		getError: () => error,
		updateState: (fieldName, newValue) => {
			const regExp = /^(?=.*[A-Z])(?=.*\d).{5,}$/

			let newErrorPassword = ''
			let newErrorRepeatPassword = ''

			if (fieldName === 'password' && !regExp.test(newValue)) {
				newErrorPassword =
					'Пароль должен содержать заглавную букву, цифру и быть больше пяти символов'
			} else if (
				(fieldName === 'repeatPassword' &&
					newValue.length !== state.password.length) ||
				newValue.trim() !== state.password.trim()
			) {
				newErrorRepeatPassword = 'Пароли должны совпадать'
			}
			setError({
				...error,
				errorPassword: newErrorPassword,
				errorRepeatPassword: newErrorRepeatPassword
			})
			setState({ ...state, [fieldName]: newValue })
		}
	}
}
