import Children from '../components/Children'

const ChildrenPage = () => {
  return (
    <>
      <h2>Children Page</h2>

      <Children title="Child compnent example 1" />

      <Children title="Child component example 2">
        <div>This is the first child</div>
        <div>This is the second child</div>
        <div>This is the third child</div>
      </Children>
    </>
  )
}

export default ChildrenPage