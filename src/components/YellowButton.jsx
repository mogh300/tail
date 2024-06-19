export default function YellowButton({ children }) {
  return (
    <button className="bg-scenery rounded-3xl text-background text-center px-8 h-12">
      {children}
    </button>
  )
}