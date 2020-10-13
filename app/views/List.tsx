import React, { Fragment, ReactElement, useState, useEffect } from 'react'
import { deleteContact, getAllContacts } from '../communication/api'
import { Link } from 'react-router-dom'
import { Contact } from '../model'

export function List(): ReactElement {
  const [contacts, setContacts] = useState([])
  const [selected, setSelected] = useState('')

  useEffect(() => {
    setContacts(getAllContacts())
  }, [])

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
    setContacts(getAllContacts())
  }

  function calculateAge(dateOfBirth: string): number {
    const ageInMilliseconds = Date.now() - Date.parse(dateOfBirth)
    const ageDate = new Date(ageInMilliseconds)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return (
    <Fragment>
      <h3>Contacts</h3>
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
