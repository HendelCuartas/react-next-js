import Link from 'next/link';
import SofiaLogo from './sofia_logo'
import COLORS from '../utils/brand_colors'

const linkStyle = {
  marginRight: 40,
  textDecoration: 'none',
  color: COLORS.white,
  fill: 'currentColor'
};

const lastLinkStyle = {
  textDecoration: 'none',
  color: COLORS.downy,
  borderBottom: `1px solid ${COLORS.downy}`
}

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '40px 0',
  boxSizing: 'border-box'
}

const Header = () => (
  <div style={headerStyle}>
    <Link href="/">
      <SofiaLogo style={linkStyle}/>
    </Link>
    <div>
      <Link href="/">
        <a style={linkStyle}>Beneficios</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>Nosotros</a>
      </Link>
      <Link href="/">
        <a style={linkStyle}>Cotizador</a>
      </Link>
      <Link href="/">
        <a style={linkStyle}>Grupo médico</a>
      </Link>
      <Link href="https://blog.sofiasalud.com/">
        <a style={linkStyle} target="_blank">Blog</a>
      </Link>
      <Link href="/">
        <a style={lastLinkStyle} target="_blank">Lista de espera</a>
      </Link>
    </div>
  </div>
);

export default Header;