import { IEvent } from "../models/IEvent";
// import { sleep } from "../utils/functions";

export default class EventService {
  static async getEvents() {
    // await sleep(1000);
    const eventsString = localStorage.getItem("events") || "[]";
    return JSON.parse(eventsString) as IEvent[];
  }

  static async createEvent(event: IEvent) {
    // await sleep(1000);
    const eventsString = localStorage.getItem("events") || "[]";

    const events = JSON.parse(eventsString) as IEvent[];
    events.push(event);

    localStorage.setItem("events", JSON.stringify(events));
  }
}
