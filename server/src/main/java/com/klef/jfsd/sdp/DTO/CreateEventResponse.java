package com.klef.jfsd.sdp.DTO;

public class CreateEventResponse {
    private int eventId;
    private String title;
    private String message;
    private boolean success;

    // Constructor
    public CreateEventResponse(int eventId, String title, String message, boolean success) {
        this.eventId = eventId;
        this.title = title;
        this.message = message;
        this.success = success;
    }

	public int getEventId() {
		return eventId;
	}

	public void setEventId(int eventId) {
		this.eventId = eventId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

    // Getters and Setters
    // Add all getters and setters here
}