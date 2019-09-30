

function _filter(array, predicate) {

    var new_array = [];

    _each(array, function(param) {

       // if가 true가 되는 조건은 predicate 함수에서 정한다.
       if( predicate(param) )
            new_array.push( param );
    });

    return new_array;
}


function _map(array, mapper){

    var new_array = [];

    // 어떤 객체에 접근하는 것은 predicate 함수가 처리한다.
    // 즉, 여기서 name에 접근하는 것은 _map 함수에서 직접적으로 처리하지 않는다.
    // 그렇게 된다면 param_users라는 객체에 특정 객체의 이름에 종속적이지 않게 된다.
    // 예를 들어 { id : 53 } 객체에서 id라는 이름을 갖는 객체가 있을 경우와
    // { phoneNumber : 01012345678 } 객체에서 phoneNumber 라는 이름을 갖는 객체가 매개변수로 들어오고
    // 해당 객체 이름을 _map() 함수에서 직접 접근 한다면 특정 객체의 이름에 종속적이기 때문에
    // 콜백함수에서 그 특정 객체에 대한 이름을 처리하게 한다.
    _each(array, function(param) {
        new_array.push( mapper(param) );
    });


    return new_array;
}



function _each(list, iterator) {
    for(var i = 0; i < list.length; i++){
        iterator(list[i]);
    }
    return list;
}


// a를 먼저 받고 b를 그 다음에 받고
// 받아둔 fn을 나중에 실행된다. (add 변수처럼 _curry(function(){}) 함수가 호출되었다면)
function _curry(fn) {
    return function(a) {

        return function(b) {

            return fn(a,b);
        }
    }

}


// 인자를 한번에 두개를 주는 방법은 아래와 같다.
function __curry(fn) {

    return function(a, b) {

        // 현재 이 함수의 인자가 2개 라면 바로 "fn(a,b)"를 리턴한다.
        if(arguments.length === 2) {
            return  fn(a, b);
        }

        return function(b) {

            return fn(a,b);
        }
    }

}



// 삼항 연산자로 변경
function ___curry(fn) {
    return function(a, b) {
        // 현재 이 함수의 인자가 2개 라면 바로 "fn(a,b)"를 리턴한다.
        return arguments.length === 2 ? fn(a, b) : function(b) { return fn(a,b); }
    }
}



// 오른쪽에서부터 인자를 적용하는 _curryr (right)를 생성한다.
function ___curryr(fn) {
    return function(a, b) {
        // fn() 함수의 인자 위치를 바꿔준다.
        return arguments.length === 2 ? fn(a, b) : function(b) { return fn(b, a); }
    }
}



function _get(obj, key) {
    // 여기서 null은
    // null == undefined 로 했을 경우 true 이다.
    // null === undefined인 경우는 false 이다.
    return obj == null ? undefined : obj[key];
}


