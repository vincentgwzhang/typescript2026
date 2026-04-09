class Logger {
    log(msg: string) {
        console.log(msg);
    }
}
class Html {
    render() {
        console.log('render')
    }
}
class App {
    run() {
        console.log('aaa');
    }
}

// Constructor 这个名字任意
type Constructor<T> = new (...args: any[]) => T

function pluginMixedin<T extends Constructor<App>>(Base: T) {

    return class extends Base {

        private Logger = new Logger();
        private Html = new Html();

        constructor(...args: any[]) {
            super(...args);
        }

        run() {
            this.Logger.log('abn');
        }

        render() {
            this.Logger.log('111');
            this.Html.render();
        }
    }

}

const mixins = pluginMixedin(App);
const app = new mixins();
app.run();