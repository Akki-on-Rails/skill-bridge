import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import styles from "../styles/App.scss"
import singupImg from "../images/undraw_loving_story_re_wo5x.svg"
{
  /* <script src="https://kit.fontawesome.com/ee48995130.js" crossorigin="anonymous"/>  */
}

const Signup = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [location, setLocation] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState("")
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(name, age, location, phone, email, password)
  }

  return (
    <div className="signup-body">
      <h1>
        <span>Unlock your potential</span> with skill bridge
      </h1>
      <div className="signup-form-img">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h3>Sign-up</h3>
          <field class="input-icons">
            <i class="fa-solid fa-id-card icon"></i>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
            />
          </field>

          <field className="input-icons">
            <i class="fa-solid fa-calendar-day icon"></i>
            <input
              type="date"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              placeholder="Birth date"
            />
          </field>

          <field className="input-icons">
            <i class="fa-regular fa-location-dot icon"></i>
            <select
              id="country-state"
              name="country-state"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            >
              <option value="" disabled selected hidden>
                {" "}
                State you live in
              </option>

              <option value="Baden-Württemberg">Baden-Württemberg</option>
              <option value="Bavaria">Bavaria</option>
              <option value="Berlin">Berlin</option>
              <option value="Brandenburg">Brandenburg</option>
              <option value="Bremen">Bremen</option>
              <option value="Hamburg">Hamburg</option>
              <option value="Hesse">Hesse</option>
              <option value="Lower Saxony">Lower Saxony</option>
              <option value="Mecklenburg-Vorpommern">
                Mecklenburg-Vorpommern
              </option>
              <option value="North Rhine-Westphalia">
                North Rhine-Westphalia
              </option>
              <option value="Rhineland-Palatinate">Rhineland-Palatinate</option>
              <option value="Saarland">Saarland</option>
              <option value="Saxony">Saxony</option>
              <option value="Saxony-Anhalt">Saxony-Anhalt</option>
              <option value="Schleswig-Holstein">Schleswig-Holstein</option>
              <option value="Thuringia">Thuringia</option>
            </select>
          </field>

          <field className="input-icons">
            <i class="fa-regular fa-phone icon"></i>
            <input
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Phone number"
            />
          </field>

          <field className="input-icons">
            <i class="fa-regular fa-envelope icon"></i>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
          </field>

          <field className="input-icons">
            <i class="fa-solid fa-lock icon"></i>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </field>
          <p>Password has to have at least 8 characters.</p>
          
          <span> Sign up with</span>
          <field>
          <input type="checkbox" />  
          <span>I Confirm that I Understand and Agree to SkillBridge's Conditions </span> 

          </field>
          <button className="btn_flat" disabled={isLoading}>
            Signup
          </button>
          {error && <div className="error">{error}</div>}
        </form>
        <div className="form-img">
          <img src={singupImg} />
        </div>
      </div>
    </div>
  )
}
export default Signup
