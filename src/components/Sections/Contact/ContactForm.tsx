import React, {FC, memo, useCallback, useMemo, useRef, useState} from 'react';

import Spinner from '../../Shared/Spinner';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const ref = useRef<HTMLFormElement>(null);

  // State for form submit status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const sendEmail = useCallback(async () => {
    // await sendEmail(data);
    const fetcher = await fetch('/api/send', {
      method: 'POST',
      headers: {
        contentType: 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await fetcher.json();
  },[data]);

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */

      setIsSubmitting(true);
      const result = await sendEmail();

      setSubmitStatus(result ? 'success' : 'error');
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      ref.current?.reset();
    },
    [sendEmail],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage} ref={ref}>
      {/* Show spinner during submit */}
      {isSubmitting && <Spinner />}

      {/* Show result message */}
      {submitStatus === 'success' && (
        <div className="flex items-center justify-center">
          <div className="text-center text-lg font-bold text-white">Form submitted!</div>
        </div>
      )}

      {isSubmitting || submitStatus === 'success' ? null : (
        <>
          <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
          <input
            autoComplete="email"
            className={inputClasses}
            name="email"
            onChange={onChange}
            placeholder="Email"
            required
            type="email"
          />
          <textarea
            className={inputClasses}
            maxLength={250}
            name="message"
            onChange={onChange}
            placeholder="Message"
            required
            rows={6}
          />
          <button
            aria-label="Submit contact form"
            className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
            disabled={isSubmitting}
            type="submit">
            Send Message
          </button>
        </>
      )}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
