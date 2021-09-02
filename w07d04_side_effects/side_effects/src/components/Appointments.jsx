import axios from 'axios';
import { useEffect, useState } from 'react';


const Appointments = () => {
  const [appointments, setAppointments] = useState({});
  const [selectedAppt, setSelectedAppt] = useState(null);
  const [apptId, setApptId] = useState("")

  useEffect(() => {
    axios.get('http://localhost:8001/api/appointments')
      .then(result => {
        setAppointments(result.data)
        console.log(result)
      })
  }, [])

  useEffect(() => {
    console.log('apparently the apptId changed');
    const targetAppointment = appointments[apptId]
    console.log(targetAppointment)
    setSelectedAppt(targetAppointment)
  }, [apptId])

  return (
    <div>
      <h2>Appointments</h2>
      <h2>Total number of appointments: { Object.keys(appointments).length }</h2>
      <div>
        <label>Enter appointment id</label>
        <br />
        <input 
          value={apptId}
          onChange={(event) => setApptId(event.target.value)}
        />
      </div>
      <div>
        <h2>selected appointment details</h2>
        {selectedAppt && <p>interview number {selectedAppt.id} at {selectedAppt.time}</p>}
        {selectedAppt && selectedAppt.interview && <p>student is {selectedAppt.interview.student}</p>}
      </div>
    </div>
  )
}

export default Appointments;