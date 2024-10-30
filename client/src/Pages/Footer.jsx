import React from 'react'

function Footer() {
  return (
    <footer className="bg-transparent py-4 mt-15 border-t border-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-1">
          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} PaperHub. All rights reserved. Made with ❤️ by Himanshu
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
