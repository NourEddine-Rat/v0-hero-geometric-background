"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Play, Edit3, Settings } from "lucide-react"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric({
  badge = "Kokonut UI",
  title1 = "Let's beat your next",
  title2 = "Digital Vision",
}: {
  badge?: string
  title1?: string
  title2?: string
}) {
  const words = ["job", "sales call", "meeting"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timeoutId: NodeJS.Timeout

    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        }, 100) // Typing speed
      } else {
        // Finished typing, wait then start deleting
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Pause after typing
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50) // Deleting speed (faster)
      } else {
        // Finished deleting, move to next word
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayedText, isTyping, currentWordIndex]) // Removed words from dependencies

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative group">
              {/* Outermost glow - largest radius */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400/40 to-rose-400/40 blur-3xl scale-[3] opacity-30 group-hover:opacity-60 transition-all duration-1000" />

              {/* Second layer - medium glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-indigo-300/30 blur-2xl scale-[2.5] opacity-40 group-hover:opacity-80 transition-all duration-800" />

              {/* Third layer - closer glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400/50 to-rose-400/50 blur-xl scale-[2] opacity-50 group-hover:opacity-90 transition-all duration-600" />

              {/* Inner ambient light */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent blur-lg scale-150 opacity-60 group-hover:opacity-100 transition-all duration-500" />

              <div className="w-16 h-16 bg-black/90 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Stronger box-shadow for external glow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/20 to-rose-500/20 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-all duration-700" />

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/20 via-transparent to-rose-500/20" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                <div className="relative z-10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white drop-shadow-lg">
                    {/* Main triangle */}
                    <path d="M12 4L20 17H4L12 4Z" fill="currentColor" className="opacity-90" />
                    {/* Small accent dot to make it unique */}
                    <circle cx="12" cy="13.5" r="2" fill="currentColor" className="opacity-60" />
                  </svg>
                </div>

                <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none" />
                <div className="absolute inset-2 rounded-md bg-gradient-to-br from-indigo-400/10 to-rose-400/10 pointer-events-none animate-pulse" />
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/15 to-rose-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl scale-[4] -z-20" />
            </div>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}{" "}
                <div className="inline-block w-40 text-left whitespace-nowrap">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                    {displayedText}
                    <span
                      className={`inline-block w-0.5 h-6 bg-white ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
                    />
                  </span>
                </div>
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-sm text-white/70 mb-6 leading-relaxed font-medium tracking-wide max-w-md mx-auto">
              Prepare, practice, and perfect your performance with AI-powered coaching.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6"
          >
            <motion.button
              custom={0}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Play size={16} />
              Start Session
            </motion.button>

            <motion.button
              custom={1}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 bg-white/[0.05] text-white font-medium rounded-lg border border-white/20 hover:bg-white/[0.1] transition-all duration-300 backdrop-blur-sm"
            >
              <Edit3 size={16} />
              Edit Prompt
            </motion.button>

            <motion.button
              custom={2}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 bg-transparent text-white/70 font-medium rounded-lg border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
            >
              <Settings size={16} />
              Settings
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}
