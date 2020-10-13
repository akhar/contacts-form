import React, { Fragment, ReactElement } from 'react'
import { Contact, getContacts } from '../api'
import { Link } from 'react-router-dom'

export function List(): ReactElement {
  const contacts: Contact[] = getContacts()

  function calculateAge(dateOfBirth: string): number {
    const ageInMilliseconds = Date.now() - Date.parse(dateOfBirth)
    const ageDate = new Date(ageInMilliseconds)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  function handleSelection(event): void {
    const { id } = event.target.id
    console.debug(id)
  }

  return (
    <Fragment>
      <h2>Contacts:</h2>
      {contacts.map((contact: Contact) => {
        const { name, phone, dateOfBirth, id } = contact
        return (
          <p key={id} id={id} onClick={handleSelection}>
            {name} {dateOfBirth && `(${calculateAge(dateOfBirth)} y.o.) `}
            {phone}
          </p>
        )
      })}

      <Link to="/add">
        <button>Add</button>
      </Link>
    </Fragment>
  )
}
