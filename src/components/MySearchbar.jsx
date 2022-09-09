import { Form } from 'react-bootstrap'

const MySearchbar = (props) => {
    return (
        <Form onSubmit={props.fetch}>
        <Form.Control
          type="search"
          value={props.val}
          onChange={props.change}
          placeholder="Type and press Enter"
          className='searchbar'
        />
      </Form>
    )
}

export default MySearchbar