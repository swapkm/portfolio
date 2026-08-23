import Link from "next/link"

export default function Footer() {
  return (
    <footer className="px-8 md:px-16 py-8 border-t border-yellow-600/10 flex flex-col items-center justify-center gap-4 text-center">
        <span className="text-yellow-500 text-lg font-bold">SwapKam</span>
        <span className="text-xs">© 2025 SwapKam. All rights reserved.</span>
      </footer>
  )
}