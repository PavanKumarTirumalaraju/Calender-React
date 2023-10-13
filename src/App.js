export default function App() {
  return (
    <div>
      <h1> Itinerary for 7 Days in Chicago</h1>
      <h2>
        Welcome to Chicago,Pavan Check Out this calender to get to know the city
        and see all the sights during stay
      </h2>
      <Calender />
    </div>
  );
}

function Calender() {
  return (
    <div className="Calender">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thrusday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event="Fancy Dinner" color="green " location />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Fancy Dinner" color="pink" />
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Fancy Dinner" color="green " />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <Event event="Dining " color="green " />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Watches" color="green " />
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Shopping" color="green " />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 am</td>
            <Event event="Fancy Dinner" color="pink " />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Fancy Dinner" color="pink " />
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <Event event="Mojoto" color="green " />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <Event event="Indian Food" color="green " />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <Event event="Taco Bell" color="green " />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Starbucks" color="green " />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Chipotle" color="green " />
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <Event />
            <td></td>
            <Event event="Deep Dish" color="blue " />
            <td></td>
            <td></td>
            <td></td>
            <Event
              event="McD burger"
              color="blue "
              location="529 michicagn ave"
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Event(props) {
  return (
    <td className={props.color}>
      <h5>{props.event}</h5>
      <p>{props.location}</p>
    </td>
  );
}
