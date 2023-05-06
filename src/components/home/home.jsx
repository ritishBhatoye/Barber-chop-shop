import React from 'react'
import About from '../About/About';
import Container from './Container';
import Description from './Des';
import Des from './Des';
import FooterHome from './Footer-home';
import HomeTemp from './Home-Temp';
import HomeNews from './Home-News';
import HomeService from './Home-Service';
import Header from './Header';
import { Footer } from '../Footer/Footer';
import 'aos';
export const Home = () => {
  return (
    <>
     <Header />
    <Container />
    <HomeService />
    <Description />
    <HomeNews />
    <FooterHome />
    <Footer />
  </>
  )
}
