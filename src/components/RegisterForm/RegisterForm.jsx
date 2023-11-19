import styles from './registerForm.module.css'
import { Input } from '../Input/Input.jsx'
import { useStore } from '../../Store.js'
import { useRef } from 'react'

const SendFormData = (formData) => {
	console.table(formData)
}

export const RegisterForm = () => {
	const { getState, updateState, getError } = useStore()
	const buttonRef = useRef(null)

	const onSubmit = (event) => {
		event.preventDefault()
		SendFormData(getState())
	}

	const { email, password, repeatPassword } = getState()
	const { errorPassword, errorRepeatPassword } = getError()

	// if (errorPassword === '' && errorRepeatPassword === '') {
	// 	buttonRef.current.focus()
	// }
	return (
		<div className={styles.container}>
			<p className={styles.container__name}>Регистрация</p>
			<form className={styles.container__form} onSubmit={onSubmit}>
				<Input
					type="email"
					name="email"
					placeholder="Введите email"
					value={email}
					onChange={updateState}
				/>
				<Input
					type="text"
					name="password"
					placeholder="Введите пароль"
					value={password}
					onChange={updateState}
				/>
				{errorPassword && (
					<div className={styles.errorPassword}>{errorPassword}</div>
				)}
				<Input
					type="text"
					name="repeatPassword"
					placeholder="Повторите пароль"
					value={repeatPassword}
					onChange={updateState}
				/>
				{errorRepeatPassword && (
					<div className={styles.errorPassword}>{errorRepeatPassword}</div>
				)}
				<button
					ref={buttonRef}
					// disabled={errorPassword !== null && errorRepeatPassword !== null}
					className={styles.container__submitButton}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	)
}
