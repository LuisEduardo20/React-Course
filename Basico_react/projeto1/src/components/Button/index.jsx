import './styles.css';

export const Button = (props) => {
    const { text, onClick, disabled } = props;
    return (
            <button className="button" disabled={disabled} onClick={onClick}>{text}</button>
        );
}