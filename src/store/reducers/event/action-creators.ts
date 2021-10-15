import { IUser } from "../../../models/IUser";
import {
  EventActionEnum,
  SetErrorAction,
  SetEventsAction,
  SetGuestsAction,
} from "./types";
import { IEvent } from "../../../models/IEvent";
import { AppDispatch } from "../../index";
import UserService from "../../../api/UserService";
import EventService from "../../../api/EventService";

export const EventActionCreators = {
  setGuests: (guests: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload: guests,
  }),
  setEvents: (events: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload: events,
  }),
  setError: (error: string): SetErrorAction => ({
    type: EventActionEnum.SET_ERROR,
    payload: error,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(EventActionCreators.setError(""));

      const response = await UserService.getUsers();
      const users = response.data;
      if (users) {
        dispatch(EventActionCreators.setGuests(users));
      } else {
        dispatch(EventActionCreators.setError("Error loading guests"));
      }
    } catch (e: any) {
      dispatch(EventActionCreators.setError(e.message || "There is an error!"));
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(EventActionCreators.setError(""));

      const events = await EventService.getEvents();
      if (events.length) {
        const filteredEvents = events.filter(
          (event: IEvent) =>
            event.author === username || event.guests.includes(username)
        );
        dispatch(EventActionCreators.setEvents(filteredEvents));
      }
    } catch (e: any) {
      dispatch(EventActionCreators.setError(e.message || "There is an error!"));
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      dispatch(EventActionCreators.setError(""));

      await EventService.createEvent(event);
    } catch (e: any) {
      dispatch(EventActionCreators.setError(e.message || "There is an error!"));
    }
  },
};
