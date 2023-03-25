const callmethod = ()=> {
  console.log("Hey this is sam")
}

// functional component - Main page
function StartApp() {
  return (
    <div>
        <button type="button" onClick={()=>callmethod()}>Sample button</button>
      <div>This is start page</div>
    </div>
  );
}

export default StartApp;
