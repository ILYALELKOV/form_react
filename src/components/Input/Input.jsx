import styles from './input.module.css'
import PropTypes from 'prop-types'

export const Input = ({ type, name, placeholder, value, onChange }) => {
	return (
		<input
			className={styles.container__formItem}
			type={type}
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={({ target }) => onChange(name, target.value)}
		/>
	)
}

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func
}
