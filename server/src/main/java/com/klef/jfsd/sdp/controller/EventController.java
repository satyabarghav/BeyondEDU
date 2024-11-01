package com.klef.jfsd.sdp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klef.jfsd.sdp.DTO.CreateEventRequest;
import com.klef.jfsd.sdp.DTO.CreateEventResponse;
import com.klef.jfsd.sdp.models.Event;
import com.klef.jfsd.sdp.service.EventService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/events")
public class EventController {
	
	@Autowired
	private EventService eventService;
	
	@PostMapping("/create-event")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<CreateEventResponse> createEvent(@RequestBody CreateEventRequest createEventRequest){
		try {
            CreateEventResponse response = eventService.createEvent(createEventRequest);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new CreateEventResponse(0, createEventRequest.getTitle(), e.getMessage(), false));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new CreateEventResponse(0, createEventRequest.getTitle(), 
                    "Server error occurred", false));
        }
	}
	
	@GetMapping("/viewallevents")
	public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }
	
	@GetMapping("/{id}")
	public ResponseEntity<Event> getEventById(@PathVariable("id") int eventId) {
        Event event = eventService.getEventByID(eventId);
        if (event != null) {
            return ResponseEntity.ok(event);
        } else {
            return ResponseEntity.notFound().build(); // Return 404 if not found
        }
    }
	
	@DeleteMapping("/delete/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> deleteEvent(@PathVariable("id") int eventID) {
	    boolean isDeleted = eventService.deleteEvent(eventID);
	    if (isDeleted) {
	        return ResponseEntity.ok("Event deleted successfully");
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Event not found");
	    }
	}

}
