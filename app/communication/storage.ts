import uniqid from 'uniqid'
import { Contact, ContactID, Key } from '../model'

export function putContactIntoStorage(contact: Contact): void {
  const storage = window.localStorage
  const contacts = JSON.parse(storage.getItem(Key.CONTACTS) || '[]')
  const id = uniqid()

  storage.setItem(
    Key.CONTACTS,
    JSON.stringify(contacts.concat({ ...contact, id }))
  )
}

export function getAllContactsFormStorage(): Contact[] {
  const storage = window.localStorage
  const storedContacts = storage.getItem(Key.CONTACTS) || '[]'
  return JSON.parse(storedContacts)
}

export function deleteContactFromStorage(id: ContactID): void {
  const storage = window.localStorage
  const contacts = JSON.parse(storage.getItem(Key.CONTACTS) || '[]')

  const contactsToStay = contacts.filter((contact) => contact.id !== id)
  storage.setItem(Key.CONTACTS, JSON.stringify(contactsToStay))
}
