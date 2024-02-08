import { useForm } from 'react-hook-form';
import './styles/ContactForm.css';

const ContactForm = ({ onAddContact }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    onAddContact(data.name, data.number);
    reset();
  };

  return (
    <div>
      <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="input-name">
            <label className="label">Name</label>
            <input
              type="text"
              {...register('name', {
                pattern:
                  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                required: true,
              })}
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className="input-number">
            <label className="label">Number</label>
            <input
              type="tel"
              {...register('number', {
                pattern:
                  '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
                required: true,
              })}
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
        </div>
        <input className="btn-submit" type="submit" value="Add contact" />
      </form>
    </div>
  );
};

export default ContactForm;
