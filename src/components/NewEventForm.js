import { useState } from 'react'
import './NewEventForm.css'

const NewEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('manchester');

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('manchester')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000)
    }

    console.log(event)
    addEvent(event)
    resetForm()
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input type="text" name="title" id="title"
          value={title} 
          onChange={e => setTitle(e.target.value)} 
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" name="date" id="date"
          value={date} 
          onChange={e => setDate(e.target.value)} 
        />
      </label>
      <label>
        <span>Event Location:</span>
        <select
          onChange={e => setLocation(e.target.value)}
        >
          <option value="manchester">Manchester</option>
          <option value="london">London</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
 
export default NewEventForm;