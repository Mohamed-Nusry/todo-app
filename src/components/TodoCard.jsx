import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function TodoCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.status}</Card.Subtitle>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button onClick={props.editTodo} variant="success">Edit</Button>
        &nbsp;
        <Button variant="danger">Delete</Button>
        <Form.Check
            className='pt-4' 
            type="checkbox"
            id={`default-checkbox`}
            label={`Mark as Completed`}
          />
      </Card.Body>
    </Card>
  );
}

export default TodoCard;