import React, {useState} from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_ID = process.env.REACT_APP_FORMSPARK_ID;

export default function Contact(props) {

  const [formStatus, setFormStatus] = useState(null);
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_ID,
  });

  const inquiry = {
    name: '',
    email: '',
    message:''
  };

  function createMessage(event){
    const field = event.target.name;
    inquiry[field] = event.target.value;
  }

const onSubmit = async (event) => {
  event.preventDefault();
  try{
    await submit({ inquiry });
    setFormStatus(()=> true)
  } catch{
    setFormStatus(()=> false)
  }
};

  return(
    <main className="max-w-screen-lg mx-auto px-3 md:px-6 mt-24">
      <div className="text-center my-12">
        <h2 className="leading-6 text-green-800 text-opacity-70 font-semibold tracking-wide uppercase">
          Business Inquiries
        </h2>
        <h3 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-3xl">
          Contact Me
        </h3>
      </div>
      <div className="sm:grid grid-cols-4 gap-12">
        <div className="mx-auto col-span-2 sm:px-8 mb-8 sm:mb-6 pl-4 sm:pl-0">
          <h2 className="text-xl leading-8 font-bold tracking-tight text-gray-900 md:text-2xl">
            Get In Touch
          </h2>
          <p className="mt-3 text-lg leading-6 text-gray-500">
            Let's chat, tell me about your project!
          </p>
        </div>
        <div className="col-span-2">
          {formStatus === true &&
            <div className="mb-6 rounded-md text-gray-900 bg-green-100 py-4 text-center">Thank you for your inquiry!</div>
          }
          {formStatus === false &&
            <div className="mb-6 rounded-md text-gray-900 bg-red-100 py-4 px-4 text-center">Sorry, we encountered an error with your submission. Please try again later!</div>
          }
          <form onSubmit={onSubmit} className="mx-auto">
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md mb-8 sm:mb-6"
              onChange={createMessage}
            />
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md mb-8 sm:mb-6"
              onChange={createMessage}
            />
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md mb-8 sm:mb-6"
              onChange={createMessage}
              rows="6"
            ></textarea>
            <button type="submit" disabled={submitting} className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-800 bg-opacity-70 hover:bg-opacity-80 w-full sm:w-auto">Send</button>
          </form>
        </div>
      </div>
    </main>
  )
}
