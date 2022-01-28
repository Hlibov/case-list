import s from '../btn/btn.module.scss'

const Btn = () => {

  return (
    <button className={`${s.btn} ${s.btn_color_successful}`}>Create Case</button>
  )
}

export default Btn;