import {Row, Col} from 'react-bootstrap'

const Error = () => {
    return(
        <Row>
          <Col
            xs={10}
            className="mx-auto home d-flex align-items-center justify-content-center"
          >
            <h1 className="text-center">Ops! Nessun risultato trovato... </h1>
          </Col>
        </Row>
    )
   
}

export default Error