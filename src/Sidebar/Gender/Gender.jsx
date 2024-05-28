import './Gender.css'
import Input from '../../components/Input'

function Gender({handleChange}) {
  return (
    <div>
        <h2 className="sidebar-title gender-title">Gender</h2>
        <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name='test5'/>
            <span className='checkmark all'></span>
        </label>
        <Input
        handleChange={handleChange}
        value="male"
        title="Male"
        name="test5"
      /> 
      <Input
        handleChange={handleChange}
        value="female"
        title="Female"
        name="test5"
      /> 
    </div>
  )
}

export default Gender;