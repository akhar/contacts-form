import React, { Fragment, ReactElement, useState, useEffect } from 'react'
import { Contact, deleteContact, getContacts } from '../api'
import { Link } from 'react-router-dom'

export function List(): ReactElement {
  const [contacts, setContacts] = useState([])
  const [selected, setSelected] = useState('')

  useEffect(() => {
    setContacts(getContacts())
  }, [])

  function calculateAge(dateOfBirth: string): number {
    const ageInMilliseconds = Date.now() - Date.parse(dateOfBirth)
    const ageDate = new Date(ageInMilliseconds)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  function handleSelection(event): void {
    const { id } = event.target
    if (id === selected) {
      setSelected('')
    } else {
      setSelected(id)
    }
  }

  function handleDelete(): void {
    deleteContact(selected)
    setContacts(getContacts())
  }

  return (
    <Fragment>
      <h2>Contacts:</h2>
      {contacts.map((contact: Contact) => {
        const { name, phone, dateOfBirth, id } = contact
        return (
          <p
            key={id}
            id={id}
            onClick={handleSelection}
            className={selected === id ? 'selected listItem' : 'listItem'}
          >
            {name} {dateOfBirth && `(${calculateAge(dateOfBirth)} y.o.) `}
            {phone}
          </p>
        )
      })}

      <Link to="/add">
        <button>Add</button>
      </Link>
      {selected && <button onClick={handleDelete}>Delete selected</button>}
    </Fragment>
  )
}
