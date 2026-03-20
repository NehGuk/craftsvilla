import "./Contact.css"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

function Contact() {
  const navigate = useNavigate()

  type FormData = {
    name: string
    email: string
    phone: string
    message: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  async function onSubmit(data: FormData) {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...data,
      }).toString(),
    })
    reset()
    navigate("/thankyou")
  }

  return (
    <section className="content">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          {...register("name", { required: "Name is required." })}
          type="text"
          placeholder="Your name"
          className={errors.name ? "error" : ""}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address.",
            },
          })}
          type="email"
          placeholder="Your email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Phone</label>
        <input
          {...register("phone", {
            required: "Phone is required.",
            pattern: {
              value: /^[0-9+\s]{7,15}$/,
              message: "Enter a valid phone number.",
            },
          })}
          type="tel"
          placeholder="+47 44444444"
        />
        {errors.phone && <p>{errors.phone.message}</p>}

        <label>Message</label>
        <textarea
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
          placeholder="Your message here."
        />
        {errors.message && <p>{errors.message.message}</p>}
        <div className="submit_area">
          <button type="submit" className="cta">
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
