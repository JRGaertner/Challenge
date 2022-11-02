export default function Page3() {
  return (
    <>
      <h1>Form</h1>
      <form method='post'>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' id='email' />

        <input type='radio' name='choice' id='protogen' />
        <label htmlFor='protogen'>Protogen</label>
        <input type='radio' name='choice' id='synth' />
        <label htmlFor='protogen'>Synth</label>
        <input type='submit' />
      </form>
    </>
  )
}