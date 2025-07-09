// src/components/Button.jsx
const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      {label}
    </button>
  );
};

const styles = {
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#6c63ff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Button;
