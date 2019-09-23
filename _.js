

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