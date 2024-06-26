interface FormData {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const fromInput = ({value, placeholder, onChange}: FormData) => {
  return (
    <input 
      placeholder={placeholder} 
      type='text' 
      value={value} 
      onChange={onChange}
      className="h-12 w-full rounded-lg shadow placeholder-italic placeholder-zinc-400 bg-zinc-200 p-3 block border border-zinc-400 focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1"
      required
    />
  )
}

export default fromInput