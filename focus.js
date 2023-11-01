import { useRef ,useEffect} from 'react';





export default function Focus() {
  const inputRef =useRef(null)

  

  useEffect(() => {
    // console.log(inputRef.current)
    inputRef.current.focus()
  }, []);



  return (
    <div className="dog-pics">
      
      <input ref={inputRef} />
      
    </div>
  );
}
