{
    interface Options {
        el: string | HTMLElement
    }

    interface VueCls {
        options: Options
        init() : void
    }

    interface Vnode {
        tag: string
        text?: string
        children?: Vnode[]
    }

    // 虚拟 DOM
    class Dom {
        sendMessage(node: Vnode) {
            // console.log(node);
        }
    }

    class Vue extends Dom implements VueCls {
        options: Options
        constructor(options: Options) {
            super();
            this.options = options;
            this.init();
        }
        init() : void {
            let data: Vnode = {
                tag: 'div',
                children: [
                    { tag: 'h1', text: 'Hello World'},
                    { tag: 'h2', text: 'Hello World' }
                ]
            }

            this.sendMessage(data);
        }
    }

    new Vue({el: '#app'});
}

{
    class Decorator {
        readonly age: number = 18;
        constructor(valueText: string) {
            this._text = valueText;
        }

        private name(): string {
            return 'decorator';
        }

        public getName(): string {
            return this.name();
        }

        protected getAge() : number {
            return this.age;
        }

        static getInfo(): string {
            return 'static method';
        }

        private _text: string = 'decorator';

        get text() {
            return this._text + ' appended value';
        }

        set text(value: string) {
            this._text = value;
        }
    }

    // console.log(new Decorator('test').text);
}

{
    abstract class Animal {
        abstract makeSound(): void;
        move(): void {
            console.log('Animal is moving');
        }
    }

    class Dog extends Animal {
        makeSound(): void {
            console.log('Woof!');
        }
    }

    const dog = new Dog();
    dog.makeSound();
}