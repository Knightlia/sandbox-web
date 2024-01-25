export default class Container {

    private static readonly _items: Record<string, any> = {};

    static register(o: any): void {
        this._items[o.name] = new o();
    }

    static resolve<T>(o: { new(): T }): T {
        const key = o.name;
        if (key in this._items) {
            return this._items[key];
        }
        throw Error(`No object ${key} registered with container.`);
    }
}
