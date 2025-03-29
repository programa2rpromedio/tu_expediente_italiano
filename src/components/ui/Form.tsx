import Button from './Button';

const formFields = [
  {
    label: 'Nombre',
    type: 'text',
    id: 'name',
    placeholder: 'Nombre',
  },
  {
    label: 'Apellido',
    type: 'text',
    id: 'last_name',
    placeholder: 'Apellido',
  },
  {
    label: 'Email',
    type: 'email',
    id: 'email',
    placeholder: 'Email',
  },
  {
    label: 'Teléfono',
    type: 'tel',
    id: 'phone',
    placeholder: 'Teléfono',
  },
  /*   {
    label: 'Asunto',
    type: 'text',
    id: 'subject',
    placeholder: 'Asunto',
  },
  {
    label: 'Mensaje',
    type: 'textarea',
    id: 'message',
    placeholder: 'Mensaje',
  }, */
];

export default function Form() {
  return (
    <form
      action=''
      className='flex flex-wrap gap-y-[14.5] gap-x-4 max-w-[484px] mx-auto max-h-[534px]'
    >
      {formFields.map((field) => (
        <div
          key={field.id}
          className='flex flex-col flex-1 '
        >
          <input
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            className='bg-neutral-extra-light py-[20px] px-[24px] rounded-[10px]'
          />
        </div>
      ))}

      <div className='w-full'>
        <input
          type='text'
          id='subject'
          placeholder='Asunto'
          className='bg-neutral-extra-light py-[20px] px-[24px] rounded-[10px] w-full'
        />
      </div>
      <div className='w-full'>
        <textarea
          id='message'
          placeholder='Mensaje'
          className='bg-neutral-extra-light py-[20px] px-[24px] rounded-[10px] w-full'
        />
      </div>

      <div className='w-full'>
        <Button
          style='primary'
          className='w-full!'
        >
          Enviar
        </Button>
      </div>
    </form>
  );
}
