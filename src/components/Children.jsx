
const Children = ({ title, children }) => {
  
  return (
    <>
      <h3>{title}</h3>
      { children }
      <h3>This is the end of {title}</h3>
    </>
  )
}

export default Children