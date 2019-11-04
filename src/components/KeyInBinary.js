import React from 'react'

class KeyInBinary extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="input-group mb-5" key={this.props.encryptionKey}>
                <div className="input-group-prepend">
                    <span
                        className="input-group-text"
                        id="keyInBinary-addon"
                    >
                        Key in binary, {this.props.handleConvertToBinary(true).length} bits
                    </span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Key in binary"
                    aria-describedby="keyInBinary-addon"
                    defaultValue={this.props.handleConvertToBinary(true)}
                    readOnly
                />
            </div>
        )
    }
}

export default KeyInBinary