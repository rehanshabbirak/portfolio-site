import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="w-12 h-12 rounded-full glass-effect border-2 hover:scale-110 transition-all duration-300"
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-accent" />
        ) : (
          <Moon className="h-5 w-5 text-primary" />
        )}
      </Button>
    </div>
  )
}

export default ThemeToggle

