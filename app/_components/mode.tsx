"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler"


export default function ModeToggle() {
  const { setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme => {
      if (theme === "dark") return "light"
      return "dark"
    })
  }

  return (
    
        <ThemeTogglerButton
        variant="accent" 
        modes={[("dark"), ("light")]}/>
    
  )
}
