import Navigation from "../components/navigation/navbar"
// import NavLinks from "@/components/menu/navlink"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
        <Navigation/>
        <h1 className="font-bold text-2xl mt-4">TODO LIST</h1>
    </main>
  )
}
