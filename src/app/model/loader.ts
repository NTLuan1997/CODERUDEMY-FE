class Loader {
    loader: Boolean = false;

    constructor() { }

    getLoader() {
        return this.loader;
    }

    setLoader(status: Boolean) {
        this.loader = status;
    }
}

export const loader = new Loader();