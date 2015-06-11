import immutable from "immutable";

export default class State {

    constructor(state, callback) {
        this._state = immutable.fromJS(state || {});
        this._previousState = null;
        this._callback = callback;
    }

    set(state, path?) {
        if (this._state === state) return;
        // Previous state if useful for debugging global app state diff.
        // It's easy with: https://github.com/intelie/immutable-js-diff
        this._previousState = this._state;
        this._state = state;
        this._callback(state);
    }

    get() {
        return this._state;
    }

    getIn(path) {
        return this._state.getIn(path);
    }

    save(): Object {
        return this._state.toJS();
    }

    toConsole() {
        console.log(JSON.stringify(this.save())); // eslint-disable-line no-console
    }

    cursor(path: Array<string>) {
        return (arg) => {
            if (!arg)
                return this._state.getIn(path);
            if (Array.isArray(arg))
                return this._state.getIn(path.concat(arg));
            this.set(this._state.updateIn(path, arg), path);
        };
    }

}
