import "./App.css";
import { React, useState } from "react";

function App() {
    // State to store form data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState(null);
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    // State for login (phone number entry)
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign Up and Sign In
    const [userData, setUserData] = useState({}); // Store the user data

    // Handle submit for form data (Sign Up)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Save data to userData state (in real life, you would store this in a database)
        setUserData({
            firstName,
            lastName,
            email,
            contact,
            gender,
            subjects,
            resume,
            url,
            selectedOption,
            about,
        });
        alert("Sign Up Successful! You can now Sign In.");
        handleSignOut(); // Automatically sign the user out after signing up
    };

    // Handle login based on phone number (Sign In)
    const handleLogin = (e) => {
        e.preventDefault();
        // Check if the phone number matches the stored one
        if (phoneNumber === userData.contact) {
            setIsLoggedIn(true);
            setPhoneNumber("");
        } else {
            alert("Phone number not found! Please Sign Up.");
        }
    };

    // Handle toggling between Sign Up and Sign In forms
    const toggleSignUp = () => {
        setIsSignUp(true);
        setIsLoggedIn(false);
    };

    const toggleSignIn = () => {
        setIsSignUp(false);
        setIsLoggedIn(false);
    };

    // Handle user sign out
    const handleSignOut = () => {
        setIsLoggedIn(false);
        setUserData({});
    };

    return (
        <div className="App">
            <h1>Form in React</h1>

            {/* Login or Sign Up section */}
            {!isLoggedIn ? (
                <div>
                    {!isSignUp ? (
                        // Sign In Form
                        <div>
                            <h2>Sign In</h2>
                            <form onSubmit={handleLogin}>
                                <label htmlFor="phoneNumber">Enter Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Enter your phone number"
                                    required
                                />
                                <button type="submit">Sign In</button>
                            </form>
                            <button onClick={toggleSignUp}>Don't have an account? Sign Up</button>
                        </div>
                    ) : (
                        // Sign Up Form
                        <div>
                            <h2>Sign Up</h2>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="firstname">First Name*</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter First Name"
                                    required
                                />

                                <label htmlFor="lastname">Last Name*</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Enter Last Name"
                                    required
                                />

                                <label htmlFor="email">Enter Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                    required
                                />

                                <label htmlFor="contact">Contact*</label>
                                <input
                                    type="tel"
                                    name="contact"
                                    id="contact"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    placeholder="Enter Mobile number"
                                    required
                                />

                                <label htmlFor="gender">Gender*</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    id="male"
                                    checked={gender === "male"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Male
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    id="female"
                                    checked={gender === "female"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Female
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    id="other"
                                    checked={gender === "other"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Other

                                <label htmlFor="lang">Your best Subject</label>
                                <input
                                    type="checkbox"
                                    name="lang"
                                    id="english"
                                    checked={subjects.english}
                                    onChange={() => setSubjects((prev) => ({ ...prev, english: !prev.english }))}
                                />
                                English
                                <input
                                    type="checkbox"
                                    name="lang"
                                    id="maths"
                                    checked={subjects.maths}
                                    onChange={() => setSubjects((prev) => ({ ...prev, maths: !prev.maths }))}
                                />
                                Maths
                                <input
                                    type="checkbox"
                                    name="lang"
                                    id="physics"
                                    checked={subjects.physics}
                                    onChange={() => setSubjects((prev) => ({ ...prev, physics: !prev.physics }))}
                                />
                                Physics

                                <label htmlFor="file">Upload Resume*</label>
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    onChange={(e) => setResume(e.target.files[0])}
                                    required
                                />

                                <label htmlFor="url">Enter URL*</label>
                                <input
                                    type="url"
                                    name="url"
                                    id="url"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="Enter URL"
                                    required
                                />

                                <label>Select your choice</label>
                                <select
                                    name="select"
                                    id="select"
                                    value={selectedOption}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Select your Answer
                                    </option>
                                    <optgroup label="Beginner">
                                        <option value="1">HTML</option>
                                        <option value="2">CSS</option>
                                        <option value="3">JavaScript</option>
                                    </optgroup>
                                    <optgroup label="Advanced">
                                        <option value="4">React</option>
                                        <option value="5">Node</option>
                                        <option value="6">Express</option>
                                        <option value="t">MongoDB</option>
                                    </optgroup>
                                </select>

                                <label htmlFor="about">About</label>
                                <textarea
                                    name="about"
                                    id="about"
                                    cols="30"
                                    rows="10"
                                    value={about}
                                    onChange={(e) => setAbout(e.target.value)}
                                    placeholder="About yourself"
                                    required
                                ></textarea>

                                <button type="submit">Submit</button>
                            </form>
                            <button onClick={toggleSignIn}>Already have an account? Sign In</button>
                        </div>
                    )}
                </div>
            ) : (
                // Logged In
                <div>
                    <h2>Welcome, {userData.firstName}!</h2>
                    <p>Your Details:</p>
                    <ul>
                        <li>First Name: {userData.firstName}</li>
                        <li>Last Name: {userData.lastName}</li>
                        <li>Email: {userData.email}</li>
                        <li>Contact: {userData.contact}</li>
                        <li>Gender: {userData.gender}</li>
                        <li>Subjects: {Object.keys(userData.subjects).filter(subject => userData.subjects[subject]).join(", ")}</li>
                        <li>Resume: {userData.resume ? userData.resume.name : "No resume uploaded"}</li>
                        <li>URL: {userData.url}</li>
                        <li>About: {userData.about}</li>
                    </ul>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            )}
        </div>
    );
}

export default App;
