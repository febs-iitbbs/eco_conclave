// "use client";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import './../styles/contact.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpzvnvdb");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully");
      toast.clearWaitingQueue();
      let form = document.getElementById("form");
      form.reset();
    }
  }, [state]);

  return (
    <div className="xl:ml-20">
      <form
        id="form"
        className="max-w-lg custom2 max-[1000px]:mt-4 lg:ml-6 mx-auto p-8 shadow-lg rounded-lg"
        style={{
          background: 'linear-gradient(315deg, #4d4855 0%, #000000 65%)',
          border: '4px solid #5d4d49',  // or any color that matches your design
          borderRadius: '10px', // adjust border radius as needed
        }}
        onSubmit={handleSubmit}
      >


        <p className="leading-relaxed mb-6 text-gray-600 dark:text-gray-400" style={{fontFamily:"Montserrat"}}>
          Feel free to reach out to us with any questions or doubts.
        </p>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded py-2 px-3 text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded py-2 px-3 text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded py-2 px-3 text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 h-32 resize-none"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <ValidationError errors={state.errors} />
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
          We'll get back to you as soon as possible!
        </p>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 text-white font-semibold rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
