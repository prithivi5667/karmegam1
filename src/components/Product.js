import React from 'react';
import{Card,Button} from 'react-bootstrap';
import coconut from '../images/coco.jpeg';
import g from '../images/groundnut.jpeg';
import sea from '../images/oil.jpeg';
import tar from '../images/tarpaulin.jpg';
import r from '../images/rice.jpeg';
import seeds from '../images/seeds.jpg';
import pesti from '../images/pesti.jpeg';
import sugar from '../images/sugar.jpeg';

class Product extends React.Component{
    render(){
    return(
    <div className="admincard">
<Card style={{ width: '18rem' ,height: '28rem' }}>
  <Card.Img variant="top" src={coconut} />
  <Card.Body>
    <Card.Title>Coconut Oil</Card.Title>
    <Card.Text>
    மரச்செக்கு எண்ணெய்/Cold Pressed Oil
    </Card.Text>
    <Button variant="warning">View Details</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' ,height: '28rem' }}>
  <Card.Img variant="top" src={g} />
  <Card.Body>
    <Card.Title>Groundnut</Card.Title>
    <Card.Text>
    மரச்செக்கு எண்ணெய்/Cold Pressed Oil
    </Card.Text>
    <Button variant="warning">View Details</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' ,height: '28rem' }}>
  <Card.Img variant="top" src={sea} />
  <Card.Body>
    <Card.Title> Gingelly Oil</Card.Title>
    <Card.Text>
    மரச்செக்கு எண்ணெய்/Cold Pressed Oil
    </Card.Text>
    <Button variant="warning">View Details</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' ,height: '28rem' }}>
  <Card.Img variant="top" src={tar} />
  <Card.Body>
    <Card.Title>  Tarpaulin</Card.Title>
    <Card.Text>
    Black HDPE 250 GSM Heavy Duty
    </Card.Text>
    <Button variant="warning">View Details</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' ,height: '28rem' }}>
  <Card.Img variant="top" src={r} />
  <Card.Body>
    <Card.Title>  Rice Paddy</Card.Title>
    <Card.Text>
    IR-20
    </Card.Text>
    <Button variant="warning">View Details</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' ,height: '28rem' }}>
  <Card.Img variant="top" src={seeds} />
  <Card.Body>
    <Card.Title>  All variety of seeds</Card.Title>
    <Card.Text>
    Top branded seeds
    </Card.Text>
    <Button variant="warning">View Details</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' ,height: '28rem' }}>
  <Card.Img variant="top" src={pesti} />
  <Card.Body>
    <Card.Title>  All variety of Pesticides</Card.Title>
    <Card.Text>
    Top Quality Pesticides
    </Card.Text>
    <Button variant="warning">View Details</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' ,height: '28rem' }}>
  <Card.Img variant="top" src={sugar} />
  <Card.Body>
    <Card.Title>  Nattu Sakkrai/நாட்டுச் சர்க்கரை</Card.Title>
    <Card.Text>
    Top branded seeds
    </Card.Text>
    <Button variant="warning">View Details</Button>
  </Card.Body>
</Card>


</div>
)  
}
}
export default Product;