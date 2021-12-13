import { Component } from 'react';

//----------------Footer-----------------
export class Footer extends Component {
    render() {
        const list = [];
        for (let i = 0; i < this.props.desc.length; i++) {
            list.push(
                //arrow함수 사용시 () 여러줄
                //arrow함수 사용시 {} 한줄 return
                //e = 클릭된 애의 정보들
                //밑줄, 배경색 변경 코드
                <h5 key={i} onClick={(e) => {
                    console.dir(e);
                    e.target.style.backgroundColor = 'beige';
                    e.target.style.textDecoration = 'underline';
                }}>
                    {this.props.desc[i]}
                </h5>);
        }
        return (<footer>{list}</footer>);
    }
}

