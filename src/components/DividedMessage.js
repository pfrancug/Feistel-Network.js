import React from 'react'

class DividedMessage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.handleCutIntoBlocks().map((block, index) => {
                    return (
                        <div key={block[0] + block[1] + index}>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">Left0 and Right0</span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={block[0]}
                                    readOnly />
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={block[1]}
                                    readOnly />
                            </div>
                            <div className="input-group mb-1">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">Left0 and Right0</span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={this.props.handleConvertToASCII(block[0])}
                                    readOnly />
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue={this.props.handleConvertToASCII(block[1])}
                                    readOnly />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default DividedMessage