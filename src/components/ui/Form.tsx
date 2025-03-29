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
      action=""
      className="mx-auto flex max-h-[534px] max-w-[484px] flex-wrap gap-x-4 gap-y-[14.5]"
    >
      {formFields.map((field) => (
        <div key={field.id} className="flex flex-1 flex-col">
          <input
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            className="bg-neutral-extra-light rounded-[10px] px-[24px] py-[20px]"
          />
        </div>
      ))}

      <div className="w-full">
        <input
          type="text"
          id="subject"
          placeholder="Asunto"
          className="bg-neutral-extra-light w-full rounded-[10px] px-[24px] py-[20px]"
        />
      </div>
      <div className="w-full">
        <textarea
          id="message"
          placeholder="Mensaje"
          className="bg-neutral-extra-light w-full rounded-[10px] px-[24px] py-[20px]"
        />
      </div>

      <div className="w-full">
        <Button style="primary" className="w-full!">
          Enviar
        </Button>
      </div>
    </form>
  );
}
