import React from 'react'
import { connect } from 'react-redux';
//import { addSubscriber, removeSubscriber } from "../redux/subscribers/actions";
import { addSubscriber, removeSubscriber } from "../redux";



const Subscribers = ({ count, addSubscriber, removeSubscriber }) => {
    return (
        <div className='items'>
            <h2>Subscribers 컴포넌트 구독자 수:{count}</h2>
            <button onClick={() => addSubscriber()}>구독 하기!</button>
            <button onClick={() => removeSubscriber()}>구독 취소하기!</button>
        </div>
    )
}


//공식 문서 : 설정
//https://react-redux.js.org/api/connect

//rootReducer.js 에 설정한 combine 설정값을 가져온다. 
// const rootReducer = combineReducers({
//     subscribers: subscriberReducer,
//     views: viewReducer
// });
const mapStateToProps = ({ subscribers }) => {
    //console.log(state, 'state');
    return {
        count: subscribers.count
    }
}


//함수 방식
const mapDispatchToProps = (dispatch) => {
    return {
        addSubscriber: () => dispatch(addSubscriber()),
        removeSubscriber: () => dispatch(removeSubscriber())
    }
}

//객체방식
// const mapDispatchToProps = {
//     addSubscriber,
//     removeSubscriber
// }


//Subscribers 컴포넌트를 export 하기 전에 mapStateToProps , 와 mapDispatchToProps 연결 설정을한다.
export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)