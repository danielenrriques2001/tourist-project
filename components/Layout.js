import Header from './Header';
import styled from 'styled-components'

export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}
