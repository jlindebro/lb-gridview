import React, { Component } from 'react'
import PropTypes from 'prop-types'


const styles = {
  listStyle: 'none',
  placeSelf: 'center',
  width: '100%',
  height: '100%',
}

export class GridViewCell extends Component {
  render() {
    const TagName = this.props.tagName
    return (
      <TagName
        style={{
          ...styles,
          ...this.props.style,
        }}
      >
        {this.props.children}
      </TagName>
    )
  }
}
GridViewCell.defaultProps = {
  tagName: 'div',
}
GridViewCell.propTypes = {
  tagName: PropTypes.string,
}

export default GridViewCell
