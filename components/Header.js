import Link from 'next/link';

const linkStyle = {
  marginRight: 40,
  textDecoration: 'none',
  color: 'white'
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '40px 0',
  boxSizing: 'border-box'
}

const Header = () => (
  <div style={headerStyle}>
    <div>
      <Link href="/">
        <a style={linkStyle}>Inicio</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>Nosotros</a>
      </Link>
    </div>
  </div>
);

export default Header;