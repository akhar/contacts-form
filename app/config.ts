import { FieldType, FormConfig } from '../lib/Form'

export const defaultConfig: FormConfig = {
  submitLabel: 'submit',
  fields: [
    {
      label: 'Name',
      type: FieldType.TEXT,
      name: 'name',
      required: true,
      validationMessage: 'Use more than one symbol',
    },
    {
      label: 'Phone',
      type: FieldType.PHONE,
      name: 'phone',
      required: true,
      validationMessage: 'Use numbers only',
    },
    {
      label: 'Date of birth',
      type: FieldType.DATE,
      name: 'dateOfBirth',
      required: false,
    },
  ],
}
