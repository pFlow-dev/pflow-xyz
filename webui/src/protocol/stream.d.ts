import { Model, Result, Vector } from "./model";
export type Handler<TEvent extends Event> = {
    (s: Stream<TEvent>, evt: TEvent): void;
};
export type Dispatcher<TEvent extends Event> = {
    getHandler: (action: string) => Handler<TEvent>;
    on: (action: string, handler: Handler<TEvent>) => void;
    off: (action: string) => void;
    onFail: (handler: Handler<TEvent>) => void;
    fail: Handler<TEvent>;
};
type StreamArgs<TEvent extends Event> = {
    model: Model;
};
type Event = {
    action: string;
    multiple: number;
};
type EventLog<TEvent> = {
    seq: number;
    event: TEvent;
    ts: number;
};
export declare class Stream<TEvent extends Event> {
    readonly dispatcher: Dispatcher<TEvent>;
    state: Vector;
    model: Model;
    history: Array<EventLog<TEvent>>;
    private seq;
    constructor({ model }: StreamArgs<TEvent>);
    dispatch(evt: TEvent): Result;
    restart(): void;
    private newDispatcher;
}
export {};
