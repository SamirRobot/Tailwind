import { useState, useEffect } from "react";

function Test() {
    // her defe buttona basanda  +14 artsin ve logda   ededleri toplayaraq gostersin  mes:   deyisdi:14 
    //deyisdi:28
    //deyisdi:42
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Xos geldiz")
  },[]) 
  return (
    <>
     <button onClick={() => setCount(count + 14)}>Click</button>
    </>
  );
}

export default Test;