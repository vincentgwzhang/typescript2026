{
    const Base: ClassDecorator = (target) => {
        target.prototype.baseUrl = 'http://localhost:3000';
        target.prototype.fn = () => {
            // console.log('fn');
        }
    }

    /**
     * 注意: 其实在 http 上可以不做 @Base, 然后在运行 Base(Http); 也可以，这样更灵活
     */
    @Base
    class Http {
        // ...
    }

    const http: any = new Http();
    http.fn();
}

{
    const Base = (name: string) => {
        const fn: ClassDecorator = (target) => {
            target.prototype.baseUrl = 'http://localhost:3000';
            target.prototype.fn = () => {
                // console.log(`${name} is running`);
            }
        }
        return fn;
    }

    /**
     * 下面的 zhang san 就是传入到 name 的参数
     */
    @Base('zhang san')
    class Http {
        // ...
    }

    const http: any = new Http();
    http.fn();
}

{
    const Base = (name: string) => {
        const fn: ClassDecorator = (target) => {
            target.prototype.baseUrl = 'http://localhost:3000';
            target.prototype.fn = () => {
                // console.log(`${name} is running`);
            }
        }
        return fn;
    }

    const Get = (data: any) => {
        const fn: MethodDecorator = (target, propertyKey, descriptor: PropertyDescriptor) => {
            descriptor.value(data)
        }
        return fn;
    }

    const Post = (data: any) => {
        const fn: MethodDecorator = (target, propertyKey, descriptor: PropertyDescriptor) => {
            descriptor.value(data)
        }
        return fn;
    }

    /**
     * 下面的 zhang san 就是传入到 name 的参数
     */
    @Base('zhang san')
    class Http {
        @Get('input data 1')
        getList(data: any) {
            console.log(data);
        }

        @Post('input data 2')
        add(data: any) {
            console.log(data);
        }

        // ...
    }

    const http: any = new Http();
    http.getList('input data 3');
    http.add('input data 4');
}