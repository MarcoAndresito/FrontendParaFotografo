import styles from "./InputText.module.css";

const InputText = ({ id, textLabel, type, value, onChange }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {textLabel}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        placeholder={textLabel}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default InputText;
