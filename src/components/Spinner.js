import React, { Component } from 'react'
import load from '../load.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center align-middle'>
        <img src={load} alt="spinner" />
      </div>
    )
  }
}
