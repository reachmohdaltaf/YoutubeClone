import Button from "./Button"
import './ButtonList.css'

const ButtonList = () => {
  return (
    <div className="buttonlist flex gap-4 max-w-[170vh] overflow-scroll  ml-10">
      <Button name="all"/>
      <Button name="cricket"/>
      <Button name="Gaming"/>
      <Button name="Live"/>
      <Button name="News"/>
      <Button name="Javascript"/>
      <Button name="valentine"/>
      <Button name="Podcast"/>
      <Button name="Cooking"/>
      <Button name="Superhero"/>
      <Button name="Music"/>
      <Button name="Doctor"/>
      <Button name="Biology"/>
     
    </div>
  )
}

export default ButtonList