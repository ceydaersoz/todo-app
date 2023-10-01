import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import sitelogo from '../../img/logo.png'

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar1" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img className='sitelogo' src={sitelogo} alt="" />
                    Tasks
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-5">

                        <NavDropdown title="Çalışma Alanları" id="collapsible-nav-dropdown1">
                            <NavDropdown.Item href="#action/3.1">Kişisel</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">İş</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Eğitim</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Geçmiş" id="collapsible-nav-dropdown2">
                            <NavDropdown.Item href="#action/3.1">Tamamlanan Görevler</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">İptal Edilen Görevler</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Yıldızlı" id="collapsible-nav-dropdown3">
                            <NavDropdown.Item href="#action/3.1">Kişisel</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">İş</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Önemli</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link className='nav-auth' href="#deets">Giriş</Nav.Link>
                        <Nav.Link className='nav-auth' eventKey={2} href="#memes">Kayıt Ol</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;