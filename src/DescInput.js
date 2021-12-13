import { Component } from 'react';

//----------------DescInput-----------------
export class DescInput extends Component {

    render() {
        return (
            <form className='desc-input' 
                    onSubmit={(e)=>{
                         e.preventDefault();//창 하나 새로 뜨는것을 막아줌
                        const content=e.target.content.value;
                        this.props.create(content);
                    }
                    }>
                <input type='text' name="content"/>
                <button type='submit' >추가</button>
            </form>
        );
    }
}

export default DescInput;
