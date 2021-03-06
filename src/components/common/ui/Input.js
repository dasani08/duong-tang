import React from 'react'

class Input extends React.Component {
  displayLabel() {
    if (this.props.label) {
      return <label htmlFor={this.props.id}>{this.props.label}</label>
    }
  }

  displayInvalid() {
    let isInvalid = 'form-control'
    if (this.props.help) {
      isInvalid = 'form-control is-invalid'
    }
    return isInvalid
  }

  displayHelp() {
    if (this.props.help) {
      return <small className="form-text">{this.props.help}</small>
    }
  }
  render() {
    return (
      <div className="form-group">
        {this.displayLabel()}
        <input
          id={this.props.id}
          type={this.props.type}
          className={this.displayInvalid()}
          placeholder={this.props.placeholder || ''}
          value={this.props.value}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
        />
        {this.displayHelp()}
      </div>
    )
  }
}

Input.defaultProps = {
  isClassName: 'form-control'
}

export default Input
