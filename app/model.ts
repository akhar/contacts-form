export type Contact = {
  name: string
  phone: string
  dateOfBirth: string
  id?: ContactID
}

export enum Key {
  CONTACTS = 'contacts',
}

export type ContactID = string
