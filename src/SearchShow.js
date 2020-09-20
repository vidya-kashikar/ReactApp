import React from 'react';
import flight from './flights.json';
import ShowImage from './ShowImage.js';

import { Container, Grid, Header, List } from "semantic-ui-react";

const SearchShow = (props) => <Container>
<Grid>
  <Grid.Row>
    <Grid.Column>
      <List>
      {props.searchstring.ShowResultFlag ?
        flight.filter(el=>el.destination.toLowerCase()===props.searchstring.depart_city.toLowerCase() && el.source.toLowerCase()===props.searchstring.org_city.toLowerCase()).map(el => {
          return (  
            <table><tbody><tr><td width={'70%'}>
            <List.Item key={el.flight_id}>
            <Header>{el.source} >{el.destination}</Header>
            <List.Content><h2>{el.fare}</h2></List.Content>
            <List.Content><small>{el.flight_id}</small></List.Content>
              <List.Content>
                {el.source_code} >{el.destination_code}
              </List.Content>
              <List.Content>Depart:{el.departs_at}</List.Content>
              <List.Content>Arrive:{el.arrives_at}</List.Content>
              </List.Item>
              </td>
              <td><ShowImage/><br/>
              <button name="flightRev">Book this flight</button>  
            </td></tr>
            </tbody>
            </table>  
          );
        }) :null}
      </List>
    </Grid.Column>
  </Grid.Row>
</Grid>
</Container>

export default SearchShow;

/*
const Search=
<input type="text" />;

export default searchShow;*/