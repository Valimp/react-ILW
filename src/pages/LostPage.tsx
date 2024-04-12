import Typo from "../components/Typo"
import { Link } from "react-router-dom"

const LostPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <Typo type='h1'>Je pense que vous vous êtes perdu..</Typo>
        <Link to='/' className='mt-5 px-3 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 duration-300'>Retour à l'accueil</Link>
    </div>
  )
}

export default LostPage