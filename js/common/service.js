angular.module('service',[])
        .constant('constValue',{ // angularJS 存放常量的服务
            msg:'Hello 1111', // 如果你想改变它的话 是可以的
            array:[1,2,3,4],
            providerType:'service'
        })
        .value('value',{      // ngularJS 存放变量的服务
            userName:'admin'
        })
        .factory('factory',[function(){  // 定义函数的
            
            function fn(){
                console.log('我是 工厂函数')
            }

            fn.log = function(){
                console.log('我是fn函数的静态方法');
            }
            return fn
        }])
        .service('service',[function(){

            this.name = 'zhangsan';
            this.age = 18;
            this.eat = function(){
                console.log( this.name + '在吃饭' )
            }
            this.goDie = function(){
                for (var key in  this){
                    delete this[key];
                }
            }
            this.happayBirthday = function(){
                this.age++;
                console.log('生日快乐')
            }

        }])
        .provider('provider',['constValue',function(constValue){
            switch (constValue.providerType){

                case 'value':
                this.$get = function(){  // 你可以返回 除了 constant的任何服务
                    return { // 返回一个value
                        a:'a',
                        b:0,
                        c:true,
                        d:[],
                        e:{},
                        f:function(){},
                        g:'lalala'
                    }
                }
                break;
                case 'factory':
                this.$get = function(){  // 你可以返回 除了 constant的任何服务
                    function fn(){
                        console.log('哈哈哈哈 this是window',this)
                    }
                    fn.age = 1800;
                    return fn  // 返回一个 factory
                }
                break;
                case 'service':
                this.$get = function(){  // 你可以返回 除了 constant的任何服务
                    
                    return new function(){  // 返回一个构造函数
                        this.age =180;
                    }
                } 
                break;
                default :
                this.$get = function(){
                    return {}
                }
                break;

            }


           
        }])