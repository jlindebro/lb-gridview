import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class GridView extends Component {
  constructor() {
    super()
  }
  render() {
    const styles = {
      grid: {
        display: 'grid',
        padding: 0,
        margin: 0,
        height: '100%',
        width: '100%',
        gridColumnGap: 0,
        gridRowGap: 0,
        gridTemplateRows: 'auto',
        gridTemplateColumns: `repeat(5, 100fr)`,
        gridAutoFlow: 'dense',
        overflowX: 'hidden',
      },
    }

    const TagName = this.props.tagName
    
    return (
      <TagName style={{...styles.grid, ...this.props.style}}>
        {this.props.children}
      </TagName>
    )
  }
}
GridView.defaultProps = {
  tagName: 'div',
}
GridView.propTypes = {
  style: PropTypes.object,
}

export default GridView
