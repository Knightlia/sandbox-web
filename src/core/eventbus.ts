interface Subscription {
    event: string;
    callback: Callback;
    context: unknown;
}

type Callback = (...args: unknown[]) => void;

export default class EventBus {

    private _subscriptions: Record<string, Subscription[]> = {};

    subscribe(event: string, callback: Callback, context: unknown): void {
        this._subscriptions[event] = this._subscriptions[event] || [];
        this._subscriptions[event].push({ event, callback, context });
        console.debug(`[EventBus] New subscription on event ${event}`);
    }

    publish(event: string, ...args: unknown[]): void {
        this._subscriptions[event] = this._subscriptions[event] || [];
        this._subscriptions[event].forEach(sub => {
            sub.callback.call(sub.context, ...args);
        });
        console.debug(`[EventBus] Event ${event} published.`);
    }

    unsubscribeAll(context: unknown): void {
        for (const event in this._subscriptions) {
            this._subscriptions[event] = this._subscriptions[event]
                .filter(sub => sub.context !== context);
        }
    }
}
