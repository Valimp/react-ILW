interface FormData {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const fromInput = ({value, onChange}: FormData) => {
  return (
    <input 
      placeholder="Ajouter une tâche..." 
      type='text' 
      value={value} 
      onChange={onChange}
      className="h-12 rounded-lg shadow placeholder-italic placeholder-zinc-400 bg-zinc-200 p-3 block border border-zinc-400 focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1"
    />
  )
}

export default fromInput