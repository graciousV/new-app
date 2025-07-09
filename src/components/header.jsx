// src/components/Header.jsx
const Header = ({ title }) => {
  return (
    <header style={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};

const styles = {
  header: {
    padding: '1rem',
    backgroundColor: '#111',
    color: 'white',
    textAlign: 'center',
  },
};

export default Header;
