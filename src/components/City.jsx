import Card from "react-bootstrap/Card";

const City = ({ data }) => {
  const image = "http://openweathermap.org/img/wn/";
  let degrees = data.main.temp;
  let maxdegrees = data.main.temp_max;
  let mindegrees = data.main.temp_min;

  degrees = degrees.toFixed(1);
  maxdegrees = maxdegrees.toFixed(1);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title className="mt-4">{data.name}</Card.Title>
      <Card.Text>{data.weather[0].description}</Card.Text>
      <Card.Img variant="top" src={image + data.weather[0].icon + "@2x.png"} />
      <Card.Body className="w-100 d-flex align-items-center justify-content-evenly mb-4">
        <Card.Text className="degrees">{degrees}°</Card.Text>

        <div>
          <Card.Text>
            MAX:
            {" " + maxdegrees}°
          </Card.Text>
          <Card.Text>
            MIN:
            {" " + mindegrees}°
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default City;
