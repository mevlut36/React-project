import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <NavbarMenu></NavbarMenu>
      <header className="App-header">
        <div class="wrapper">
          <div class="main-panel">
            <div class="content">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <FormArticle></FormArticle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      <FooterMenu></FooterMenu>
    </div>
  );
}

function FormArticle(){
  function handleSubmit(e) {
    document.getElementById("titre").innerHTML = titre;
    document.getElementById("texte").innerHTML = texte;
    e.preventDefault();
  }
  const [titre, SetTitre] = useState("");
  const [texte, SetTexte] = useState("");
  return(
    <div class="row block-9 justify-content-center mb-5">
      <form class="bg-light p-5 contact-form rounded" onSubmit={handleSubmit}>
        <div class="form-group">
          <input class="form-control" value={titre} onChange={e => SetTitre(e.target.value)} placeholder="Titre" type="text" name="titre" required />
        </div>
        <div class="form-group">
          <textarea class="form-control" value={texte} onChange={e => SetTexte(e.target.value)} placeholder="Texte" type="text" name="texte" required></textarea>
        </div>
        <button type='submit' class="form-control btn btn-primary">Submit</button>
      </form>
      <p id="titre"></p>
      <p id="texte"></p>
    </div>
  );
}

function NavbarMenu() {
  return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Mevlut</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="competences.js">Mes compétences</Nav.Link>
            <Nav.Link href="experiences.js">Mes expériences</Nav.Link>
            <Nav.Link href="contact.js">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

function FooterMenu() {
    return (
            <footer class="bg-blur text-center text-lg-start">
                <div class="container p-4">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase text-primary">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-light">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-light">Link 2</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase mb-0 text-primary">Links</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!" class="text-light">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-light">Link 2</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase text-primary">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-light">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-light">Link 2</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase mb-0 text-primary">Links</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!" class="text-light">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-light">Link 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="text-center p-3 text-light">
                    © 2020 Copyright: <a href="https://mevlut.fr">https://mevlut.fr</a>
                </div>

            </footer>
    );
}

export default App;
