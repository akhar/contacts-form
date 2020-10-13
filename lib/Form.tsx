import React, { Fragment, ReactElement, useState } from 'react'
import { Contact } from '../app/api'

export enum FieldType {
  TEXT = 'text',
  PHONE = 'tel',
  DATE = 'date',
}

export type Field = {
  label: string
  type: FieldType
  name: string
  required: boolean
  validationMessage?: string
}
export type FormConfig = {
  submitLabel: string
  fields: Field[]
}

export interface Form {
  config: FormConfig
  onSubmit: (contact: Contact) => void
}

export function Form(props: Form): ReactElement {
  const {
    onSubmit,
    config: { submitLabel, fields },
  } = props

  const [values, setValues] = useState({
    name: '',
    phone: '',
    dateOfBirth: '',
  })

  const [validity, setValidity] = useState(
    fields.map((field) => ({ [field.name]: true }))
  )

  const isValid = fields.reduce((result: boolean, field: Field): boolean => {
    return result || validity[field.name]
  }, false)

  function handleChange(event): void {
    const { name, value, type } = event.target
    setValues({ ...values, [name]: value })

    switch (type) {
      case FieldType.TEXT:
        if (value.length < 2) {
          setValidity({ ...validity, [name]: false })
        } else {
          setValidity({ ...validity, [name]: true })
        }
        break

      case FieldType.PHONE:
        setValidity({ ...validity, [name]: !isNaN(value) })
        break

      case FieldType.DATE:
        if (value === '') {
          setValidity({ ...validity, [name]: true })
        } else {
          setValidity({
            ...validity,
            [name]: Date.now() - Date.parse(value) > 0,
          })
        }
        break
    }
  }

  function handleSubmit(): void {
    onSubmit(values)
  }

  const isReqEmpty: boolean = fields
    .filter((field: Field) => field.required === true)
    .map((field) => field.name)
    .reduce((result: boolean, name: string): boolean => {
      return result || values[name].length < 1
    }, false)

  return (
    <Fragment>
      {fields.map((field: Field) => (
        <div key={field.name} className="formRow">
          <label
            className={field.required ? 'required' : null}
            htmlFor={field.name}
          >
            {field.label}
          </label>
          <input
            required={field.required}
            name={field.name}
            type={field.type}
            onChange={handleChange}
          />
          {validity[field.name] === false && (
            <div className="validationMessage">{field.validationMessage}</div>
          )}
        </div>
      ))}
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={isReqEmpty || !isValid}
      >
        {submitLabel}
      </button>
    </Fragment>
  )
}
