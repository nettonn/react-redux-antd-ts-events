import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

export interface EventState {
  guests: IUser[];
  events: IEvent[];
  error: string;
}

export const enum EventActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
  SET_ERROR = "SET_ERROR",
}

export interface SetGuestsAction {
  type: EventActionEnum.SET_GUESTS;
  payload: IUser[];
}

export interface SetEventsAction {
  type: EventActionEnum.SET_EVENTS;
  payload: IEvent[];
}

export interface SetErrorAction {
  type: EventActionEnum.SET_ERROR;
  payload: string;
}

export type EventAction = SetGuestsAction | SetEventsAction | SetErrorAction;
