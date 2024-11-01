package com.klef.jfsd.sdp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.jfsd.sdp.DTO.CreateEventRequest;
import com.klef.jfsd.sdp.DTO.CreateEventResponse;
import com.klef.jfsd.sdp.models.Event;
import com.klef.jfsd.sdp.repository.EventRepository;

@Service
public class EventServiceImpl implements EventService {
	
	@Autowired
	private EventRepository eventRepository;

	@Override
	public CreateEventResponse createEvent(CreateEventRequest createEventRequest) {
		try {
			Event event = new Event();
			System.out.println(createEventRequest.getClassification());
			event.setTitle(createEventRequest.getTitle());
			event.setDescription(createEventRequest.getDescription());
			event.setEventDate(createEventRequest.getEventDate());
			event.setLocation(createEventRequest.getLocation());
			event.setMaxParticipants(createEventRequest.getMaxParticipants());
			event.setEventType(createEventRequest.getEventType());
			event.setClassification(createEventRequest.getClassification());
			

			Event savedEvent = eventRepository.save(event);

			return new CreateEventResponse(savedEvent.getId(), savedEvent.getTitle(), "Event created successfully",
					true);

		} catch (Exception e) {
			return new CreateEventResponse(0, createEventRequest.getTitle(),
					"Failed to create event: " + e.getMessage(), false);
		}
	}

	@Override
	public List<Event> getAllEvents() {
		return eventRepository.findAll();
	}

	@Override
	public Event getEventByID(int eventID) {
		Optional<Event> event = eventRepository.findById(eventID);
		return event.orElse(null);
	}

	@Override
	public boolean deleteEvent(int eventID) {
		try {
            // Check if the event exists
            if (eventRepository.existsById(eventID)) {
                eventRepository.deleteById(eventID); // Delete the event
                return true; // Return true if deletion was successful
            } else {
                return false; // Return false if the event was not found
            }
        } catch (Exception e) {
            // Handle any exceptions that occur during deletion
            return false; // Return false if an error occurs
        }
	}

}
