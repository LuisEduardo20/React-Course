import './styles.css';

export const Input = (props) => {
    const { Function, type, value, placeholder } = props

    return (
        <input
            onChange={Function}
            value={value}    
            type={type}
            placeholder={placeholder}
        />
    );
}