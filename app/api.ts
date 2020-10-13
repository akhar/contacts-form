import uniqid from 'uniqid'

export interface Contact {
  name: string
  phone: string
  dateOfBirth: string
  id?: string
}

const KEY = 'contacts'

export function getContacts(): Contact[] {
  const storage = window.localStorage
  const storedContacts = storage.getItem(KEY) || '[]'
  return JSON.parse(storedContacts)
}

export function addContact(contact: Contact): void {
  const storage = window.localStorage
  const contacts = JSON.parse(storage.getItem(KEY) || '[]')
  const id = uniqid()

  storage.setItem(KEY, JSON.stringify(contacts.concat({ ...contact, id })))
}

export function deleteContact(contactId: string): void {
  const storage = window.localStorage
  const contacts = JSON.parse(storage.getItem(KEY) || '[]')

  const contactsToStay = contacts.filter((contact) => contact.id !== contactId)
  storage.setItem(KEY, JSON.stringify(contactsToStay))
}
