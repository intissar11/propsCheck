import React from 'react'
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'react-bootstrap';

const Profile = ({Data,handleName,defaut}) => { 
    const information = {FullName:"Mark Zuckerberg",
    bio:`Mark Elliot  Zuckerberg (born May 14, 1984) is a former Harvard computer science student who along with a few friends launched Facebook, the world's most popular social network, in February 2004. Zuckerberg also has the distinction of being the world's youngest billionaire, which he achieved in 2008 at the age of 24. He was named "Man of the Year" by Time magazine in 2010. Zuckerberg currently is the chief executive officer and president of Facebook.`,
  };  
    return (
    <div> 
<Card border="primary" style={{ width: '50%',marginLeft:"20%" }}>
<Card.Header>Profile Page</Card.Header>
<Image style={{height:"200px",width:"200px",marginTop:"10px",marginLeft:"220px"}} className="logo"src="https://realestatemarket.com.mx/images/influencers/mark.jpg" alt="logo"  rounded  />

<Card.Body>
<Card.Title><h3 style={{color:"#24629F",textAlign:"center"}} >{information.FullName}</h3> </Card.Title>
<Card.Text>
<p style={{color:"#414245",fontWeight:"500"}}>{information.bio}</p>
</Card.Text>
</Card.Body>

<span>{Data.children}</span>
<h6 style={{color:"red"}}>{defaut}</h6>
<Button style={{ width: '20%' ,marginLeft:"40%",marginBottom:"10px"}}
variant="primary"
onClick={() => handleName(Data.name)}>Click me</Button>

</Card>
</div>
)
};
 
Profile.propTypes =
{
Data: PropTypes.object,
handleName: PropTypes.func
}

Profile.defaultProps={defaut:"Profile created!"}
export default Profile;
