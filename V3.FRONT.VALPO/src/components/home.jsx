import { useState } from "react"
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Category from "./category";

function Home() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <Row>
                <Col xs={6} md={6}>
                    <section>
                        <Category />
                    </section>
                </Col>
                <Col xs={6} md={6}>
                    <section>
                        <div>
                            <a href="https://vitejs.dev" target="_blank">
                                <img src={viteLogo} className="logo" alt="Vite logo" />
                            </a>
                            <a href="https://react.dev" target="_blank">
                                <img src={reactLogo} className="logo react" alt="React logo" />
                            </a>
                        </div>

                        <h1>Vite + React</h1>

                        <div className="cards">
                            <button onClick={() => setCount((count) => count + 1)}>
                                count is {count}
                            </button>
                            <p>
                                Edit <code>src/App.jsx</code> and save to test HMR
                            </p>
                        </div>

                        <p className="read-the-docs">
                            Click on the Vite and React logos to learn more
                        </p>
                    </section>
                </Col>
            </Row>

            <Row>
                <Col xs={6} md={6}>
                    <section>
                        <Category />
                    </section>
                </Col>
                <Col xs={6} md={6}>
                    <section>
                        <div>
                            <a href="https://vitejs.dev" target="_blank">
                                <img src={viteLogo} className="logo" alt="Vite logo" />
                            </a>
                            <a href="https://react.dev" target="_blank">
                                <img src={reactLogo} className="logo react" alt="React logo" />
                            </a>
                        </div>

                        <h1>Vite + React</h1>

                        <div className="cards">
                            <button onClick={() => setCount((count) => count + 1)}>
                                count is {count}
                            </button>
                            <p>
                                Edit <code>src/App.jsx</code> and save to test HMR
                            </p>
                        </div>

                        <p className="read-the-docs">
                            Click on the Vite and React logos to learn more
                        </p>
                    </section>
                </Col>
            </Row>
        </div>
    )

}

export default Home


/*
<a href="#">
{categoryList.map(categoryItem => (
<Card key={categoryItem.id} style={{ width: '21rem' }}>
<Card.Img variant="top" src={categoryItem.image} />
<Card.Body>
<Card.Title>{categoryItem.name}</Card.Title>
<Card.Text>
Some quick example text to build on the card title and make up the
ulk of the cards content.
</Card.Text>
<Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
))}
</a>
*/