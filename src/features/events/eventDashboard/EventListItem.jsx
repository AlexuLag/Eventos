import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({event}) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item.Image size='tiny' circular src={event.hostPhotoURL} />
          <Item.Content>
            <Item.Header contet={event.title} />
            <Item.Description>hosted by {event.hostedBy}</Item.Description>
          </Item.Content>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
          <List horizontal>
            {event.attendees.map(attendee=>(
                <EventListAttendee key= {attendee.id} attendee={attendee}/>
            ))}

          </List>
      </Segment>
      <Segment clearing>
          <div>{event.description}</div>
          <Button color='teal' floated ='right' content ='view'/>
      </Segment>
    </Segment.Group>
  );
}
