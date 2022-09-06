import Image from "next/image"
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore"
import GroupIcon from "@mui/icons-material/Group"
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import { signIn} from "next-auth/react"
function Home() {
   return (
        <div className="space-y-10 relative">
           <header className="flex justify-around items-center py-4">
           <div className="relative w-20 h-20 ">
           <Image src="/logo.png" layout="fill" objectFit="contain" alt="header image"/>
           </div>
           <div className="flex items-center sm:divide-x divide-gray-300">
                <div className="hidden sm:flex space-x-10 pr-4">
               <HeaderLink Icon={ExploreIcon} text="Discover" />
               <HeaderLink Icon={GroupIcon} text="People" />
               <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning"/>
               <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
               </div>
               <div className="pl-4">
               <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2 " onClick={()=>signIn()} > Sign in </button>
               </div>
              
           </div>

           </header>
           <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
          <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">Welcome to your professional community</h1>
          <div className="space-y-4">
          <div className="main">
          <h2 className="text-xl"> Search For a Job</h2>
          <ArrowForwardIosRoundedIcon className="text-gray-700"/>
          </div>
          <div className="main">
          <h2 className="text-xl">Find A Person You Know</h2>
          <ArrowForwardIosRoundedIcon className="text-gray-700"/>
          </div>
          <div className="main">
          <h2 className="text-xl">Learn A New Skill</h2>
          <ArrowForwardIosRoundedIcon className="text-gray-700"/>
          </div>
          </div>
          </div> 
          <div className="relative xl:absolute w-80 h-70 xl:w-[600px] xl:h-[400px] rounded-full top-69 right-10">
          <Image className="rounded-full" src="/inhero2.jpg" layout="fill" alt="linkedin hero image" priority />
          </div>
           </main>
        </div>
    );
}

export default Home;



  
 
 