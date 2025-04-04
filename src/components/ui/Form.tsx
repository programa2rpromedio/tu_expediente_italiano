'use client';

import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import Alert from './Alert';
import Button from './Button';

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
  const router = useRouter();
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
    // Validar que todos los campos estén completos
    if (
      !formData.name ||
      !formData.last_name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      setAlert({ message: 'Por favor complete todos los campos', type: 'error' });
      setTimeout(() => setAlert(null), 3000);
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlert({ message: 'Por favor ingrese un email válido', type: 'error' });
      setTimeout(() => setAlert(null), 3000);
      return;
    }

    // Validar formato de teléfono (números y +)
    const phoneRegex = /^[0-9+\s-]+$/;
    if (!phoneRegex.test(formData.phone)) {
      setAlert({ message: 'Por favor ingrese un teléfono válido', type: 'error' });
      setTimeout(() => setAlert(null), 3000);
      return;
    }

    emailjs
      .send(
        'service_657n1yg',
        'template_2uf8kpf',
        formData as unknown as Record<string, unknown>,
        'rr8Dwe7N8P71UCAHN'
      )
      .then(() => {
        setAlert({ message: 'Mensaje enviado correctamente', type: 'success' });
        setTimeout(() => {
          setAlert(null);
          router.push('/agradecimientos');
        }, 2000);
      })
      .catch(() => {
        setAlert({ message: 'Hubo un error al enviar el mensaje', type: 'error' });
        setTimeout(() => setAlert(null), 3000);
      });
  };

  return (
    <>
      {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
      <div className="flex justify-center items-center  h-[807px]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-y-[14.5px] gap-x-4 max-w-[484px] max-h-[534px] justify-center align-center m-auto text-center"
        >
          {formFields.map((field) => (
            <div key={field.id} className="flex flex-col w-full sm:w-auto items-center">
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                value={formData[field.id as keyof FieldTypes]}
                onChange={handleChange}
                className="bg-neutral-extra-light py-[20px] px-[24px] rounded-[10px] w-[234px] "
              />
            </div>
          ))}

          <div className="w-full ">
            <input
              type="text"
              id="subject"
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleChange}
              className="bg-neutral-extra-light py-[20px] px-[24px] rounded-[10px] w-[234px] sm:w-[484px] "
            />
          </div>
          <div className="w-full">
            <textarea
              id="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              className="bg-neutral-extra-light py-[20px] px-[24px] rounded-[10px] w-[234px] sm:w-[484px]"
            />
          </div>
          <div className="w-full flex justify-center ">
            <Button style="primary" className="!w-[234px] sm:!w-[484px] cursor-pointer">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
