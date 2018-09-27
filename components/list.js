import React from 'react';

let inputValue = '';
export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3]
        }
    }
    /** 当输入框输入时触发 */
    onChange(e) {
        e.persist();
        inputValue = e.target.value;
    }

    /** 当点击提交按钮时触发 */
    onSubmit(e) {
        this.state.list.push(inputValue);
        this.setState({
            list: this.state.list
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
                <input placeholder="请输入" onChange={(e) => { this.onChange(e) }} />
                <button onClick={(e) => { this.onSubmit(e) }}>提交</button>
            </div>
        )
    }
}