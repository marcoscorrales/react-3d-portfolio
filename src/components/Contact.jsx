import { useState, useRef } from "react"
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from "../hoc"
import { slideIn } from '../utils/motion'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { useTranslation } from "react-i18next"

const Contact = () => {
  const [t] = useTranslation('global');
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_r583xrk',
      'template_huebl0p',
      {
        from_name: form.name,
        to_name: 'Marcos',
        from_email: form.email,
        to_email: 'contact@marcoscorralesdev.com',
        message: form.message,
      },
      'MT8egtC5h3RQno5ZL'
    )
    .then(() => {
      setLoading(false)
      alert(t("contact.success"))

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert(t("contact.error"))
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <section className="flex items-center gap-5 mb-5">
        <a href="https://github.com/marcoscorrales" target="_blank" rel="noopener noreferrer">
          <BsGithub size={30}/>
        </a>

        <a href="https://www.linkedin.com/in/marcos-corrales-castro" target="_blank" rel="noopener noreferrer">
          <BsLinkedin size={30}/>
        </a>
          
          
        </section>
        <p className={styles.sectionSubText}>{t("contact.subtitle")}</p>
        <h3 className={styles.sectionHeadText}>{t("contact.title")}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
            {t("contact.form.name.title")}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.form.name.placeholder")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact.form.email.title")}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact.form.email.placeholder")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact.form.message.title")}
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact.form.message.placeholder")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border font-medium"
            />
          </label>

          <button type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? t("contact.form.submit.sending") : t("contact.form.submit.title")}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact") 