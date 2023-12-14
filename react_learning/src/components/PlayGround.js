
// functional component - Main page
function PlayGround() {

    // Pattern match using Regular Expressions
  const checkPattern = () => {
    const obj = document.getElementById('input');
    console.log(obj.value)
    const pattern = /^[A-Za-z0-9]+$/;
    const mailPattern = /^[a-n]+[@][a-z]mail.com$/;
    if(mailPattern.test(obj.value)){
        console.log("found mail id", obj.value);
    }else {
        console.log('Not mail');
      }
    if (pattern.test(obj.value)) {
      console.log('Value matches the pattern.');
    } else {
      console.log('Value does not match the pattern.');
    }
  }
  return (
    <div>
        <input id='input' type='text' ></input>
        <button title='click' onClick={checkPattern}> clcicc</button>
    </div>
  );
}

export default PlayGround;
