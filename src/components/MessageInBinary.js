import React from 'react'

class MessageInBinary extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="input-group mb-3" key={this.props.message}>
                <div className="input-group-prepend">
                    <span
                        className="input-group-text"
                    >
                        Message in binary, {this.props.handleConvertToBinary().length} bits
                    </span>
                </div>
                <textarea
                    className="form-control"
                    aria-label="With textarea"
                    readOnly
                    defaultValue={this.props.handleConvertToBinary()}
                >
                </textarea>
            </div>
        )
    }
}

export default MessageInBinary