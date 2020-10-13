import uniqid from 'uniqid'

export interface Contact {
  name: string
  phone: string
  dateOfBirth: string
  id?: string
}

enum Key {
  CONTACTS = 'contacts',
}

export function getContacts(): Contact[] {
  const storage = window.localStorage
  const storedContacts = storage.getItem(Key.CONTACTS) || '[]'
  return JSON.parse(storedContacts)
}

export function addContact(contact: Contact): void {
  const storage = window.localStorage
  const contacts = JSON.parse(storage.getItem(Key.CONTACTS) || '[]')
  const id = uniqid()

  storage.setItem(
    Key.CONTACTS,
    JSON.stringify(contacts.concat({ ...contact, id }))
  )
}

export function deleteContact(contactId: string): void {
  const storage = window.localStorage
  const contacts = JSON.parse(storage.getItem(Key.CONTACTS) || '[]')

  const contactsToStay = contacts.filter((contact) => contact.id !== contactId)
  storage.setItem(Key.CONTACTS, JSON.stringify(contactsToStay))
}
