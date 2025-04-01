'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './Button';
import emailjs from 'emailjs-com';
import Alert from './Alert';
import { useRouter } from "next/navigation";

interface FieldTypes {
  name: string;
  last_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

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
  const router = useRouter()
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState<FieldTypes>({
    name: '',
    last_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_657n1yg',
        'template_2uf8kpf',
        formData as unknown as Record<string, unknown>,
        'rr8Dwe7N8P71UCAHN'
      )
      .then((response) => {
        setAlert({ message: 'Mensaje enviado correctamente', type: 'success' });
        setTimeout(() => {
          setAlert(null);
          router.push("/agradecimientos");
        }, 2000);
      })
      .catch((error) => {
        setAlert({ message: 'Hubo un error al enviar el mensaje', type: 'error' });
        setTimeout(() => setAlert(null), 3000);
      });
  };

  return (
    <>
      {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
      <form
        action=""
        onSubmit={handleSubmit}
        className="mx-auto flex max-h-[534px] max-w-[484px] flex-wrap gap-x-4 gap-y-[14.5]"
      >
        {formFields.map((field) => (
          <div key={field.id} className="flex flex-1 flex-col">
            <input
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              value={formData[field.id as keyof FieldTypes]}
              onChange={handleChange}
              className="bg-neutral-extra-light rounded-[10px] px-[24px] py-[20px]"
            />
          </div>
        ))}

        <div className="w-full">
          <input
            type="text"
            id="subject"
            placeholder="Asunto"
            value={formData.subject}
            onChange={handleChange}
            className="bg-neutral-extra-light w-full rounded-[10px] px-[24px] py-[20px]"
          />
        </div>
        <div className="w-full">
          <textarea
            id="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            className="bg-neutral-extra-light w-full rounded-[10px] px-[24px] py-[20px]"
          />
        </div>

        <div className="sm:w-full w-[195px] bg-red-200">
          <Button style="primary" className="sm:w-full! w-[195px]">
            Enviar
          </Button>
        </div>
      </form>
    </>
  );
}
