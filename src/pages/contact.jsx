import React from "react";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_ID = process.env.REACT_APP_FORMSPARK_ID;

export default function Contact(props) {

const [submit, submitting] = useFormspark({
  formId: FORMSPARK_ID,
});

const inquiry = {
  name: '',
  email: '',
  message:''
};

console.log('inquiry', inquiry)

function createMessage(event){
  const field = event.target.name;
  console.log(field)
  console.log(event.target.value)
  console.log('inside function', inquiry)
  inquiry[field] = event.target.value;
}

const onSubmit = async (event) => {
  event.preventDefault();
  await submit({ inquiry });
  alert("Form submitted");
};

  return(
    <main className="max-w-screen-xl mx-auto px-3 md:px-6 mt-24">
      <div className="text-center my-12">
        <h2 className="leading-6 text-green-800 text-opacity-70 font-semibold tracking-wide uppercase">
          Business Inquiries
        </h2>
        <h3 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 md:text-3xl">
          Contact Me
        </h3>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <h2 className="text-center text-xl leading-8 font-bold tracking-tight text-gray-900 md:text-2xl">
            Get In Touch
          </h2>
          <p></p>
        </div>
        <div className="col-span-2">
          <form onSubmit={onSubmit} className="mx-auto">
            <label className="sr-only" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md mb-6" onChange={createMessage}/>
            <label className="sr-only" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md mb-6" onChange={createMessage} />
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md mb-6"
              onChange={createMessage}
            ></textarea>
            <button type="submit" disabled={submitting} className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-800 bg-opacity-70 hover:bg-opacity-80 focus:outline-none">Send</button>
          </form>
        </div>
      </div>
    </main>
  )
}