import React, {useState} from 'react';
import './App.css';
import './style.css';

function StudentInformation() {
const [fullname, setFullname] = useState('');
const [email, setEmail] = useState('');
const [dateofbirth, setDatebirth] = useState('');
const [age, setAge] = useState('');
const [gender, setGender] = useState('');
const [phonenum, setPhoneNum] = useState('');
const [address, setAddress] = useState('');
const [course, setCourse] = useState('');
const [enrollterm, setEnrollterm] = useState('');
const [emergencycontactnum, setEmergencycontactnum] = useState('');
const [emergencyphcontactnum, setEmergencyphcontactnum] = useState('');
const [comments, setComments] = useState('');
const [submitted, setSubmitted] = useState('false');
const [successMessage, setSuccessMessage] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted', {fullname, email, dateofbirth, age, gender, phonenum, address, course, enrollterm, emergencycontactnum, emergencyphcontactnum });
    setSubmitted(true);
    setSuccessMessage('Registered Successful');

}

return(
    <body>
    <div className='border'>
    <div className='StudentInformation'>
        <header className="App-header">
        <h1> AUF Student Information </h1>
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlfor="fullname">Full Name:</label>
                <input className="form-control" type="text" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)}  required />
            </div>

            <div>
                <label htmlfor='email'>Email:</label>
                <input className="form-control" type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  required />
            </div>

            <div>
                <label htmlfor="dateofbirth">date of Birth:</label>
                <input className="form-control" type="date" id="dateofbirth" value={dateofbirth} onChange={(e) => setDatebirth(e.target.value)}  required />
            </div>

            <div>
                <label htmlfor="age">Age:</label>
                <input className="form-control" type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)}  required />
            </div>

            <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select className="form-control" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

            <div>
                <label htmlfor="phonenum">Phone number:</label>
                <input className="form-control" type="text" id="phonenum" value={phonenum} onChange={(e) => setPhoneNum(e.target.value)}  required />
            </div>

            <div>
                <label htmlfor="username">Address:</label>
                <input className="form-control" type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)}  required />
            </div>

            <div>
                <label htmlfor='email'>Course:</label>
                <input className="form-control" type="text" id="course" value={course} onChange={(e) => setCourse(e.target.value)}  required />
            </div>

            <div>
                <label htmlfor="password">Preffered Enrollment Term:</label>
                <input className="form-control" type="text" id="enrollterm" value={enrollterm} onChange={(e) => setEnrollterm(e.target.value)}  required />
            </div>

            <div>
                <label htmlfor="username">Emergency Contact Number:</label>
                <input className="form-control" type="text" id="emergencycontactnum" value={emergencycontactnum} onChange={(e) => setEmergencycontactnum(e.target.value)}  required />
            </div>

            <div>
                <label htmlfor='email'>Emergency Phone Contact Number:</label>
                <input className="form-control" type="text" id="emergencyphcontactnum" value={emergencyphcontactnum} onChange={(e) => setEmergencyphcontactnum(e.target.value)}  required />
            </div>

            <div className="inside">
                        <label htmlFor="comments">Additional Comments:</label>
                        <textarea className="form-control" id="comments" value={comments} onChange={(e) => setComments(e.target.value)} rows="4" placeholder="Add any additional comments here..."></textarea>
                    </div>

            <br></br>
       
            <div>
                <button className="btn btn-success" type='submit'>Register</button>
                <form>
                {submitted && <p className='success-message'>{successMessage} </p> } 
                </form>
            </div>
        </form>

        </header>

    </div>
    </div>
</body>
);


}
export default StudentInformation;

