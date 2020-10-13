#### Installation
Clone `https://github.com/akhar/contacts-form.git` 

Install dependencies `npm install`

Run local dev server `npm start`

Open [http://localhost:1234/]()
 

#### Form configuration

You should pass configuration object to the `Form` component alongside with `onSubmit` function

```typescript jsx
<Form config={defaultConfig} onSubmit={onSubmit} />
```
See example at `app/config.ts`

#### Configuration schema

```typescript
type FormConfig = {
  submitLabel: string
  fields: Field[]
}

type Field = {
  label: string
  type: FieldType
  name: string
  required: boolean
  validationMessage?: string
}
```
At now, supported 3 types of inputs

```typescript
enum FieldType {
  TEXT,
  PHONE,
  DATE,
}
```

#### Validation rules
TEXT fields should contain more than 1 symbol.

PHONE fields should contain numbers only.

DATE should be before of now.

You can use your own validation messages by providing `validationMessage` at Form config.
