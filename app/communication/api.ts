import { Contact, ContactID, Key } from '../model'
import {
  deleteContactFromStorage,
  getAllContactsFormStorage,
  putContactIntoStorage,
} from './storage'

// TODO: errors management

export function getAllContacts(): Contact[] {
  return getAllContactsFormStorage()
}

export function addContact(contact: Contact): void {
  putContactIntoStorage(contact)
}

export function deleteContact(id: ContactID): void {
  deleteContactFromStorage(id)
}
