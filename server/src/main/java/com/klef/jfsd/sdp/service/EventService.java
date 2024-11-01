package com.klef.jfsd.sdp.service;

import java.util.List;

import com.klef.jfsd.sdp.DTO.CreateEventRequest;
import com.klef.jfsd.sdp.DTO.CreateEventResponse;
import com.klef.jfsd.sdp.models.Event;


public interface EventService {
	CreateEventResponse createEvent(CreateEventRequest createEventRequest);
	List<Event> getAllEvents();
	Event getEventByID(int eventID);
	boolean deleteEvent(int eventID);
}
