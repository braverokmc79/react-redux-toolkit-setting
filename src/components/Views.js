import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import { addView } from "../redux";



const Views = ({ count, addView }) => {
    const [number, setNumber] = useState();

    return (
        <div className='items'>
            <h2>조회수 : {count}</h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => addView(number)}>조회 하기!</button>
        </div>
    )
}


//공식 문서 : 설정
//https://react-redux.js.org/api/connect
const mapStateToProps = ({ views }) => {
    return {
        count: views.count
    }
}


//객체방식 액션 전달
const mapDispatchToProps = {
    addView: (number) => addView(number)
}


//Subscribers 컴포넌트에 연결하게전에 mapStateToProps 연결 설정을한다.
export default connect(mapStateToProps, mapDispatchToProps)(Views)