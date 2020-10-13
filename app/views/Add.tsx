import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from '../../lib/Form'
import { defaultConfig } from '../config'
import { addContact, Contact } from '../api'

export function Add() {
  const history = useHistory()

  function onSubmit(contact: Contact): void {
    addContact(contact)
    history.push('/')
  }

  return (
    <Fragment>
      <h2>Add new contact</h2>
      <Form config={defaultConfig} onSubmit={onSubmit} />
    </Fragment>
  )
}
