import React from 'react'
//import image1 from '../images/pesti.jpeg';
import i1 from '../images/1.jpg';
import i2 from '../images/2.jpg';
import i3 from '../images/3.jpg';
import i4 from '../images/4.jpg';
import i5 from '../images/5.jpg';
import i6 from '../images/6.jpg';
import i7 from '../images/7.jpg';
import{Card,Button} from 'react-bootstrap';
class Admin extends React.Component{
    render(){
    return(
    <div className="admincard">
<Card style={{ width: '18rem' ,height: '28rem' }}>
  <Card.Img variant="top" src={i6} />
  <Card.Body>
    <Card.Title>Navenkumar</Card.Title>
    <Card.Text>
    navenkumar8055@gmail.com
    </Card.Text>
    <Button variant="warning">CEO</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', height: '28rem' }}>
  <Card.Img variant="top" src={i7} />
  <Card.Body>
    <Card.Title>P.S.THANGAVELU</Card.Title>
    <Card.Text>
     psthangavelu@gmail.com
    </Card.Text>
    <Button variant="success">Chairman</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', height: '28rem' }}>
  <Card.Img variant="top" src={i2} />
  <Card.Body>
    <Card.Title>SatheeshKumar</Card.Title>
    <Card.Text>
    csatheeshkumar90@gmail.com
    </Card.Text>
    <Button variant="info"> Treasurer</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', height: '28rem'}}>
  <Card.Img variant="top" src={i3} />
  <Card.Body>
    <Card.Title>Malathi</Card.Title>
    <Card.Text>
    kutapalayamfpg@gmail.com
    </Card.Text>
    <Button variant="primary">Director</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', height: '28rem' }}>
  <Card.Img variant="top" src={i4} />
  <Card.Body>
    <Card.Title>Velliyangiri P </Card.Title>
    <Card.Text>
    velliyangiri1954@gmail.com
    </Card.Text>
    <Button variant="primary">Director</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', height: '30rem' }}>
  <Card.Img variant="top" src={i5} />
  <Card.Body>
    <Card.Title>Manoharan</Card.Title>
    <Card.Text>
    manoharan4588an@gmail.com
    </Card.Text>
    <Button variant="primary">Director</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , height: '30rem'}}>
  <Card.Img variant="top" src={i1} />
  <Card.Body>
    <Card.Title>Balusubramanyam</Card.Title>
    <Card.Text>
    balusubramanyam69@gmail.com
    </Card.Text>
    <Button variant="danger">Secretary</Button>
  </Card.Body>
</Card>


</div>
)  
}
}
export default Admin;