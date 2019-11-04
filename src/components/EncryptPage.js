import React from 'react'

import Message from './Message'
import MessageInBinary from './MessageInBinary'
import Key from './Key'
import KeyInBinary from './KeyInBinary'
import DividedMessage from './DividedMessage'
import Encrypt from './Encrypt'


class EncryptPage extends React.Component {
    constructor(props) {
        super(props)

        this.handleSetMessage = this.handleSetMessage.bind(this)
        this.handleSetKey = this.handleSetKey.bind(this)
        this.handleConvertToBinary = this.handleConvertToBinary.bind(this)
        this.handleCutIntoBlocks = this.handleCutIntoBlocks.bind(this)
        this.handleConvertToASCII = this.handleConvertToASCII.bind(this)
        this.handleEncrypt = this.handleEncrypt.bind(this)

        this.state = {
            message: '',
            encryptionKey: '',
            defaultKey: 'QWER'
        }
    }

    handleSetMessage(e) {
        const message = e.target.value
        this.setState({ message })
    }

    handleSetKey(e) {
        let encryptionKey = e.target.value
        this.setState({ encryptionKey })
    }

    handleConvertToBinary(isKey) {
        let message = this.state.message
        let encryptionKey = this.state.encryptionKey
        const defaultKey = this.state.defaultKey
        const zeroPad = (num) => {
            return '00000000'.slice(String(num).length) + num
        }
        const toBinary = (str) => {
            return str.replace(/[\s\S]/g, (str) => {
                return zeroPad(str.charCodeAt().toString(2));
            })
        }
        if (isKey) {
            encryptionKey += defaultKey.slice(encryptionKey.length, defaultKey.length)

        }
        else {
            for (message.length; message.length % 8;) {
                message += '_'
            }
        }
        return isKey ? toBinary(encryptionKey) : toBinary(message)
    }

    handleConvertToASCII(bin) {
        return bin.replace(/\s*[01]{8}\s*/g, (bin) => {
            return String.fromCharCode(parseInt(bin, 2))
        })
    }

    handleCutIntoBlocks() {
        const messageinBinary = this.handleConvertToBinary()
        const blocks = []
        if (messageinBinary.length > 0) {
            for (let i = 0; i < messageinBinary.length; i += 64) {
                blocks.push([messageinBinary.slice(i, i + 32), messageinBinary.slice(i + 32, i + 64)])
            }
        }
        return blocks
    }

    handleEncrypt(course) {
        const encryptionKey = this.handleConvertToBinary(true).split('')
        let encryptedBlocks = this.handleCutIntoBlocks()
        const encrypt = (blocks) => {
            return blocks.map(block => {
                const Left = block[0].split('')
                const Right = block[1].split('')
                const LeftPrim = Right.join('')
                const RightPrim = Left.map((bit, index) => {
                    const and = Right[index] & encryptionKey[index]
                    const xor = bit ^ and
                    return xor
                }).join('')
                return [LeftPrim, RightPrim]
            })
        }
        for (let i = 0; i < course; i++) {
            encryptedBlocks = encrypt(encryptedBlocks)
        }
        return encryptedBlocks
    }

    render() {
        return (
            <div>
                <Message
                    handleSetMessage={this.handleSetMessage}
                />
                <MessageInBinary
                    message={this.state.message}
                    handleConvertToBinary={this.handleConvertToBinary}
                />
                <Key
                    handleSetKey={this.handleSetKey}
                />
                <KeyInBinary
                    encryptionKey={this.state.encryptionKey}
                    handleConvertToBinary={this.handleConvertToBinary}
                />
                <DividedMessage
                    handleCutIntoBlocks={this.handleCutIntoBlocks}
                    handleConvertToASCII={this.handleConvertToASCII}
                />
                <Encrypt
                    course={1}
                    handleEncrypt={this.handleEncrypt}
                    handleConvertToASCII={this.handleConvertToASCII}
                />
                <Encrypt
                    course={2}
                    handleEncrypt={this.handleEncrypt}
                    handleConvertToASCII={this.handleConvertToASCII}
                />
                <Encrypt
                    course={3}
                    handleEncrypt={this.handleEncrypt}
                    handleConvertToASCII={this.handleConvertToASCII}
                />
                <Encrypt
                    course={4}
                    handleEncrypt={this.handleEncrypt}
                    handleConvertToASCII={this.handleConvertToASCII}
                />
                <Encrypt
                    course={5}
                    handleEncrypt={this.handleEncrypt}
                    handleConvertToASCII={this.handleConvertToASCII}
                />
                <Encrypt
                    course={6}
                    handleEncrypt={this.handleEncrypt}
                    handleConvertToASCII={this.handleConvertToASCII}
                />
            </div>
        )
    }
}

export default EncryptPage