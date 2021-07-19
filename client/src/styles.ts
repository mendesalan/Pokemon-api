import styled from 'styled-components'
import logo from './logo.svg'

export const Container = styled.div`
  text-align: center;
`

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const Link = styled.a.attrs({
  href: 'https://reactjs.org',
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  color: #61dafb;
`

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'Logo'
})`
  height: 40vmin;
  pointer-events: none;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`
