import React, { Fragment } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form } from '../../lib/Form'
import { config } from '../config'
import { addContact } from '../communication/api'
import { Contact } from '../model'

export function Add() {
  const history = useHistory()

  function onSubmit(contact: Contact): void {
    addContact(contact)
    history.push('/')
  }

  return (
    <Fragment>
      <h3>Add a new contact</h3>
      <Form config={config} onSubmit={onSubmit} />
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </Fragment>
  )
}
