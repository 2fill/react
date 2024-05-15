import { useState } from 'react';
import './Blog.css';

function Blog() {
    
    /* state / [이름, 함수] / 데이터마인딩: {state}
    변수에 들어 있는 값이 변경될 때, html 자동 재랜더링 x
    state에 들어 있는 값이 변경될 때, html 자동 재랜더링
    즉, 자주 변경되는 정보는 state로 만들기 */
    let [글제목, 글제목변경] = useState(['짱구', '철수', '맹구', '유리', '훈이']);
    let [따봉, 따봉변경] = useState([0, 0, 0, 0, 0]);
    let [모달, 모달변경] = useState(0);
    let [모달제목, 모달제목변경] = useState('');
    let [입력값, 입력값변경] = useState('');
    /* 입력 후 초기화 함수 */
    let send = () => {
        입력값변경('');
    };

    return (
        /* return에 대표 div 한 개 */
        <div className="blog-container">
            <h2>Blog</h2>
            <div className="create">
                {/* onChange: 입력값이 변경되었을 때 */}
                <input onChange={(e) => {
                    입력값변경(e.target.value);
                }}
                placeholder='              제목을 입력하세요.'
                /* input에 적용해야 하니까 */
                value = {입력값}
                ></input>

                {/* onClick 이벤트 핸들러 / onClick = { 함수 } */}
                <button onClick={() => {
                    /* trim(): 앞쪽과 뒤쪽의 공백 제거 */
                    if(입력값.trim() == ''){
                        /* alert: 알림창 */
                        alert("제목을 입력하세요.");
                    }
                    else{
                        /* 배열 복사 */
                        let copy글제목 = [...글제목];
                        let copy따봉 = [...따봉];
                        /* unshift: 값을 배열 앞에 추가 */
                        copy글제목.unshift(입력값);
                        copy따봉.unshift(0);
                        /* 배열 첫 번째 값 입력 */
                        글제목변경(copy글제목);
                        send();
                    }
                }}>업로드</button>
            </div>
            
            {/* map(함수):
            배열 크기만큼 함수 안의 코드 실행 */}
            {   
                글제목.map (function(element, count){
                    return(
                        <List index={count} 글제목={글제목} 글제목변경={글제목변경} 따봉={따봉} 따봉변경={따봉변경} 모달={모달} 모달변경={모달변경} 모달제목변경={모달제목변경}></List>
                    )
                })
            }

            {
                모달 == 1 ? <Modal 모달제목={모달제목}></Modal> : null
            }

        </div>
    );
}

function Modal({모달제목}) {

    return (
        <div className="modal">
            <h4>{모달제목}</h4>
            <p>날짜</p>
            <p>내용</p>
        </div>
    )
}

/* props: 부모 컴포넌트에서 자식 컴포넌트로 값 전달 */
function List(props) {

    return (
        <div className="list">
            <h4 onClick={() => {
                props.모달변경(!props.모달);
                props.모달제목변경(props.글제목[props.index]);
            }}>{props.글제목[props.index]}<span onClick={(event) => {
                let copy따봉 = [...props.따봉];
                copy따봉[props.index] += 1;
                props.따봉변경(copy따봉);
                event.stopPropagation();
            }}>👍</span> {props.따봉[props.index]} </h4>
            <p>5월 5일 발행</p>
            <button onClick={() => {
                let copy글제목 = [...props.글제목];
                let copy따봉 = [...props.따봉];
                /* splice(): 특정 인덱스부터 1개의 값 제거 */
                copy글제목.splice(props.index, 1);
                copy따봉.splice(props.index, 1);
                props.글제목변경(copy글제목);
                props.따봉변경(copy따봉);
            }}>삭제</button>
        </div>
    )
}

export default Blog;
