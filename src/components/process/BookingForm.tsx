"use client"

import { useState, ChangeEvent, FormEvent } from "react"

type FormData = {
  firstName: string
  lastName: string
  email: string
  sessionType: string
  message: string
}

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    sessionType: "Wedding Photography",
    message: "",
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          className="input"
          required
        />

        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          className="input"
          required
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="input"
        required
      />

      <textarea
        name="message"
        placeholder="Tell me about your vision..."
        onChange={handleChange}
        className="input min-h-[120px]"
      />

      <button
        type="submit"
        className="bg-primary text-white px-8 py-3 rounded-lg font-bold"
      >
        Send Inquiry
      </button>
    </form>
  )
}